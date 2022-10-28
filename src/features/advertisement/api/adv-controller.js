import React from "react";

const useAdvertisementController = () => {
	const advertisementUrl = process.env.REACT_APP_BACKEND_ENDPOINT + "/advertisement";
	const attributeUrl = process.env.REACT_APP_BACKEND_ENDPOINT + "/attribute";

	const [data, setData] = React.useState([]);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState({ type: "", message: "" });

	const _fetch = async (url, method = "GET", body) => {
		const res = await fetch(url, {
			method,
			headers: {
				"Content-Type": "application/json",
			},
			body: method !== "GET" ? JSON.stringify(body) : undefined,
		});

		const status = res.status;
		if (!res.headers.get("content-type") && !(status === 200 || status === 201))
			throw new Error("Unknown Error, update page and try again!");

		return await res.json();
	};

	const processHandler = async (process) => {
		try {
			setError(null);
			setLoading(true);
			const data = await process();
			setData(data);
			console.log(data);
		} catch (err) {
			setError({ type: "unknown", message: err.message });
		} finally {
			setLoading(false);
		}
	};

	const initAdvertisements = async (user_id) => {
		const url = advertisementUrl + `?user_id=${user_id}`;
		const advertisements = await _fetch(url);

		if (!advertisements.length) return [];

		const promises = advertisements.map(
			({ attribute_id }) =>
				new Promise(async (resolve) => {
					const url = attributeUrl + `?id=${attribute_id}&type=advertisement`;
					const data = await _fetch(url);
					resolve(data[0]);
				})
		);

		const attributes = await Promise.all(promises);
		return advertisements.map((item) => {
			return { ...item, attribute: attributes.filter((attribute) => attribute.id === item.attribute_id)[0] };
		});
	};

	const getAdvertisements = async (user_id) => {
		return await processHandler(async () => initAdvertisements(user_id));
	};

	const postAdvertisement = async (user_id, body) => {
		return await processHandler(async () => {
			const { id } = await _fetch(attributeUrl, "POST", body);
			await _fetch(advertisementUrl, "POST", { user_id, attribute_id: id });
			return await initAdvertisements(user_id);
		});
	};

	const patchAttributes = async (attribute_id, user_id, body) => {
		return await processHandler(async () => {
			const url = attributeUrl + `/${attribute_id}`;
			await _fetch(url, "PATCH", body);
			return await initAdvertisements(user_id);
		});
	};

	return { data, loading, error, getAdvertisements, postAdvertisement, patchAttributes };
};

export default useAdvertisementController;
