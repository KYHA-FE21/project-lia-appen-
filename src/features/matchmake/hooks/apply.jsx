import { useState } from "react";
import patchApplicant from "../../applications/api/patch-applicant";
import postApplicant from "../api/post-applicant";

function useApply() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [applied, setApplied] = useState(false);

	async function apply(advertisementData, user, bool) {
		setLoading(true);
		setError(null);
		try {
			const cooldown = Date.now();
			const body = JSON.stringify({
				advertisement_id: advertisementData.id,
				user_id: user.id,
				accepted: bool === true ? !bool : null,
				cooldown,
			});
			const applicant = advertisementData.applicants.find((applicant) => applicant.user_id === user.id);
			if (applicant) {
				await patchApplicant(applicant.id, body);
			} else {
				await postApplicant(body);
			}
			setApplied(bool);
		} catch (error) {
			setError(error.toString());
			console.error(error);
		} finally {
			setLoading(false);
		}
	}
	return { loading, error, applied, apply };
}

export default useApply;
