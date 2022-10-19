import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Plus, Minus, X, Check } from "lucide-react";

import IconBtn from "../components/icon-btn";
import TextArea from "../components/text-area";
import Button from "../../../components/buttons";
import AnswerEditTextArea from "../components/answer-edit";

import { i18n } from "../i18n";

const MAXQUESTIONS = 4;

const Answer = ({
	index,
	id,
	value,
	correct = false,
	handleTextAreaChange,
	handleRadioChange,
	placeholder = i18n.default["Answer.placeholder"],
}) => {
	const label = (
		<span className="flex items-center text-sm">
			Svarsalternativ #{index + 1} -{" "}
			{correct ? i18n.default.Right : i18n.default.Wrong}{" "}
			<span className="ml-2" style={{ color: correct ? "#32BA78" : "#FD6D6D" }}>
				{correct ? <Check /> : <X />}
			</span>
		</span>
	);

	return (
		<AnswerEditTextArea
			rows="2"
			placeholder={placeholder}
			label={label}
			index={index}
			id={id}
			value={value}
			correct={correct}
			handleTextAreaChange={handleTextAreaChange}
			handleRadioChange={handleRadioChange}
		/>
	);
};

const Editor = () => {
	const { id: advertisement_id } = useParams();

	const [questionBody, setQuestionBody] = useState("");
	const [answers, setAnswers] = useState([""]);
	const [correctAnswerIndex, setCorrectAnswerIndex] = useState([0]);

	function handleQuestionBodyChange(ev) {
		const { value } = ev.target;
		setQuestionBody(value);
	}

	function handleAddNewAnswer() {
		const newData = [...answers, ""];
		setAnswers(newData);
	}

	function handleReduceAnswers() {
		const newData = answers.slice(0, -1);
		setAnswers(newData);
		setCorrectAnswerIndex([0]);
	}

	function handleAnswerChange(ev) {
		const { name, value } = ev.target;
		answers[Number(name)] = value
		setAnswers([...answers])
	}

	function handleCorrectAnswerChange(ev) {
		const { value } = ev.target;
		// Future-proofing for when multiple answers can be correct.
		setCorrectAnswerIndex([Number(value)]);
	}

	function handleQuestionnaireSubmit(ev) {
		ev.preventDefault();

		// Validate data.

		// Containerize data.
		const data = {
			id: window.crypto.randomUUID(), // Does not work in SSR.
			advertisement_id,
			body: questionBody,
			answers,
		};

		console.log("Data", data);

		// Submit data.
	}

	return (
		<div className="flex justify-center h-full">
			<form
				className="questionnaireContent questionnaire-cards-max-width-md flex flex-col justify-between p-12"
				onSubmit={handleQuestionnaireSubmit}
			>
				<div>
					<h1 className="text-2xl mb-3 text-center">
						{i18n.default["Question Editor"]}
					</h1>

					<TextArea
						label={i18n.default["Question body"]}
						rows="12"
						id="questionBody"
						value={questionBody}
						handleChange={handleQuestionBodyChange}
						name="questionBody"
					/>

					{answers.map((value, index) => (
						<Answer
							key={index}
							id={advertisement_id}
							index={index}
							value={value}
							correct={correctAnswerIndex.includes(index)}
							handleTextAreaChange={handleAnswerChange}
							handleRadioChange={handleCorrectAnswerChange}
						/>
					))}

					<div className="flex justify-center items-center mb-10">
						<IconBtn
							icon={<Minus size={20} />}
							onClick={handleReduceAnswers}
							disabled={answers.length === 1}
						/>
						<span>
							{answers.length} / {MAXQUESTIONS}{" "}
						</span>
						<IconBtn
							icon={<Plus size={20} />}
							onClick={handleAddNewAnswer}
							disabled={answers.length === MAXQUESTIONS}
						/>
					</div>
				</div>

				<div>
					<Button className="w-full bg-green mb-8">{i18n.default.Save}</Button>
					<Link to="/questionnaire/overview/*" className="no-underline">
						<Button
							className="w-full bg-primary mb-8"
							type="button"
							disabled={true}
						>
							{i18n.default.Delete}
						</Button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Editor;
