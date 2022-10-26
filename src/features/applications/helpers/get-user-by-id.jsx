import getUser from "../api/get-user";

/**
 * @param {String | Array} id
 */
async function getUserByID(id = "") {
	const searchParams = new URLSearchParams();
	if (Array.isArray(id)) {
		for (const item of id) {
			searchParams.append("id", item);
		}
	} else {
		searchParams.set("id", id);
	}
	const json = await (await getUser(searchParams)).json();
	return json;
}

export default getUserByID;
