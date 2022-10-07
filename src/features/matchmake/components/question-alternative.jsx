function QuestionAlternative({ text, type, name, value, checked, handleChange }) {
	return (
		<label className="questions-alternative">
			<input type={type} name={name} value={value} checked={checked} onChange={handleChange} />
			<span>{text}</span>
		</label>
	);
}

export default QuestionAlternative;
