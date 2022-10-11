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
				<Card className="cardfix mx-auto w-full max-width">
					<Heading
						className="px-3"
						{...{
							heading: "Frågor",
							icon: (
								<XCircle
									color="black"
									size="30"
									style={{ cursor: "pointer" }}
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
							<h2 className="px-3 text-xl">{data?.questions[question]?.title}</h2>
							<Container className="p-3 bg-black text-white text-base">{data?.questions[question]?.body}</Container>
						</Container>
						<Container type="form" display="flex" className="flex-col p-3 gap-3">
							{data?.questions[question]?.answers.map((answer, index) => (
								<QuestionAlternative type="radio" text={answer} name={data?.questions[question]?.id} key={`${data?.questions[question]?.id}${index}`} handleChange={handleChange} value={index + 1} checked={data.answers[question] === (index + 1).toString()} />
							))}
						</Container>
					</Container>
					<HorizontalRow className="px-3" />
					<CardButtons className="px-3 h-10">
						<SecondaryButton
							icon={<X />}
							bgColor="red"
							className="text-white w-full text-base"
							style={question === 0 ? { color: "darkgrey", fontSize: "0.875rem" } : { fontSize: "0.875rem" }}
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
							icon={<Check />}
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
