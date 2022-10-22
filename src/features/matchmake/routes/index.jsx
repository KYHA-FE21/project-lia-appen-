import { useEffect, useState } from "react";
import Card from "../../../components/card";
import Container from "../components/container";
import useGenerateAdvertisementData from "../hooks/generate-advertisment-data";
import Loading from "../components/loading";

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
	const { advertisementData, loading, error, getNewAdvertisement } = useGenerateAdvertisementData(params);

	function getNew() {
		getNewAdvertisement();
		setQuestion(0);
		setAction("information");
	}

	useEffect(() => {
		//console.log(advertisementData);
	}, [advertisementData]);

	return (
		<Container type="main" display="flex" className="gradient-bg p-3 h-full items-center justify-center">
			<Card className="matchmake-cardfix max-w-screen-sm matchmake-min-height h-max w-full">
				{loading && <Loading />}
				{error && <Container className="p-3">{error}</Container>}
				{!loading && !error && advertisementData && (
					<>
						{action === "information" && <Information advertisementData={advertisementData} setAction={setAction} getNew={getNew} />}
						{action === "questions" && <Questions questionnaire={advertisementData.questionnaire} setAction={setAction} question={question} setQuestion={setQuestion} answers={answers} setAnswers={setAnswers} getNew={getNew} />}
						{action === "verify" && <Verify questionnaire={advertisementData.questionnaire} setAction={setAction} setQuestion={setQuestion} answers={answers} getNew={getNew} />}
					</>
				)}
			</Card>
		</Container>
	);
};

export default Index;
