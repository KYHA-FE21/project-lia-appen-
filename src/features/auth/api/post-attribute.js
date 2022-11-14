/**
 * @param {any} body
 * @returns {Promise<Response>}
 */

function postAttribute(body) {
	const API_URL = process.env.REACT_APP_BACKEND_ENDPOINT;
	const API_ENDPOINT = "attribute";

	return fetch(`${API_URL}/${API_ENDPOINT}`, {
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
}

export default postAttribute;
