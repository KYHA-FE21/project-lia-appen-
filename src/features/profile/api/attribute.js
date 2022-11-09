import handleResponse from "../../../utils/handle-response";

const API_URL = process.env.REACT_APP_BACKEND_ENDPOINT;

const API_ENDPOINT = "attribute";

export const getAttributeByID = async (id) => {
	const resp = await fetch(`${API_URL}/${API_ENDPOINT}/${id}`).catch(console.error);;

	return await handleResponse(resp);
};

export const putAttributesByID = async (id, data) => {
	const resp = await fetch(`${API_URL}/${API_ENDPOINT}/${id}`, {
		method: "PUT",
		headers: {
			"Content-type": "application/json",
		},
		body: data,
	}).catch(console.error);

	return await handleResponse(resp);
};
