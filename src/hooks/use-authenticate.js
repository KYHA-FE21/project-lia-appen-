export function getStorage(key) {
	const str = window.localStorage.getItem(key);

	let data = {};
	if (str) {
		try {
			data = JSON.parse(str);
		} catch (error) {
			data = null;
		}
	}

	function update(data) {
		window.localStorage.setItem(key, JSON.stringify(data));
	}

	function empty() {
		window.localStorage.removeItem(key);
	}

	return { data, update, empty };
}
