export const dictionary = {
	default: {
		"Answer.placeholder": "Mata in svarsalternativ",
		Right: "Rätt",
		Wrong: "Fel",
		"Question Editor": "Frågeredigerare",
		"Question body": "Huvudtext för frågan",
		Delete: "Ta bort",
		Save: "Spara",
		Add: "Lägg till",
		"Question %1 - %2 alternatives": "Fråga %1 - %2 alternativ",
		"Go back": "Tillbaka",
		Continue: "Fortsätt",
		"Advertisement questions": "Annonsens frågor",
		"Overview.pitch":
			"Med vårt verktyg för att skapa ansökningsformulär kan du enkelt skapa verifieringsfrågor för din annons. Varje sökande tilldelas sedan detta formulär under sin ansökningsprocess.",
		"%1/%2 questions": "%1/%2 frågor",
	},
};

export default function i18n(lang = "default") {
	return dictionary[lang];
}
