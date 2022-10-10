import Container from "./container";

function QuestionAlternative({ text, type, name, value, checked, handleChange }) {
	return (
		<Container type="label" display="flex" className="gap-2">
			<input type={type} name={name} value={value} checked={checked} onChange={handleChange} />
			<span>{text}</span>
		</Container>
	);
}

export default QuestionAlternative;
