import { useEffect, useState } from "react";
import getAttribute from "../api/get-attribute";
import getAdvertisement from "../api/get-advertisement";
import getQuestionnaire from "../api/get-questionnaires";

function GenerateAdvertisementData(searchParams) {
	const [advertisementData, setAdvertisementData] = useState(null);
	const [getNew, setGetNew] = useState(false);

	const [attribute, setAttribute] = useState(null);
	const [advertisement, setAdvertisement] = useState(null);
	const [questionnaire, setQuestionnaire] = useState(null);

	// Get attributes that matches prefs (searchParams)
	useEffect(() => {
		(async () => {
			setGetNew(false);
			searchParams.set("type", "advertisement");
			searchParams.set("is_active", true);
			const data = await getAttribute(searchParams);
			const json = await data.json();
			// Sort attributes for best match
			json.sort((a, b) => {
				if (a.id > b.id) {
					return -1;
				}
				if (a.id < b.id) {
					return 1;
				}
				return 0;
			});
			// Filter out tests that are on "cooldown"
			const [first] = json;
			setAttribute(first);
		})();
	}, [getNew]);

	// Get advertisement
	useEffect(() => {
		if (attribute) {
			(async () => {
				const searchParams = new URLSearchParams(`attribute_id=${attribute.id}`);
				const data = await getAdvertisement(searchParams);
				const json = await data.json();
				const [first] = json;
				setAdvertisement(first);
			})();
		}
	}, [attribute]);

	// Get questions
	useEffect(() => {
		if (advertisement) {
			(async () => {
				const searchParams = new URLSearchParams(`advertisement_id=${advertisement.id}`);
				const data = await getQuestionnaire(searchParams);
				const json = await data.json();
				setQuestionnaire(json);
			})();
		}
	}, [advertisement]);

	// Build object to return
	useEffect(() => {
		if (questionnaire) {
			setTimeout(() => {
				setAdvertisementData(() => {
					return {
						advertisement,
						attribute,
						questionnaire,
					};
				});
			}, 1_000);
		}
	}, [questionnaire]);

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

	return { advertisementData, setAdvertisementData, setGetNew };
}
export default GenerateAdvertisementData;
