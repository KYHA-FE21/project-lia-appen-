const getQuestionnaire = (searchParams) => {
	const url = new URL("questionnaire?" + searchParams.toString(), "http://localhost:3004/");
	return fetch(url);
};

export default getQuestionnaire;
