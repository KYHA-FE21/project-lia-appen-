import i18n from "../i18n";
import "../styles/components.scss";

const AnswerEditTextArea = ({
	label,
	index,
	id,
	value,
	correct,
	handleTextAreaChange,
	handleRadioChange,
	...restProps
}) => {
	const labelID = `${id}-answer-${index}`;

	return (
		<div className="my-6">
			<label htmlFor={labelID} className="block mb-2">
				{label}
			</label>
			<div className="flex items-stretch shadow blur overflow-hidden quest-rounded-md">
				<div className="blur textareaContainer p-2 flex-1">
					<textarea
						className="w-full"
						id={labelID}
						name={index}
						value={value}
						onChange={handleTextAreaChange}
						{...restProps}
					></textarea>
				</div>
				<label className="bg-white p-4 flex shadow" title={i18n().InputCorrect}>
					<input
						type="radio"
						id={id + "-answer-radio"}
						name={id + "-answer-radio"}
						value={index}
						checked={correct}
						onChange={handleRadioChange}
						className="place-self-center p-4 bg-black"
					/>
				</label>
			</div>
		</div>
	);
};

export default AnswerEditTextArea;
