import { useState } from "react";
import Card from "../../../components/card";
import Container from "../components/container";
import useGenerateAdvertisementData from "../hooks/generate-advertisment-data";
import Loading from "../components/loading";

import "./index.scss";
import Information from "./information";
import Questions from "./questions";
import Verification from "./verification";

const Index = () => {
	const [action, setAction] = useState("information");
	const [answers, setAnswers] = useState({});
	const [question, setQuestion] = useState(0);
	const [user] = useState({
		id: "1",
		name: "",
		email: "",
		password: "",
		bio: "",
		attribute_id: "",
		attribute: {
			id: "3",
			period: ["123", "456"],
			profession: "Systemutvecklare",
			badges: ["JS", "HTML", "React"],
			location: "Göteborg",
			work_type: "Remote",
			school: "KYH",
			type: "student",
			decline_rate: "",
			response_time: "1",
			openings: "",
			is_active: true,
		},
	});

	const { loading, error, advertisementData, getNewAdvertisement } = useGenerateAdvertisementData(user);

	function getNew() {
		getNewAdvertisement();
		setAnswers({});
		setQuestion(0);
		setAction("information");
	}

	return (
		<Container type="main" display="flex" className="p-3 h-full items-center justify-center">
			<Card className="matchmake-cardfix max-w-screen-sm matchmake-min-height h-max w-full">
				{loading && <Loading />}
				{!loading && error && <Container className="p-3">{error}</Container>}
				{!loading && !error && advertisementData && (
					<>
						{action === "information" && <Information {...{ advertisementData, setAction, getNew, user }} />}
						{action === "questions" && <Questions {...{ advertisementData, setAction, getNew, question, setQuestion, answers, setAnswers }} />}
						{action === "verify" && <Verification {...{ advertisementData, setAction, getNew, setQuestion, answers, user }} />}
					</>
				)}
			</Card>
		</Container>
	);
};

export default Index;
