export const dictionary = {
	default: {
		"Answer.placeholder": "Mata in svarsalternativ",
		"Right": "Rätt",
		"Wrong": "Fel",
		"Question Editor": "Frågeredigerare",
		"Question body": "Huvudtext för frågan",
		"Delete": "Ta bort",
		"Save": "Spara"
	}
}

export default function i18n (lang = "default") {
	return dictionary[lang]
}
