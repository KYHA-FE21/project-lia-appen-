import handleResponse from "../../../utils/handle-response";

const API_URL = process.env.REACT_APP_BACKEND_ENDPOINT;
const API_ENDPOINT = "questionnaire";

export const MAX_QUESTIONNAIRES = 5;

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
