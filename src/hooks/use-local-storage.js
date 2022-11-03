import { useState, useEffect } from "react";

const useLocalStorage = (key) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		try {
			const item = window.localStorage.getItem(key);
			setData(item ? JSON.parse(item) : {});
		} catch (err) {
			console.error(err);
		}
	}, [key]);

	const update = (value) => {
		try {
			setData(value);
			window.localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.error(error);
		}
	};

	const empty = () => {
		try {
			window.localStorage.removeItem(key);
		} catch (error) {
			console.error(error);
		}
	};

	return { data, update, empty };
};

export default useLocalStorage;
