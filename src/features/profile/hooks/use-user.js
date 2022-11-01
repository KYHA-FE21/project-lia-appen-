import { useState, useEffect } from "react";
import { getAttributeByID, putAttributesByID } from "../api/attribute";
import { getUserByID, putUserByID } from "../api/user";

const defaultUser = {
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

export default function useUser({ id }) {
	const [data, setData] = useState(defaultUser);
	const [lastUpdate, setLastUpdate] = useState(Date.now());

	useEffect(() => {
		let cancelled = false;

		async function getUserAndAttributes() {
			const user = await getUserByID(id);

			if (!user.data) return;

			const attribute = await getAttributeByID(user.data.attribute_id);

			if (!cancelled) {
				setData({ ...user.data, attribute: attribute.data });
			}
		}

		getUserAndAttributes();

		return () => {
			cancelled = true;
		};
	}, [id, lastUpdate]);

	async function update(data) {
		const user = { ...data };
		const attribute = data.attribute;

		delete user.attribute;

		const [userResp, attributeResp] = await Promise.all([
			putUserByID(user.id, JSON.stringify(user)),
			putAttributesByID(attribute.id, JSON.stringify(attribute)),
		]);

		setLastUpdate(Date.now());

		return { ...userResp.data, attribute: attributeResp.data };
	}

	return {
		data,
		update,
	};
}
