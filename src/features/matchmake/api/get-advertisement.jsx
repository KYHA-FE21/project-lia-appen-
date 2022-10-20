function getAdvertisement(searchParams) {
	const url = new URL("advertisement?" + searchParams.toString(), "http://localhost:3004/");
	return fetch(url);
}

export default getAdvertisement;
