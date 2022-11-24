/**
 * @param {String} id
 * @returns {Promise}
 */
function deleteApplicant(id = "") {
	const API_URL = process.env.REACT_APP_BACKEND_ENDPOINT;
	const API_ENDPOINT = `applicant/${id}`;
	const url = new URL(API_ENDPOINT, API_URL);
	return fetch(url, {
		method: "DELETE",
	});
}

export default deleteApplicant;
