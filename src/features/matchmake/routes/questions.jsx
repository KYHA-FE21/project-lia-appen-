import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Check, X, XCircle } from "lucide-react";

import Container from "../components/container";
import QuestionAlternative from "../components/question-alternative";
import Heading from "../components/heading";
import SecondaryButton from "../../../components/buttons/secondary-button";
import HorizontalRow from "../components/hr";
import Card, { CardButtons } from "../../../components/card";

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
				<Card className="matchmake-cardfix mx-auto max-w-screen-sm matchmake-min-height max-h-max w-full">
					<Heading
						className="text-2xl text-white px-3"
						{...{
							heading: "Frågor",
							icon: (
								<XCircle
									className="cursor-pointer"
									color="white"
									size="30"
									onClick={() => {
										setData(false);
									}}
								/>
							),
						}}
					/>
					<HorizontalRow className="px-3" />
					<Container display="grid" className="gap-3">
						<Container display="flex" className="flex-col gap-3">
							<h2 className="px-3 text-xl text-white">{data?.questions[question]?.title}</h2>
							<Container className="p-3 bg-black text-white text-base">{data?.questions[question]?.body}</Container>
						</Container>
						<Container type="form" display="flex" className="flex-col text-white p-3 gap-3">
							{data?.questions[question]?.answers.map((answer, index) => (
								<QuestionAlternative type="radio" text={answer} name={data?.questions[question]?.id} key={`${data?.questions[question]?.id}${index}`} handleChange={handleChange} value={index + 1} checked={data.answers[question] === (index + 1).toString()} />
							))}
						</Container>
					</Container>
					<HorizontalRow className="px-3" />
					<CardButtons className="px-3 mt-auto">
						<SecondaryButton
							icon={<X color="white" />}
							bgColor="red"
							className="text-white w-full text-sm"
							style={question === 0 ? { color: "darkgrey", backgroundColor: "rgba(0, 0, 0, 0.3)" } : { backgroundColor: "rgba(0, 0, 0, 0.3)" }}
							onClick={() => {
								setSearchParams((prev) => {
									prev.set("question", question <= 0 ? 0 : question - 1);
									return prev;
								});
							}}
						>
							Föregående
						</SecondaryButton>
						<SecondaryButton
							icon={<Check color="white" />}
							bgColor="green"
							className="text-white w-full text-sm"
							onClick={() => {
								setSearchParams((prev) => {
									prev.set("question", question + 1);
									return prev;
								});
							}}
						>
							Nästa
						</SecondaryButton>
					</CardButtons>
				</Card>
			)}
		</>
	);
}

export default Questions;
