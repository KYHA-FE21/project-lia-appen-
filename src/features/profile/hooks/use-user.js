import { useState, useEffect } from "react";
import { getAttributeByID, putAttributesByID } from "../api/attribute";
import { getUserByID, putUserByID } from "../api/user";

export const defaultUser = {
	id: "",
	name: "",
	email: "",
	password: "",
	bio: "",
	attribute_id: "",
	attribute: {
		id: "",
		school: "",
		email: "",
		bio: "",
		badges: [],
		period: ["", ""],
		profession: "",
		location: "",
		work_type: "",
	},
};

export default function useUser(id) {
	const [state, setState] = useState({
		loading: true,
	});

	const [lastUpdate, setLastUpdate] = useState(Date.now());
	const [userID, setUserID] = useState(id);

	useEffect(() => {
		setState((state) => ({ ...state, loading: true }));

		let cancelled = false;

		if (!userID) return;

		async function getUserAndAttributes() {
			const user = await getUserByID(userID);

			if (user.error) {
				setState({ error: user.error, data: null, loading: false });
				return;
			}

			const attribute = await getAttributeByID(user.data.attribute_id);

			if (attribute.error) {
				setState({ error: attribute.error, data: null, loading: false });
				return;
			}

			if (!cancelled) {
				const data = { ...user.data, attribute: attribute.data };
				setState({ data, loading: false });
			}
		}

		getUserAndAttributes();

		return () => {
			cancelled = true;
		};
	}, [userID, lastUpdate]);

	async function update(data) {
		const user = { ...data };
		const attribute = data.attribute;

		delete user.attribute;

		// TODO: Handle errors from these two requests.
		const [userResp, attributeResp] = await Promise.all([
			putUserByID(user.id, JSON.stringify(user)),
			putAttributesByID(attribute.id, JSON.stringify(attribute)),
		]);

		setLastUpdate(Date.now());

		return { ...userResp.data, attribute: attributeResp.data };
	}

	return {
		state,
		update,
		loadByID: setUserID,
	};
}
