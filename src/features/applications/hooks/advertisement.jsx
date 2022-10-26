import { useEffect, useState } from "react";
import getAdvertisementByID from "../helpers/get-advertisement-by-id";
import getAttributeByID from "../helpers/get-attribute-by-id";

function useAdvertisement(id) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [advertisement, setAdvertisement] = useState(null);

	useEffect(() => {
		const controller = new AbortController();
		(async () => {
			setLoading(true);
			setError(false);
			setTimeout(async () => {
				try {
					const [ad] = await getAdvertisementByID(id);
					const [attribute] = await getAttributeByID(ad.attribute_id);
					if (controller.signal.aborted) return;
					setAdvertisement({ ...ad, attribute });
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

	return { loading, error, advertisement };
}

export default useAdvertisement;
