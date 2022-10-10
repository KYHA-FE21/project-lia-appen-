import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Check, X, XCircle } from "lucide-react";

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
				<Container type="section" display="flex" className={"flex-col gap-4 p-3 rounded-md blur m-auto overflow-hidden gradient shadow max-width"}>
					<Heading
						{...{
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
					<Container display="grid" className="questions-question gap-4">
						<Container display="grid" className="questions-text gap-3 p-4 rounded-md gradient shadow">
							<h2>{data?.questions[question]?.title}</h2>
							<span>{data?.questions[question]?.body}</span>
						</Container>
						<Container type="form" display="grid" className="gap-2">
							{data?.questions[question]?.answers.map((answer, index) => (
								<QuestionAlternative type="radio" text={answer} name={data?.questions[question]?.id} key={`${data?.questions[question]?.id}${index}`} handleChange={handleChange} value={index + 1} checked={data.answers[question] === (index + 1).toString()} />
							))}
						</Container>
					</Container>
					<hr />
					<Container type="nav" display="flex" className="gap-3 justify-evenly w-full h-10">
						<SecondaryButton
							width="100%"
							icon={<X />}
							bgColor="red"
							className="text-white w-full"
							fontSize={"0.75rem"}
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
							width="100%"
							icon={<Check />}
							bgColor="green"
							className="text-white w-full"
							fontSize={"0.75rem"}
							onClick={() => {
								setSearchParams((prev) => {
									prev.set("question", question + 1);
									return prev;
								});
							}}
						>
							Nästa
						</SecondaryButton>
					</Container>
				</Container>
			)}
		</>
	);
}

export default Questions;
