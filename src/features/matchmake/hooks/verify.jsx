import { useState } from "react";

function postUserToApplicant(user_id, advertisement_id) {
	const API_URL = process.env.REACT_APP_BACKEND_ENDPOINT;
	const API_ENDPOINT = "applicant";
	const url = new URL(API_ENDPOINT, API_URL);
	const body = JSON.stringify({
		advertisement_id,
		user_id,
	});
	return fetch(url, {
		method: "POST",
		body: body,
		headers: {
			"Content-Type": "application/json",
		},
	});
}

function useVerify() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [verified, setVerified] = useState(null);

	/**
	 * @param {{advertisement:{id:string}, questionnaire:[{correct_alternatives:[]]}} advertisementData
	 * @param {{}} answers
	 * @param {{id:string}} user
	 * @returns {undefined}
	 */
	async function verify(advertisementData, answers, user) {
		setLoading(true);
		setError(null);
		setTimeout(async () => {
			try {
				const { advertisement, questionnaire } = advertisementData;
				const succeded = questionnaire.every((question) => question.correct_alternatives.includes(answers[question.id]));
				setVerified(succeded);
				if (succeded) {
					await postUserToApplicant(user.id, advertisement.id);
				}
			} catch (error) {
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}, 1_000);
	}

	return { loading, error, verified, verify };
}

export default useVerify;
