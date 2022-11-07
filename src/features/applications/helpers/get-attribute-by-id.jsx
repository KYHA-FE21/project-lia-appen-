import getAttribute from "../api/get-attribute";

/**
 * @param {String} id
 */
async function getAttributeByID(id = "") {
	const searchParams = new URLSearchParams(`id=${id}`);
	const data = await getAttribute(searchParams);
	const json = await data.json();
	return json;
}

/**
 * @param {Array} ids
 */
async function getAttributeByIDs(ids = []) {
	const searchParams = new URLSearchParams();
	for (const id of ids) {
		searchParams.append("id", id);
	}
	const data = await getAttribute(searchParams);
	const json = await data.json();
	return json;
}

export { getAttributeByID, getAttributeByIDs };
