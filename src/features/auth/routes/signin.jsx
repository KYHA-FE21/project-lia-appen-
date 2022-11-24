import React from "react";
import "../styles/auth.scss";
import { Mail, Lock } from "lucide-react";
import Logo from "../components/logo";
import Path from "../components/path";
import External from "../components/external";
import Button from "../../../components/buttons";
import InputField from "../../../components/input-field";
import { useNavigate } from "react-router-dom";
import InputError from "../components/input-error";
import useFetch from "../hooks/use-fetch";
import AuthContext from "../../../context";
import { getStorage } from "../../../hooks/use-authenticate";

const Signin = () => {
	const { user } = React.useContext(AuthContext);

	const [localError, setLocalError] = React.useState(null);
	const { data, loading, error, execute } = useFetch();
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const userStorage = getStorage("user");

	const handleSubmit = async (e) => {
		e.preventDefault();
		execute("/user/signin", { email, password }, "GET", `?email=${email}`);
	};

	const navigate = useNavigate();
	React.useEffect(() => {
		if (data) {
			userStorage.update({ id: data[0].id });
			window.location.reload();
		}
	}, [data]);

	React.useEffect(() => {
		setLocalError(error);
	}, [error]);

	React.useEffect(() => {
		if (user?.data && !user?.loading) {
			navigate("/profile");
		}
	}, [user]);

	return (
		<div className="authContainer flex justify-center items-center">
			<div className="authContent w-full p-12 flex flex-col gap-8">
				<Logo />
				<form onSubmit={handleSubmit} className="flex gap-3 flex-col">
					<InputField
						className={localError?.type === "email" && "globalInputFieldError"}
						icon={<Mail strokeWidth={1} />}
						type="email"
						placeholder="E-post"
						value={email}
						handleChange={(e) => {
							if (localError?.type === "email") setLocalError(null);
							setEmail(e.target.value);
						}}
						required
					/>
					<InputError error={localError} type="email" />
					<InputField
						className={localError?.type === "password" && "globalInputFieldError"}
						icon={<Lock strokeWidth={1} />}
						type="password"
						placeholder="Lösenord"
						value={password}
						handleChange={(e) => {
							if (localError?.type === "password") setLocalError(null);
							setPassword(e.target.value);
						}}
						required
					/>
					<InputError error={localError} type="password" />
					<Button children={loading ? "..." : "LOGGA IN"} disabled={loading} className="w-full" />
				</form>
				<External />
				<Path
					links={[
						{ path: "/signup", title: "Skapa konto" },
						{ path: "/reset/*", title: "Glömt lösenordet?" },
					]}
				/>
			</div>
		</div>
	);
};

export default Signin;
