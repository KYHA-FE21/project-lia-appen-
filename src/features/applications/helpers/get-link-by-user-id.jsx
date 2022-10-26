import getLink from "../api/get-link";

/**
 * @param {String | Array} id
 */
async function getLinksByUserID(id = "") {
	const searchParams = new URLSearchParams();
	if (Array.isArray(id)) {
		for (const item of id) {
			searchParams.append("user_id", item);
		}
	} else {
		searchParams.set("user_id", id);
	}
	const json = await (await getLink(searchParams)).json();
	return json;
}
export default getLinksByUserID;
