import { useEffect, useState } from "react";
import deleteApplicant from "../api/delete-applicant";
import { getQuestionnairesByAdvertisementID } from "../../questionnaire/api/questionnaire";
import { getAdvertisementByAttributeIDs } from "../helpers/get-advertisement-by-attribute-id";
import { getApplicantByAdvertisementIDs } from "../helpers/get-applicant-by-advertisement-id";
import { getAdvertisementAttributeByProfession } from "../helpers/get-advertisement-attribute-by-profession";

function sortAdvertisements(a, b, attributes, badges) {
	const aBadges = [...attributes.find((attribute) => attribute.id === a.attribute_id).badges].filter((item) => badges.includes(item));
	const bBadges = [...attributes.find((attribute) => attribute.id === b.attribute_id).badges].filter((item) => badges.includes(item));
	if (aBadges.length > bBadges.length) {
		return -1;
	}
	if (aBadges.length < bBadges.length) {
		return 1;
	}
	return 0;
}

/**
 * @param {{id:string, attribute:{profession:string}}} user
 * @returns {{}}
 */
function useGenerateAdvertisementData(user) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [advertisementData, setAdvertisementData] = useState(null);

	async function getNewAdvertisement(user) {
		setLoading(true);
		setError(null);
		if (!user.id) return;
		try {
			const attributes = await getAdvertisementAttributeByProfession(user.attribute.profession, true);
			const advertisements = await getAdvertisementByAttributeIDs(Array.from(attributes).map((attribute) => attribute.id));
			const applicants = await getApplicantByAdvertisementIDs(Array.from(advertisements).map((advertisement) => advertisement.id));
			const toFilter = [];
			for (const applicant of applicants) {
				const date = new Date();
				date.setDate(date.getDate() - 30);
				if (applicant.user_id === user.id) {
					if (applicant.accepted === null && applicant.cooldown < date.getTime()) {
						const res = await deleteApplicant(applicant.id);
						if (res.status !== 200) {
							throw new Error(`${res.status} (${res.statusText})`);
						}
					} else {
						toFilter.push(applicant.advertisement_id);
					}
				}
			}
			const filteredAdvertisements = advertisements.filter((advertisement) => !toFilter.includes(advertisement.id));
			if (!filteredAdvertisements.length) return setAdvertisementData(false);
			const badges = [...user.attribute.badges].map((item) => item.toUpperCase());
			filteredAdvertisements.sort((a, b) => sortAdvertisements(a, b, attributes, badges));
			const [advertisement] = filteredAdvertisements;
			const attribute = attributes.find((attribute) => attribute.id === advertisement.attribute_id);
			const questionnaire = await getQuestionnairesByAdvertisementID(advertisement.id);
			setAdvertisementData(() => ({
				...advertisement,
				attribute,
				questionnaire: questionnaire.data,
			}));
		} catch (error) {
			setError(error.toString());
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		getNewAdvertisement(user);
	}, [user]);

	return { advertisementData, loading, error, getNewAdvertisement };
}
export default useGenerateAdvertisementData;
