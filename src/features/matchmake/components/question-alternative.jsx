function QuestionAlternative({ text, type, checked, name }) {
	return (
		<label className="questions-alternative">
			<input type={type} defaultChecked={checked} name={name} />
			<span>{text}</span>
		</label>
	);
}

export default QuestionAlternative;
