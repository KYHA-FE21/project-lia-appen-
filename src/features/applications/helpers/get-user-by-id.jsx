import getUser from "../api/get-user";

/**
 * @param {String} id
 */
async function getUserByID(id = "") {
	const searchParams = new URLSearchParams(`id=${id}`);
	const data = await getUser(searchParams);
	const json = await data.json();
	return json;
}

/**
 * @param {Array} ids
 */
async function getUserByIDs(ids = "") {
	const searchParams = new URLSearchParams();
	for (const id of ids) {
		searchParams.append("id", id);
	}
	const data = await getUser(searchParams);
	const json = await data.json();
	return json;
}

export { getUserByID, getUserByIDs };
