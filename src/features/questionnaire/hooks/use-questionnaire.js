import { useEffect, useState } from "react";
import {
	deleteQuestionnaireByID,
	getQuestionnaireByID,
	patchQuestionnaireByID,
} from "../api/questionnaire";

export default function useQuestionnaire({ id }) {
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
