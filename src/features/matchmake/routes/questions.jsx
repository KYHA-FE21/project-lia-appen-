import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Check, X, XCircle } from "lucide-react";

import "./questions.scss";

import Container from "../components/container";
import QuestionAlternative from "../components/question-alternative";
import Heading from "../components/heading";
import SecondaryButton from "../../../components/buttons/secondary-button";

function Questions({ data, setData, searchParams, setSearchParams }) {
	const [question, setQuestion] = useState(0);
	function handleChange(event) {
		setData((prev) => {
			prev.answers[question] = event.target.value;
			return { ...prev };
		});
	}
	useEffect(() => {
		setQuestion(parseInt(searchParams.get("question")) || 0);
		if (question === data?.questions?.length) {
			setSearchParams((prev) => {
				prev.set("action", "verify");
				return prev;
			});
		}
	}, [data, searchParams, setSearchParams, question]);
	return (
		<>
			{!data && <Navigate to="/matchmake" />}
			{data && (
				<Container type="section" id="matchmake-questions" className={"card gradient shadow"}>
					<Heading
						props={{
							heading: "Frågor",
							subheading: question + 1 + "/" + data.questions.length,
							icon: (
								<XCircle
									color="black"
									size="30"
									onClick={() => {
										setData(false);
									}}
								/>
							),
						}}
					/>
					<hr />
					<Container className="questions-question">
						<Container className="questions-text gradient shadow">
							<h2>{data?.questions[question]?.title}</h2>
							<span>{data?.questions[question]?.body}</span>
						</Container>
						<Container type="form" className="questions-alternatives">
							{data?.questions[question]?.answers.map((answer, index) => (
								<QuestionAlternative type="radio" text={answer} name={data?.questions[question]?.id} key={`${data?.questions[question]?.id}${index}`} handleChange={handleChange} value={index + 1} checked={data.answers[question] === (index + 1).toString()} />
							))}
						</Container>
					</Container>
					<hr />
					<Container type="nav" className="nav">
						<span
							style={{ width: "100%" }}
							onClick={() => {
								setSearchParams((prev) => {
									prev.set("question", question <= 0 ? 0 : question - 1);
									return prev;
								});
							}}
						>
							<SecondaryButton width="100%" logo={<X />} bg="#fd6d6d">
								Föregående
							</SecondaryButton>
						</span>
						<span
							style={{ width: "100%" }}
							onClick={() => {
								setSearchParams((prev) => {
									prev.set("question", question + 1);
									return prev;
								});
							}}
						>
							<SecondaryButton width="100%" logo={<Check />} bg="#32ba78">
								Nästa
							</SecondaryButton>
						</span>
					</Container>
				</Container>
			)}
		</>
	);
}

export default Questions;
