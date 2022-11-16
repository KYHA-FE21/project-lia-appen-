const dictionary = {
	default: {
		remote: "distans",
		location: "på plats",
	},
};

/**
 * @param {String} word
 * @param {String} lang
 * @returns {String}
 */

function translate(word, lang) {
	try {
		lang = dictionary[lang] || dictionary["default"];
		const translation = lang[word.toLowerCase()];
		if (translation !== undefined) word = translation;
	} finally {
		return word;
	}
}

export default translate;
