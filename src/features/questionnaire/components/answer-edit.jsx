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
			<label htmlFor={labelID} className="block mb-2">{label}</label>
			<div className="flex gap-4 items-center">
				<div className="textareaContainer shadow p-2 flex-1">
					<textarea
						className="w-full"
						id={labelID}
						name={index}
						value={value}
						onChange={handleTextAreaChange}
						{...restProps}
					></textarea>
				</div>
				<input
					type="radio"
					id={'answer'}
					name={id + "-answer-radio"}
					value={index}
					checked={correct}
					onChange={handleRadioChange}
					className="place-self-center"
				/>
			</div>
		</div>
	);
};

export default AnswerEditTextArea;
