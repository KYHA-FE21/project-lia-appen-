import { useEffect, useState } from "react";
import getApplicant from "../api/get-applicant";
import { getAdvertisementByIDs } from "../helpers/get-advertisement-by-id";
import { getAttributeByIDs } from "../helpers/get-attribute-by-id";
import { getUserByIDs } from "../helpers/get-user-by-id";

function useApplications(user) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [applications, setApplication] = useState(null);

	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				setError(false);
				const applicant = await getApplicant([
					["user_id", user.id],
					["accepted", true],
					["accepted", false],
				]);
				const applicants = applicant.json();
				const advertisements = await getAdvertisementByIDs(Array.from(applicants).map((item) => item.advertisement_id));
				const [attributes, users] = await Promise.all([getAttributeByIDs(Array.from(advertisements).map((item) => item.attribute_id)), getUserByIDs(Array.from(advertisements).map((item) => item.user_id))]);
				applicants.forEach((applicant, index, array) => {
					const advertisement = advertisements.find((advertisement) => advertisement.id === applicant.advertisement_id);
					const attribute = attributes.find((attribute) => attribute.id === advertisement.attribute_id);
					const user = users.find((user) => user.id === advertisement.user_id);
					array[index] = { ...applicant, advertisement: { ...advertisement, attribute, user } };
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
