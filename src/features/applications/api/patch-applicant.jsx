function patchApplicant(id = "", body) {
	const API_URL = process.env.REACT_APP_BACKEND_ENDPOINT;
	const API_ENDPOINT = `applicant/${id}`;
	const url = new URL(API_ENDPOINT, API_URL);
	return fetch(url, {
		method: "PATCH",
		body,
		headers: {
			"Content-Type": "application/json",
		},
	});
}

export default patchApplicant;
