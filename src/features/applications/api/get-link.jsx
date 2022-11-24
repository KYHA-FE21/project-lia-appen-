/**
 * @param {URLSearchParams} searchParams
 * @returns {Promise}
 */

function getLink(searchParams = []) {
	const API_URL = process.env.REACT_APP_BACKEND_ENDPOINT;
	const API_ENDPOINT = "link";
	const url = new URL(API_ENDPOINT, API_URL);
	searchParams.forEach((value, key) => {
		url.searchParams.append(key, value);
	});
	return fetch(url);
}

export default getLink;
