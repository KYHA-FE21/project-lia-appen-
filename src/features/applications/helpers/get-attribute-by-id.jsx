import getAttribute from "../api/get-attribute";

/**
 * @param {String | Array} id
 */
async function getAttributeByID(id = "") {
	const searchParams = new URLSearchParams();
	if (Array.isArray(id)) {
		for (const item of id) {
			searchParams.append("id", item);
		}
	} else {
		searchParams.set("id", id);
	}
	const json = await (await getAttribute(searchParams)).json();
	return json;
}

export default getAttributeByID;
