import getAdvertisement from "../api/get-advertisement";

/**
 * @param {String | Array} id
 */
async function getAdvertisementByID(id = "") {
	const searchParams = new URLSearchParams();
	if (Array.isArray(id)) {
		for (const item of id) {
			searchParams.append("id", item);
		}
	} else {
		searchParams.set("id", id);
	}
	const json = await (await getAdvertisement(searchParams)).json();
	return json;
}
export default getAdvertisementByID;
