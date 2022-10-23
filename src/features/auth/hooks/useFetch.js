import React from "react";
import AuthService from "../api/authService";

const useFetch = () => {
	// Data, loading and error states
	const [data, setData] = React.useState(null);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState({ type: "", message: "" });
	const auth = new AuthService();

	const execute = async (url, body, method = "POST", params = "") => {
		setError(null);
		setLoading(true);
		try {
			const serverValidation = await auth.controller(url, body);
			if (serverValidation.error) return setError(serverValidation.error);

			const endpoint = process.env.REACT_APP_BACKEND_ENDPOINT + "/user" + params;

			const response = await fetch(endpoint, {
				method,
				headers: {
					"Content-Type": "application/json",
				},
				body: method !== "GET" ? JSON.stringify(body) : undefined,
			});

			const status = response.status;

			if (!response.headers.get("content-type") && !(status === 200 || status === 201))
				throw new Error("Unknown Error, update page and try again!");

			setData(await response.json());
		} catch (err) {
			setError({ type: "unknown", message: err.message });
		} finally {
			setLoading(false);
		}
	};

	return { data, loading, error, execute };
};

export default useFetch;
