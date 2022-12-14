import { useEffect, useState } from "react";
import { getAdvertisementByID } from "../helpers/get-advertisement-by-id";
import getApplicantByAdvertisementID from "../helpers/get-applicant-by-advertisement-id";
import { getAttributeByID } from "../helpers/get-attribute-by-id";

function useAdvertisement(id) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [advertisement, setAdvertisement] = useState(null);

	useEffect(() => {
		const controller = new AbortController();
		(async () => {
			setLoading(true);
			setError(false);
			try {
				const [ad] = await getAdvertisementByID(id);
				if (!ad) throw new Error("404 (Sidan kunde ej hittas)");
				const [attribute] = await getAttributeByID(ad.attribute_id);
				const applicants = await getApplicantByAdvertisementID(id);
				if (controller.signal.aborted) return;
				setAdvertisement({ ...ad, attribute, applicants });
			} catch (error) {
				setError(error.toString());
			} finally {
				if (controller.signal.aborted) return;
				setLoading(false);
			}
		})();
		return () => {
			controller.abort();
		};
	}, []);

	return { loading, error, advertisement };
}

export default useAdvertisement;
