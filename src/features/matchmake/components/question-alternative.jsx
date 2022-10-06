function QuestionAlternative({text, type, checked}) {
	return (
		<li className="questions-alternative">
			<label>
				<input type={type} name="answer" defaultChecked={checked}/>
				<span>{text}</span>
			</label>
		</li>
	);
}

export default QuestionAlternative;