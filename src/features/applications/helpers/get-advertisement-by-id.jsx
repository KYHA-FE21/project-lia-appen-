import getAdvertisement from "../api/get-advertisement";

/**
 * @param {String} id
 */
async function getAdvertisementByID(id = "") {
	const searchParams = new URLSearchParams(`id=${id}`);
	const data = await getAdvertisement(searchParams);
	const json = await data.json();
	return json;
}

/**
 * @param {Array} ids
 */
async function getAdvertisementByIDs(ids = []) {
	const searchParams = new URLSearchParams();
	for (const id of ids) {
		searchParams.append("id", id);
	}
	const data = await getAdvertisement(searchParams);
	const json = await data.json();
	return json;
}
export { getAdvertisementByID, getAdvertisementByIDs };
