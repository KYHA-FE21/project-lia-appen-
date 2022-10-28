import getApplicant from "../api/get-applicant";
import getAttributeByID from "./get-attribute-by-id";
import getLinksByUserID from "./get-link-by-user-id";
import getUserByID from "./get-user-by-id";

async function getApplicantByAdvertisementID(id) {
	const searchParams = new URLSearchParams();
	searchParams.set("advertisement_id", id);
	searchParams.append("accepted", true);
	searchParams.append("accepted", false);
	const applicant = await (await getApplicant(searchParams)).json();
	if (!applicant.length) return [];
	const user = await getUserByID(Array.from(applicant).map((item) => item.user_id));
	const link = await getLinksByUserID(Array.from(user).map((item) => item.id));
	const attribute = await getAttributeByID(Array.from(user).map((item) => item.attribute_id));
	return Array.from(user).map((user, index) => ({ ...user, applicant: applicant[index], attribute: attribute[index], link: link.filter((item) => item.user_id === user.id) }));
}

export default getApplicantByAdvertisementID;
