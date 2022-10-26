import getApplicant from "../api/get-applicant";

async function getApplicantByAdvertisementID(id = "") {
	const searchParams = new URLSearchParams();
	searchParams.set("advertisement_id", id);
	searchParams.append("accepted", true);
	searchParams.append("accepted", false);
	const json = await (await getApplicant(searchParams)).json();
	return json;
}

export default getApplicantByAdvertisementID;
