import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Plus, Minus, X, Check } from "lucide-react";

import IconBtn from "../components/icon-btn";
import TextArea from "../components/text-area";
import Button from "../../../components/buttons";
import AnswerEditTextArea from "../components/answer-edit";

import i18n from "../i18n";
import useQuestionnaire from "../hooks/use-questionnaire";

const MAX_QUESTIONS = 4;

const Answer = ({
	index,
	id,
	value,
	correct = false,
	handleTextAreaChange,
	handleRadioChange,
	placeholder = i18n()["Answer.placeholder"],
	...restProps
}) => {
	const label = (
		<span className="flex gap-2 items-center text-sm">
			Svarsalternativ #{index + 1} - {correct ? i18n().Right : i18n().Wrong}{" "}
			{correct ? <Check className="text-green" /> : <X className="text-red" />}
		</span>
	);

	return (
		<AnswerEditTextArea
			{...restProps}
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
	const navigate = useNavigate();
	const { id: questionnaire_id } = useParams();

	const { questionnaire, update, remove } = useQuestionnaire({
		id: questionnaire_id,
	});

	const [questionBody, setQuestionBody] = useState("");
	const [alternatives, setAlternatives] = useState([""]);
	const [correctAlternatives, setCorrectAlternatives] = useState([0]);

	useEffect(() => {
		if (questionnaire.id) {
			setQuestionBody(questionnaire.body);
			setAlternatives(questionnaire.alternatives);
			setCorrectAlternatives(questionnaire.correct_alternatives);
		}
	}, [questionnaire]);

	function handleQuestionBodyChange(ev) {
		const { value } = ev.target;
		setQuestionBody(value);
	}

	function handleAddNewAnswer() {
		const newData = [...alternatives, ""];
		setAlternatives(newData);
	}

	function handleReduceAnswers() {
		const newData = alternatives.slice(0, -1);
		setAlternatives(newData);
		setCorrectAlternatives([0]);
	}

	function handleAnswerChange(ev) {
		const { name, value } = ev.target;
		// TODO: I don't like this, can we improve this?
		alternatives[Number(name)] = value;
		setAlternatives([...alternatives]);
	}

	function handleCorrectAnswerChange(ev) {
		const { value } = ev.target;
		// Future-proofing for when multiple answers can be correct.
		setCorrectAlternatives([Number(value)]);
	}

	function handleQuestionnaireSubmit(ev) {
		ev.preventDefault();

		// Validate data.
		// TODO: Create validation.

		// Containerize data.
		const data = {
			...questionnaire,
			body: questionBody,
			alternatives,
			correct_alternatives: correctAlternatives,
		};

		// Submit data.
		update(data);
	}

	async function handleQuestionnaireDelete(ev) {
		ev.preventDefault();

		await remove(questionnaire.id);

		navigate(`/questionnaire/overview/${questionnaire.advertisement_id}`);
	}

	return (
		<div className="flex justify-center h-full">
			<form
				className="questionnaireContent questionnaire-cards-max-width-md flex flex-col justify-between p-12"
				onSubmit={handleQuestionnaireSubmit}
			>
				<div>
					<h1 className="text-2xl mb-3 text-center">
						{i18n()["Question Editor"]}
					</h1>
					<span className="text-sm my-3 block">ID: {questionnaire.id}</span>

					<TextArea
						label={i18n()["Question body"]}
						rows="12"
						id="questionBody"
						value={questionBody}
						handleChange={handleQuestionBodyChange}
						name="questionBody"
						disabled={!questionnaire.id}
					/>

					{alternatives.map((value, index) => (
						<Answer
							key={index}
							id={questionnaire.id}
							index={index}
							value={value}
							correct={correctAlternatives.includes(index)}
							handleTextAreaChange={handleAnswerChange}
							handleRadioChange={handleCorrectAnswerChange}
							disabled={!questionnaire.id}
						/>
					))}

					<div className="flex justify-center items-center mb-10">
						<IconBtn
							icon={<Minus size={20} />}
							onClick={handleReduceAnswers}
							disabled={alternatives.length === 1}
						/>
						<span>
							{alternatives.length} / {MAX_QUESTIONS}
						</span>
						<IconBtn
							icon={<Plus size={20} />}
							onClick={handleAddNewAnswer}
							disabled={alternatives.length === MAX_QUESTIONS}
						/>
					</div>
				</div>

				<div>
					<Button className="w-full bg-green mb-8" disabled={!questionnaire.id}>
						{i18n().Save}
					</Button>
					<Link to="/questionnaire/overview/*" className="no-underline">
						<Button
							className="w-full bg-primary mb-8"
							type="button"
							onClick={handleQuestionnaireDelete}
						>
							{i18n().Delete}
						</Button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Editor;
