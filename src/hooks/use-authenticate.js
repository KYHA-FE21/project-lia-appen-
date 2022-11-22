export function getStorage(key) {
	const str = window.localStorage.getItem(key);

	let storageObj = {};
	if (str) {
		try {
			storageObj = JSON.parse(str);
		} catch (error) {
			storageObj = null;
		}
	}

	function update(data) {
		window.localStorage.setItem(key, JSON.stringify(data));
	}

	function empty() {
		window.localStorage.removeItem(key);
	}

	return { data: storageObj, update, empty };
}
