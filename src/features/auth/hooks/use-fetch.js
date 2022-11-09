import React from "react";
import AuthService from "../api/auth-service";
import postAttribute from "../api/post-attribute";
import { defaultUser } from "../../profile/hooks/use-user";
import handleResponse from "../../../utils/handle-response";

const useFetch = () => {
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

			const endpoint =
				process.env.REACT_APP_BACKEND_ENDPOINT + "/user" + params;

			const userAttributes = { ...defaultUser.attribute, type: body.type };
			delete userAttributes.id;

			const attributeResponse = await handleResponse(
				await postAttribute(userAttributes)
			);

			// TODO: Handle errors
			const attributeID = attributeResponse.data.id;

			const userBody = {
				...defaultUser,
				attribute_id: attributeID,
				email: body.email,
				password: body.password,
			};
			delete userBody.attribute;

			debugger;

			const response = await fetch(endpoint, {
				method,
				headers: {
					"Content-Type": "application/json",
				},
				body: method !== "GET" ? JSON.stringify(userBody) : undefined,
			});

			const status = response.status;

			if (
				!response.headers.get("content-type") &&
				!(status === 200 || status === 201)
			)
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
