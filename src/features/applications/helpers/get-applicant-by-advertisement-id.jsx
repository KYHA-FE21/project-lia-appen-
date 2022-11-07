import getApplicant from "../api/get-applicant";
import { getAttributeByIDs } from "./get-attribute-by-id";
import { getLinksByUserIDs } from "./get-link-by-user-id";
import { getUserByIDs } from "./get-user-by-id";

/**
 *
 * @param {String} id
 * @returns {Array}
 */
async function getApplicantByAdvertisementID(id = "") {
	const searchParams = new URLSearchParams();
	searchParams.set("advertisement_id", id);
	searchParams.append("accepted", true);
	searchParams.append("accepted", false);
	const data = await getApplicant(searchParams);
	const applicant = await data.json();
	if (!applicant.length) return [];
	const user = await getUserByIDs(Array.from(applicant).map((item) => item.user_id));
	const link = await getLinksByUserIDs(Array.from(user).map((item) => item.id));
	const attribute = await getAttributeByIDs(Array.from(user).map((item) => item.attribute_id));
	return Array.from(user).map((user, index) => ({ ...user, applicant: applicant[index], attribute: attribute[index], link: link.filter((item) => item.user_id === user.id) }));
}

export default getApplicantByAdvertisementID;
