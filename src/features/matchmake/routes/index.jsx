import { useContext, useState } from "react";

import "../style/index.scss";

import Card from "../../../components/card";
import Container from "../components/container";
import Loading from "../components/loading";

import useGenerateAdvertisementData from "../hooks/generate-advertisment-data";
import useApply from "../hooks/apply";

import Information from "../components/sections/information";
import NoAdvertisement from "../components/sections/no-advertisement";
import Questions from "../components/sections/questions";
import Verification from "../components/sections/verification";
import AuthContext from "../../../context";

const Index = () => {
	const [action, setAction] = useState("information");
	const [answers, setAnswers] = useState({});
	const [question, setQuestion] = useState(0);

	const user = useContext(AuthContext).user.data;

	const { loading, error, advertisementData, getNewAdvertisement } = useGenerateAdvertisementData(user);

	function getNew() {
		getNewAdvertisement(user);
		setAnswers({});
		setQuestion(0);
		setAction("information");
	}

	const apply = {
		...useApply(),
		async accept() {
			await this.apply(advertisementData, user, true);
		},
		async deny() {
			await this.apply(advertisementData, user, false);
			getNew();
		},
	};

	return (
		<Container type="main" className="flex p-3 h-full items-center justify-center matchmake-bg">
			<Card className="matchmake-cardfix max-w-screen-sm matchmake-min-height h-max w-full">
				{loading && <Loading />}
				{!loading && error && <Container className="p-3">{error}</Container>}
				{!loading && !error && !advertisementData && <NoAdvertisement getNew={getNew} />}
				{!loading && !error && advertisementData && advertisementData.attribute && (
					<>
						{action === "information" && <Information {...{ advertisementData, setAction, getNew, user, apply }} />}
						{action === "questions" && <Questions {...{ advertisementData, setAction, question, setQuestion, answers, setAnswers, user, apply }} />}
						{action === "verify" && <Verification {...{ advertisementData, setAction, getNew, setQuestion, answers, user, apply }} />}
					</>
				)}
			</Card>
		</Container>
	);
};

export default Index;
