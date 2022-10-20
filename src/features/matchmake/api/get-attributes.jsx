function getAttributes(searchParams) {
	const url = new URL("attibutes?" + searchParams.toString(), "http://localhost:3004/");
	return fetch(url);
}

export default getAttributes;
