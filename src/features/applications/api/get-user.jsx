/**
 * @param {URLSearchParams} searchParams
 * @returns {Promise}
 */

function getUser(searchParams = []) {
	const API_URL = process.env.REACT_APP_BACKEND_ENDPOINT;
	const API_ENDPOINT = "user";
	const url = new URL(API_ENDPOINT, API_URL);
	for (const [key, value] of searchParams) {
		url.searchParams.append(key, value);
	}
	return fetch(url);
}

export default getUser;
