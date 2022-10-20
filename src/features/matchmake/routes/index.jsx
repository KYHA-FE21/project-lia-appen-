import { useEffect, useState } from "react";
import Container from "../components/container";
import GenerateAdvertisementData from "../components/generate-advertisment-data";
import LoadingCard from "../components/loading-card";

import "./index.scss";
import Information from "./information";
import Questions from "./questions";
import Verify from "./verify";

const Index = () => {
	const [action, setAction] = useState("information");
	const [answers, setAnswers] = useState({});
	const [question, setQuestion] = useState(0);

	const params = new URLSearchParams();
	params.append("profession", "Systemutvecklare");
	const { advertisementData, setAdvertisementData, setGetNew } = GenerateAdvertisementData(params);

	function getNew() {
		setAdvertisementData(null);
		setGetNew(true);
		setQuestion(0);
		setAction("information");
	}

	useEffect(() => {
		//console.log(advertisementData);
	}, [advertisementData]);
	
	return (
		<Container className="p-3">
			{!advertisementData && <LoadingCard />}
			{advertisementData && (
				<>
					{action === "information" && <Information advertisementData={advertisementData} getNew={getNew} setAction={setAction} />}
					{action === "questions" && <Questions questionnaire={advertisementData.questionnaire} setAction={setAction} getNew={getNew} question={question} setQuestion={setQuestion} answers={answers} setAnswers={setAnswers} />}
					{action === "verify" && <Verify questionnaire={advertisementData.questionnaire} setAction={setAction} getNew={getNew} setQuestion={setQuestion} answers={answers} />}
				</>
			)}
		</Container>
	);
};

export default Index;
