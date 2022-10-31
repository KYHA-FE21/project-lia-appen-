import { useState } from "react";
import postApplicant from "../api/post-applicant";

function useApply() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [applied, setApplied] = useState(false);

	async function apply(advertisementData, user, bool) {
		setLoading(true);
		setError(null);
		setTimeout(async () => {
			try {
				const { advertisement } = advertisementData;
				const cooldown = Intl.DateTimeFormat("sv-SE").format(new Date());
				const body = JSON.stringify({
					advertisement_id: advertisement.id,
					user_id: user.id,
					accepted: bool === true ? !bool : null,
					cooldown,
				});
				await postApplicant(body);
				setApplied(bool);
			} catch (error) {
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}, 1_000);
	}

	return { loading, error, applied, apply };
}

export default useApply;
