/**
 * @param {Response} resp
 * @returns {Promise<{ data: any | null, error?: Error }>}
 */
export default async function handleResponse(resp) {
	const res = {
		data: null,
	};

	if (resp.status < 200 || resp.status >= 300) {
		res.error = new Error(resp.statusText);
		res.error.name = resp.status;
		return res;
	}

	try {
		res.data = await resp.json();
	} catch (error) {
		res.error = error;
	}

	return res;
}
