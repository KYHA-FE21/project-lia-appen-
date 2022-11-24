/**
 * @param {{}} body
 * @returns {Promise}
 */
function postApplicant(body) {
	const API_URL = process.env.REACT_APP_BACKEND_ENDPOINT;
	const API_ENDPOINT = "applicant";
	const url = new URL(API_ENDPOINT, API_URL);
	return fetch(url, {
		method: "POST",
		body,
		headers: {
			"Content-Type": "application/json",
		},
	});
}

export default postApplicant;
