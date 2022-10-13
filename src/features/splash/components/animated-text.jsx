import { useEffect, useState } from "react";

function AnimatedText({ texts = [""] }) {
	const [textIndex, setTextIndexState] = useState(0);
	const [currentText, setCurrentText] = useState("");

	useEffect(() => {
		if (currentText.length >= texts[textIndex].length) {
			const pauseTimer = setTimeout(() => {
				setCurrentText("");
				setTextIndexState(textIndex >= texts.length - 1 ? 0 : textIndex + 1);
			}, 3150);

			return () => clearTimeout(pauseTimer);
		}

		const nextText = texts[textIndex].slice(0, currentText.length + 1);
		const nextCharacter = nextText.split("").pop();

		function animateText() {
			setCurrentText(nextText);
		}

		const animateTextTimer = setTimeout(
			() => animateText(),
			nextCharacter === " " ? 0 : 150
		);

		return () => clearTimeout(animateTextTimer);
	}, [texts, textIndex, currentText]);

	return <span>{currentText}</span>;
}

export default AnimatedText;
