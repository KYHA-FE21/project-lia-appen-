import getAttribute from "../api/get-attribute";

/**
 * @param {String} profession
 * @param {String} isActive - Can be either true, false, or null depending on status of advertisement
 */
async function getAdvertisementAttributeByProfession(profession = "", isActive) {
	const searchParams = new URLSearchParams();
	searchParams.set("type", "advertisement");
	searchParams.set("profession", profession);
	if (isActive !== undefined) {
		searchParams.set("is_active", isActive);
	}
	const data = await getAttribute(searchParams);
	const json = await data.json();
	return json;
}

/**
 * @param {String} profession
 * @param {String} isActive - Can be either true, false, or null depending on status of advertisement
 */
async function getAdvertisementAttributeByProfessions(professions = [], isActive) {
	const searchParams = new URLSearchParams();
	searchParams.set("type", "advertisement");
	professions.forEach((profession) => searchParams.append("profession", profession));
	if (isActive !== undefined) {
		searchParams.set("is_active", isActive);
	}
	const data = await getAttribute(searchParams);
	const json = await data.json();
	return json;
}

export { getAdvertisementAttributeByProfession, getAdvertisementAttributeByProfessions };
