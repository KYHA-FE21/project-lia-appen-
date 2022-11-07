import getLink from "../api/get-link";

/**
 * @param {String} id
 */
async function getLinksByUserID(id = "") {
	const searchParams = new URLSearchParams(`id=${id}`);
	for (const item of id) {
		searchParams.append("user_id", item);
	}
	const data = await getLink(searchParams);
	const json = await data.json();
	return json;
}

/**
 * @param {Array} ids
 */
async function getLinksByUserIDs(ids = []) {
	const searchParams = new URLSearchParams();
	for (const id of ids) {
		searchParams.append("user_id", id);
	}
	const data = await getLink(searchParams);
	const json = await data.json();
	return json;
}

export { getLinksByUserID, getLinksByUserIDs };
