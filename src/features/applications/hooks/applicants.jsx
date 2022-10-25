import { useEffect, useState } from "react";
import getApplicant from "../api/get-applicant";
import getAttribute from "../api/get-attribute";
import getUser from "../api/get-user";

async function getApplicantByAdvertisementID(id = "") {
	const searchParams = new URLSearchParams();
	searchParams.set("advertisement_id", id);
	searchParams.append("accepted", true);
	searchParams.append("accepted", false);
	const json = await (await getApplicant(searchParams)).json();
	return json;
}

/**
 * @param {String | Array} id
 */
async function getUsersByID(id = "") {
	const searchParams = new URLSearchParams();
	if (Array.isArray(id)) {
		for (const item of id) {
			searchParams.append("id", item);
		}
	} else {
		searchParams.set("id", id);
	}
	const json = await (await getUser(searchParams)).json();
	return json;
}

/**
 * @param {String | Array} id
 */
async function getAttributeByID(id = "") {
	const searchParams = new URLSearchParams();
	if (Array.isArray(id)) {
		for (const item of id) {
			searchParams.append("id", item);
		}
	} else {
		searchParams.set("id", id);
	}
	const json = await (await getAttribute(searchParams)).json();
	return json;
}

function useApplicants(id) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [applicants, setApplicants] = useState(null);

	useEffect(() => {
		const controller = new AbortController();
		(async () => {
			setLoading(true);
			setError(null);
			setTimeout(async () => {
				try {
					const applicant = await getApplicantByAdvertisementID(id);
					const user = await getUsersByID(Array.from(applicant).map((item) => item.user_id));
					const attribute = await getAttributeByID(Array.from(user).map((item) => item.attribute_id));
					if (controller.signal.aborted) return;
					setApplicants(() => {
						return Array.from(user).map((user, index) => ({ ...user, applicant: applicant[index], attribute: attribute[index] }));
					});
				} catch (error) {
					setError(error.toString());
				} finally {
					setLoading(false);
				}
			}, 1_000);
		})();
		return () => {
			controller.abort();
		};
	}, []);

	return { loading, error, applicants };
}

export default useApplicants;
