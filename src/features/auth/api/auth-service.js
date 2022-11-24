export default class AuthService {
	constructor() {
		this.url = process.env.REACT_APP_BACKEND_ENDPOINT + "/user";
	}

	async _fetch(parameters, method = "GET", body) {
		try {
			const url = this.url + parameters;
			const res = await fetch(url, {
				method,
				headers: {
					"Content-Type": "application/json",
				},
				body: method !== "GET" ? JSON.stringify(body) : undefined,
			});
			return await res.json();
		} catch (err) {
			console.error(err);
		}
	}

	passwordIsValid(password) {
		return ![
			/[A-Z]/.test(password),
			/[a-z]/.test(password),
			/[0-9]/.test(password),
			!/^[0-9A-Za-z]+$/.test(password),
			password.length >= 8,
		].includes(false);
	}

	async controller(url, { email, password, id }) {
		const user = await this._fetch(`?email=${email}`);
		const noneEmail = { error: { type: "email", message: "Email not registered" } };
		const invalidPassword = { error: { type: "password", message: "Password not strong enough" } };

		if (url === "/user/signup") {
			if (user.length) return { error: { type: "email", message: "Email already registered" } };
			return this.passwordIsValid(password) ? true : invalidPassword;
		}

		if (url === "/user/signin") {
			if (!user.length) return noneEmail;
			if (user[0].password !== password) return { error: { type: "password", message: "Invalid password" } };
			return true;
		}

		if (url === "/user/reset/getCredentials") {
			if (!user.length) return noneEmail;
			// Should create uuid in "reset table" with TTL 30min and send the reset link to user email
			return true;
		}

		if (url === "/user/reset/confirmCredentials") {
			// Validate reset link before patch user password
			const user = await this._fetch(`?id=${id}`);
			if (!user) return { error: { type: "other", message: "Invalid reset key" } };
			return this.passwordIsValid(password) ? true : invalidPassword;
		}
	}
}
