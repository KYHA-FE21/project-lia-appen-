const dictionary = {
	default: {
		remote: "distans",
		location: "på plats",
	},
};

/**
 * @param {String} word
 * @param {Boolean} capitalize
 * @param {String} lang
 * @returns {String}
 */
function translate(word, capitalize, lang) {
	try {
		lang = dictionary[lang] || dictionary["default"];
		const translation = lang[word.toLowerCase()];
		if (translation !== undefined) word = translation;
		if (capitalize === true) {
			word = word[0].toUpperCase() + word.slice(1);
		}
	} finally {
		return word;
	}
}

export default translate;
