import { useState } from "react";
import postApplicant from "../api/post-applicant";

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
				if (!succeded) {
					const cooldown = Date.now();
					const body = JSON.stringify({
						advertisement_id: advertisement.id,
						user_id: user.id,
						accepted: null,
						cooldown,
					});
					await postApplicant(body);
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
