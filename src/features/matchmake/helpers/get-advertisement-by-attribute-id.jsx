import getAdvertisement from "../api/get-advertisement";

/**
 * @param {String} id
 */
async function getAdvertisementByAttributeID(id = "") {
	const searchParams = new URLSearchParams(`attribute_id=${id}`);
	const data = await getAdvertisement(searchParams);
	const json = await data.json();
	return json;
}

/**
 * @param {Array} id
 */
async function getAdvertisementByAttributeIDs(ids = []) {
	const searchParams = new URLSearchParams();
	if (Array.isArray(ids)) {
		ids.forEach((id) => searchParams.append("attribute_id", id));
	}
	const data = await getAdvertisement(searchParams);
	const json = await data.json();
	return json;
}

export { getAdvertisementByAttributeID, getAdvertisementByAttributeIDs };
