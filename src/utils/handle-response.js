/**
 * @param {Response} resp
 * @returns {Promise<{ data: any | null, error?: Error }>}
 */
export async function handleResponse (resp) {
	const res = {
		data: null,
	}

	if (resp.status < 200 || resp.status >= 300) {
		res.data.error = new Error(resp.statusText)
		res.data.error.name = resp.status
		return res
	}

	try {
		res.data = await resp.json();
	} catch (error) {
		res.error = error;
	}

	return res
}
