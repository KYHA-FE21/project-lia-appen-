import { useEffect, useState } from "react";
import getApplicant from "../api/get-applicant";
import getAdvertisementByID from "../helpers/get-advertisement-by-id";
import getAttributeByID from "../helpers/get-attribute-by-id";

function useApplications(user) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [applications, setApplication] = useState(null);

	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				setError(false);
				const applicants = await (
					await getApplicant([
						["user_id", user.id],
						["accepted", true],
						["accepted", false],
					])
				).json();
				const advertisements = await getAdvertisementByID(Array.from(applicants).map((item) => item.advertisement_id));
				const attributes = await getAttributeByID(Array.from(advertisements).map((item) => item.attribute_id));
				applicants.forEach((applicant, index, array) => {
					const advertisement = advertisements.find((advertisement) => advertisement.id === applicant.advertisement_id);
					const attribute = attributes.find((attribute) => attribute.id === advertisement.attribute_id);
					array[index] = { ...applicant, advertisement: { ...advertisement, attribute } };
				});
				setApplication(applicants);
			} catch (error) {
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		})();
	}, [user]);

	return {
		loading,
		error,
		applications,
	};
}
export default useApplications;
