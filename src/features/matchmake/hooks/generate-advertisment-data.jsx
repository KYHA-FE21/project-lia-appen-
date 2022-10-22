import { useEffect, useState } from "react";
import getAttribute from "../api/get-attribute";
import getAdvertisement from "../api/get-advertisement";
import getQuestionnaire from "../api/get-questionnaires";

async function getAdvertisementByAttributeID(id) {
	const searchParams = new URLSearchParams(`attribute_id=${id}`);
	const data = await getAdvertisement(searchParams);
	const json = await data.json();
	const [first] = json;
	return first;
}

async function getQuestionnaireByAdvertisementID(id) {
	const searchParams = new URLSearchParams(`advertisement_id=${id}`);
	const data = await getQuestionnaire(searchParams);
	const json = await data.json();
	return json;
}

function useGenerateAdvertisementData(searchParams) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [advertisementData, setAdvertisementData] = useState(null);
	const [getNew, setGetNew] = useState(false);

	function getNewAdvertisement() {
		setGetNew((prev) => !prev);
	}

	useEffect(() => {
		(async () => {
			setLoading(true);
			setTimeout(async () => {
				try {
					searchParams.set("type", "advertisement");
					searchParams.set("is_active", true);
					const attributes = await (await getAttribute(searchParams)).json();
					attributes.sort((a, b) => {
						if (a.id > b.id) {
							return -1;
						}
						if (a.id < b.id) {
							return 1;
						}
						return 0;
					});
					// Filter out tests that are on "cooldown"
					const [attribute] = attributes;
					const advertisement = await getAdvertisementByAttributeID(attribute.id);
					const questionnaire = await getQuestionnaireByAdvertisementID(advertisement.id);
					setAdvertisementData(() => {
						return {
							advertisement,
							attribute,
							questionnaire,
						};
					});
				} catch (error) {
					setError(error.toString());
				} finally {
					setLoading(false);
				}
			}, 1_000);
		})();
	}, [getNew]);

	/**
	 * Get attribute matching user preferences *
	 * Sort for best match according to prefs
	 * get the advertisements matching attribute IDs *
	 * HANDLE ERROR IF NO ATTRIBUTES FOUND
	 * get the questionnaire matching advertisement ID *
	 * build object that can be used to render card *
	 * ???
	 * profit!
	 */

	return { advertisementData, loading, error, getNewAdvertisement };
}
export default useGenerateAdvertisementData;
