import { useEffect, useState } from "react";
import {
	getQuestionnairesByAdvertisementID,
	MAX_QUESTIONNAIRES,
	postQuestionnaire,
} from "../api/questionnaire";

export default function useQuestionnaires({ advertisement_id }) {
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
			advertisement_id,
			body: "",
			alternatives: [""],
			correct_alternatives: [0],
		};

		return await postQuestionnaire(JSON.stringify(data));
	}

	return { questionnaires, createQuestionnaire };
}
