function patchApplicant(uri = "", data = {}) {
	const API_URL = process.env.REACT_APP_BACKEND_ENDPOINT;
	const API_ENDPOINT = "applicant" + (uri ? "/" + uri : "");
	const url = new URL(API_ENDPOINT, API_URL);
	return fetch(url, {
		method: "PATCH",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	});
}

export default patchApplicant;
