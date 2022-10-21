import { useEffect, useState } from "react";

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

	if (resp.status !== 200) {
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
	let resp = await fetch(
		`${API_URL}/${API_ENDPOINT}/${encodeURIComponent(id)}`
	);

	return await handleResponse(resp);
};

export const postQuestionnaire = (body) => {
	return fetch(`${API_URL}/${API_ENDPOINT}`, {
		body: body,
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
	});
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

export function useQuestionnaires({ advertisement_id }) {
	const [questionnaires, setQuestionnaires] = useState([]);

	useEffect(() => {
		let cancelled = false;

		getQuestionnairesByAdvertisementID(advertisement_id).then(
			(questionnaires) => {
				if (cancelled) return;

				if (questionnaires && questionnaires.data)
					setQuestionnaires(questionnaires.data);
			}
		);

		return () => {
			cancelled = true;
		};
	}, [advertisement_id]);

	async function createQuestionnaire({ advertisement_id }, body) {
		if (questionnaires.length === MAX_QUESTIONNAIRES)
			return { error: "Reached max questionnaires." };

		const data = body || {
			id: window.crypto.randomUUID(), // Does not work in SSR.
			advertisement_id,
			body: "",
			alternatives: [""],
			correct_alternatives: [0],
		};

		await postQuestionnaire(JSON.stringify(data));

		return data.id;
	}

	return { questionnaires, createQuestionnaire };
}

export function useQuestionnaire({ id }) {
	const [questionnaire, setQuestionnaire] = useState({});
	const [lastUpdate, setLastUpdate] = useState(Date.now());

	useEffect(() => {
		let cancelled = false;

		getQuestionnaireByID(id).then((questionnaire) => {
			if (cancelled) return;

			if (questionnaire && questionnaire.data)
				setQuestionnaire(questionnaire.data);
		});

		return () => {
			cancelled = true;
		};
	}, [id, lastUpdate]);

	async function update(data) {
		const resp = await patchQuestionnaireByID(data.id, JSON.stringify(data));
		setLastUpdate(Date.now());
		return resp;
	}

	const remove = deleteQuestionnaireByID;

	return { questionnaire, update, remove };
}
