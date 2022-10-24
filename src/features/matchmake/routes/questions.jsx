import { useEffect } from "react";
import { Check, X, XCircle } from "lucide-react";

import Container from "../components/container";
import QuestionAlternative from "../components/question-alternative";
import Heading from "../components/heading";
import SecondaryButton from "../../../components/buttons/secondary-button";
import HorizontalRow from "../components/hr";
import { CardButtons } from "../../../components/card";

function Questions({ advertisementData, answers, setAnswers, setAction, getNew, question, setQuestion }) {
	const { questionnaire } = advertisementData;

	function handleChange(event) {
		const { name, value } = event.target;
		setAnswers((prev) => ({ ...prev, [name]: parseInt(value) }));
	}

	useEffect(() => {
		if (question === questionnaire.length) {
			setAction("verify");
		}
	}, [question]);

	return (
		<>
			{questionnaire[question] && (
				<>
					<Heading
						className="text-2xl text-white px-3"
						{...{
							heading: "Frågor",
							icon: <XCircle className="cursor-pointer" color="white" size="30" onClick={getNew} />,
						}}
					/>
					<HorizontalRow className="px-3 opacity-3" />
					<Container display="grid" className="gap-3">
						<Container display="flex" className="flex-col gap-3">
							<h2 className="px-3 text-xl text-white">{`${question + 1}/${questionnaire.length}`}</h2>
							<Container className="p-3 bg-black text-white text-base">{questionnaire[question].body}</Container>
						</Container>
						<Container type="form" display="flex" className="flex-col text-white p-3 gap-3">
							{questionnaire[question].alternatives.map((alternative, index) => (
								<QuestionAlternative key={`${questionnaire.id}${index}`} type="radio" text={alternative} name={questionnaire[question].id} handleChange={handleChange} value={index} checked={String(answers[questionnaire[question].id]) === String(index)} />
							))}
						</Container>
					</Container>
					<HorizontalRow className="px-3 opacity-3" />
					<CardButtons className="px-3 h-10 mt-auto">
						<SecondaryButton
							icon={<X color="white" />}
							bgColor="red"
							className="text-white w-full text-sm"
							style={question === 0 ? { color: "darkgrey", backgroundColor: "rgba(0, 0, 0, 0.3)" } : { backgroundColor: "rgba(0, 0, 0, 0.3)" }}
							onClick={() => {
								setQuestion((prev) => (prev <= 0 ? 0 : prev - 1));
							}}
						>
							Föregående
						</SecondaryButton>
						<SecondaryButton
							icon={<Check color="white" />}
							bgColor="green"
							className="text-white w-full text-sm"
							onClick={() => {
								setQuestion((prev) => prev + 1);
							}}
						>
							Nästa
						</SecondaryButton>
					</CardButtons>
				</>
			)}
		</>
	);
}

export default Questions;
