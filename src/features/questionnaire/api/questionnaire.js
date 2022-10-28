const API_URL = process.env.REACT_APP_BACKEND_ENDPOINT;
const API_ENDPOINT = "questionnaire";

export const MAX_QUESTIONNAIRES = 5;

/**
 * @param {Response} resp
 * @returns {Promise<{ data: any | null, error?: Error }>}
 */
export async function handleResponse (resp) {
	let res = {
		data: null,
	}

	if (resp.status < 200 || resp.status >= 300) {
		res.data.error = new Error(resp.statusText)
		res.data.error.name = resp.status
		return res
	}

	try {
		res.data = await resp.json();
	} catch (error) {
		res.error = error;
	}

	return res
}

/**
 * @param {string} advertisement_id
 */
export const getQuestionnairesByAdvertisementID = async (advertisement_id) => {
	const resp = await fetch(
		`${API_URL}/${API_ENDPOINT}/?advertisement_id=${encodeURIComponent(
			advertisement_id
		)}`
	);

	return await handleResponse(resp);
};

/**
 * @param {string} id
 */
export const getQuestionnaireByID = async (id) => {
	const resp = await fetch(
		`${API_URL}/${API_ENDPOINT}/${encodeURIComponent(id)}`
	);

	return await handleResponse(resp);
};

export const postQuestionnaire = async (body) => {
	const resp = await fetch(`${API_URL}/${API_ENDPOINT}`, {
		body: body,
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
	});

	return await handleResponse(resp);
};

export const patchQuestionnaireByID = (id, body) => {
	return fetch(`${API_URL}/${API_ENDPOINT}/${encodeURIComponent(id)}`, {
		body: body,
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export const deleteQuestionnaireByID = (id) => {
	return fetch(`${API_URL}/${API_ENDPOINT}/${id}`, {
		method: "DELETE",
	});
};
