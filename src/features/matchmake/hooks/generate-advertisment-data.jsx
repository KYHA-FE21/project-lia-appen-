import { useEffect, useState } from "react";
import getAttribute from "../api/get-attribute";
import getAdvertisement from "../api/get-advertisement";
import getQuestionnaire from "../api/get-questionnaires";
import getApplicant from "../api/get-applicant";
import deleteApplicant from "../api/delete-applicant";

async function getAdvertisementByAttributeID(id = []) {
	const searchParams = new URLSearchParams();
	if (Array.isArray(id)) {
		id.forEach((item) => searchParams.append("attribute_id", item));
	} else {
		searchParams.set("attribute_id", id);
	}
	const json = await (await getAdvertisement(searchParams)).json();
	return json;
}

async function getApplicantByAdvertisementID(id = []) {
	const searchParams = new URLSearchParams();
	if (Array.isArray(id)) {
		id.forEach((item) => searchParams.append("advertisement_id", item));
	} else {
		searchParams.set("advertisement_id", id);
	}
	const json = await (await getApplicant(searchParams)).json();
	return json;
}

async function getQuestionnaireByAdvertisementID(id) {
	const searchParams = new URLSearchParams(`advertisement_id=${id}`);
	const json = await (await getQuestionnaire(searchParams)).json();
	return json;
}

/**
 * @param {{id:string, attribute:{profession:string}}} user
 * @returns {{}}
 */
function useGenerateAdvertisementData(user) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [advertisementData, setAdvertisementData] = useState(null);

	async function getNewAdvertisement() {
		setLoading(true);
		setError(null);
		return setTimeout(async () => {
			/**
			 * Get attribute matching user preferences *
			 * filter out test that are on cooldown
			 * HANDLE ERROR IF NO ATTRIBUTES FOUND
			 * Sort for best match according to prefs
			 * get the advertisements matching attribute IDs *
			 * get the questionnaire matching advertisement ID *
			 * build object that can be used to render card *
			 * ???
			 * profit!
			 */
			try {
				const searchParams = new URLSearchParams();
				searchParams.set("profession", user.attribute.profession);
				searchParams.set("type", "advertisement");
				searchParams.set("is_active", true);
				const attributes = await (await getAttribute(searchParams)).json();

				const advertisements = await getAdvertisementByAttributeID(Array.from(attributes).map((attribute) => attribute.id));
				const applicants = await getApplicantByAdvertisementID(Array.from(advertisements).map((advertisement) => advertisement.id));
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
				filteredAdvertisements.sort((a, b) => {
					if (a.id > b.id) {
						return -1;
					}
					if (a.id < b.id) {
						return 1;
					}
					return 0;
				});
				const [advertisement] = filteredAdvertisements;
				const attribute = attributes.find((attribute) => attribute.id === advertisement.attribute_id);
				const questionnaire = await getQuestionnaireByAdvertisementID(advertisement.id);
				setAdvertisementData(() => ({
					advertisement,
					attribute,
					questionnaire,
				}));
			} catch (error) {
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}, 1_000);
	}

	useEffect(() => {
		const timer = getNewAdvertisement();
		return () => {
			clearTimeout(timer);
		};
	}, []);

	return { advertisementData, loading, error, getNewAdvertisement };
}
export default useGenerateAdvertisementData;