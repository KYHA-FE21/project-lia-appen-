import { useEffect, useState } from "react";
import getApplicantByAdvertisementID from "../helpers/get-applicant-by-advertisement-id";
import getAttributeByID from "../helpers/get-attribute-by-id";
import getLinkByUserID from "../helpers/get-link-by-user-id";
import getUserByID from "../helpers/get-user-by-id";

function useApplicants(id) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [applicants, setApplicants] = useState([]);

	useEffect(() => {
		const controller = new AbortController();
		(async () => {
			setLoading(true);
			setError(false);
			setTimeout(async () => {
				try {
					const applicant = await getApplicantByAdvertisementID(id);
					if (!applicant.length) return;
					const user = await getUserByID(Array.from(applicant).map((item) => item.user_id));
					const link = await getLinkByUserID(Array.from(user).map((item) => item.id));
					const attribute = await getAttributeByID(Array.from(user).map((item) => item.attribute_id));
					if (controller.signal.aborted) return;
					setApplicants(() => {
						return Array.from(user).map((user, index) => ({ ...user, applicant: applicant[index], attribute: attribute[index], link: link.filter((item) => item.user_id === user.id) }));
					});
				} catch (error) {
					setError(error.toString());
				} finally {
					setLoading(false);
				}
			}, 1_000);
		})();
		return () => {
			controller.abort();
		};
	}, []);

	return { loading, error, applicants };
}

export default useApplicants;
