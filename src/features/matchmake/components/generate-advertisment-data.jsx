import { useEffect, useState } from "react";
import getAttributes from "../api/get-attributes";
import getAdvertisement from "../api/get-advertisement";
import getQuestionnaire from "../api/get-questionnaires";

function GenerateAdvertisementData(searchParams) {
	const [advertisementData, setAdvertisementData] = useState(null);
	const [getNew, setGetNew] = useState(false);

	const [attributes, setAttributes] = useState(null);
	const [advertisement, setAdvertisement] = useState(null);
	const [questionnaire, setQuestionnaire] = useState(null);

	//Get all attributes matching user prefs
	useEffect(() => {
		(async () => {
			setGetNew(false);
			const data = await getAttributes(searchParams);
			const json = await data.json();
			setAttributes(json);
		})();
	}, [getNew]);

	//Get the advertisement that matches attribute
	useEffect(() => {
		if (attributes) {
			(async () => {
				const searchParams = new URLSearchParams();
				for (const attribute of attributes) {
					searchParams.append("attibutes_id", attribute.id);
				}
				const data = await getAdvertisement(searchParams);
				const json = await data.json();
				json.sort((a, b) => {
					if (a.id > b.id) {
						return -1;
					}
					if (a.id < b.id) {
						return 1;
					}
					return 0;
				});
				/**
				 * Filter already linked ads and return first
				 */
				const [first] = json;
				setAdvertisement(first);
			})();
		}
	}, [attributes]);

	//Get the questionnaires that matches advertisement
	useEffect(() => {
		if (advertisement) {
			(async () => {
				const searchParams = new URLSearchParams();
				searchParams.set("advertisement_id", advertisement.id);
				const data = await getQuestionnaire(searchParams);
				const json = await data.json();
				setQuestionnaire(json);
			})();
		}
	}, [advertisement]);

	useEffect(() => {
		if (questionnaire) {
			setTimeout(() => {
				setAdvertisementData(() => {
					const found = attributes.find((item) => item.id === advertisement.attibutes_id);
					return {
						...advertisement,
						attributes: found,
						questionnaire,
					};
				});
			}, 1_000);
		}
	}, [questionnaire]);

	/**
	 * Get attributes matching user preferences*
	 * Filter attributes to get best match
	 * HANDLE ERROR IF NO ATTRIBUTES FOUND
	 * get the advertisements matching attribute IDs*
	 * get best match that is_active and not already linked to user
	 * get the questionnaire matching advertisement ID
	 * build object that can be used to render card
	 * ???
	 * profit!
	 * (need to add error handling for when no suitable advertisement is found)
	 */

	return { advertisementData, setAdvertisementData, setGetNew };
}
export default GenerateAdvertisementData;
