import { useState } from "react";
import Card from "../../../components/card";
import Container from "../components/container";
import useGenerateAdvertisementData from "../hooks/generate-advertisment-data";
import Loading from "../components/loading";

import "./index.scss";
import Information from "./information";
import Questions from "./questions";
import Verification from "./verification";
import NoAdvertisement from "./no-advertisement";
import useApply from "../hooks/apply";
import useUser from "../../profile/hooks/use-user";

const Index = () => {
	const [action, setAction] = useState("information");
	const [answers, setAnswers] = useState({});
	const [question, setQuestion] = useState(0);

	const user = useUser({ id: 1 }).data;

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
			await apply.apply(advertisementData, user, true);
		},
		async deny() {
			await apply.apply(advertisementData, user, false);
			getNew();
		},
	};

	return (
		<Container type="main" display="flex" className="p-3 h-full items-center justify-center">
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
