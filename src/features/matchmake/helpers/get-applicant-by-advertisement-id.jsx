import getApplicant from "../../applications/api/get-applicant";

/**
 * @param {String} id
 */
async function getApplicantByAdvertisementID(id = "") {
	const searchParams = new URLSearchParams(`advertisement_id=${id}`);
	const data = await getApplicant(searchParams);
	const json = await data.json();
	return json;
}

/**
 * @param {Array} ids
 */
async function getApplicantByAdvertisementIDs(ids = []) {
	const searchParams = new URLSearchParams();
	ids.forEach((id) => searchParams.append("advertisement_id", id));
	const data = await getApplicant(searchParams);
	const json = await data.json();
	return json;
}

export { getApplicantByAdvertisementID, getApplicantByAdvertisementIDs };
