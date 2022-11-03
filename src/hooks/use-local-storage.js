import { useState, useEffect } from "react";

const useLocalStorage = (key) => {
	const [store, setStore] = useState({});

	useEffect(() => {
		try {
			const item = window.localStorage.getItem(key);
			setStore(item ? JSON.parse(item) : {});
		} catch (err) {
			console.error(err);
		}
	}, [key]);

	const update = (value) => {
		try {
			setStore(value);
			window.localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.error(error);
		}
	};

	const empty = (key) => {
		try {
			window.localStorage.removeItem(key);
		} catch (error) {
			console.error(error);
		}
	};

	return { store, update, empty };
};

export default useLocalStorage;
