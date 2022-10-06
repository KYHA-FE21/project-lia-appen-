import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { XCircle } from "lucide-react";

import "./questions.scss";

import Container from "../components/container";
import QuestionAlternative from "../components/question-alternative";
import Heading from "../components/heading";

function Questions({ data, searchParams, setSearchParams }) {
	const [question, setQuestion] = useState(0);
	useEffect(() => {
		setQuestion(parseInt(searchParams.get("question")) || 0);
		if (question === data?.questions?.length) {
			setSearchParams((prev) => {
				prev.set("action", "verify");
				return prev;
			});
		}
	}, [searchParams, setSearchParams, data, question]);
	return (
		<>
			{!data && <Navigate to="/matchmake" />}
			{data && (
				<Container type="section" id="matchmake-questions">
					<Heading
						props={{
							heading: "Frågor",
							subheading: question + 1 + "/" + data.questions.length,
							icon: (
								<XCircle
									color="white"
									size="30"
									onClick={() => {
										setSearchParams();
									}}
								/>
							),
						}}
					></Heading>

					<hr />
					<Container className="questions-question">
						<Container className="questions-text">
							<h2>{data?.questions[question]?.title}</h2>
							<span>{data?.questions[question]?.body}</span>
						</Container>
						<Container type="ul" className="questions-alternatives">
							<QuestionAlternative type="radio" text="Answer 1" />
							<QuestionAlternative type="radio" text="Answer 2" />
							<QuestionAlternative type="radio" text="Answer 3" />
							<QuestionAlternative type="radio" text="Answer 4" />
						</Container>
					</Container>
					<hr />
					<Container type="nav" className="questions-nav">
						<button
							className="button"
							onClick={() => {
								setSearchParams((prev) => {
									prev.set("question", question <= 0 ? 0 : question - 1);
									return prev;
								});
							}}
						>
							Föregående
						</button>
						<button
							className="button"
							onClick={() => {
								setSearchParams((prev) => {
									prev.set("question", question + 1);
									return prev;
								});
							}}
						>
							Nästa
						</button>
					</Container>
				</Container>
			)}
		</>
	);
}

export default Questions;
