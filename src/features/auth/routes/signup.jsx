import React from "react";
import "../styles/auth.scss";
import { Mail, Lock } from "lucide-react";
import Logo from "../components/logo";
import Path from "../components/path";
import Button from "../../../components/buttons";
import InputField from "../../../components/input-field";
import External from "../components/external";
import usePOST from "../hooks/usePost";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../../hooks/use-local-storage";

const Signup = () => {
	const { data, loading, error, fetchPost } = usePOST;
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [password2, setPassword2] = React.useState("");
	const [notSame, setNotSame] = React.useState(false);

	const [store, setStore] = useLocalStorage('user', '');

	const handleSubmit = async (e) => {
		e.preventDefault();
		fetchPost("/api/user/signup", { email, password });
	};

	const navigate = useNavigate();
	React.useEffect(() => {
		if (data) {
			setStore('user', data)
			navigate("/profile");
		}
	}, [data]);

	React.useEffect(() => {
		if (password === password2) setNotSame(false);
		else setNotSame(true);
	}, [password, password2]);

	return (
		<div className="authContainer flex justify-center items-center">
			<div className="authContent w-full p-12">
				<Logo />
				<form onSubmit={handleSubmit} className="flex gap-3 flex-col">
					<InputField
						icon={<Mail strokeWidth={1} />}
						type="email"
						placeholder="E-post"
						value={email}
						handleChange={(e) => setEmail(e.target.value)}
						isError={error?.type === "email" && error.message}
					/>
					<div className="authSignupPasswordContainer">
						<InputField
							icon={<Lock strokeWidth={1} />}
							type="password"
							placeholder="Lösenord"
							value={password}
							handleChange={(e) => setPassword(e.target.value)}
							isError={error?.type === "password" && error.message}
						/>
						<InputField
							type="password"
							placeholder="Repetera lösenord"
							value={password2}
							handleChange={(e) => setPassword2(e.target.value)}
						/>
					</div>
					<Button children="BLI MEDLEM" loading={loading} disabled={notSame} className="w-full" />
				</form>
				<Path links={[{ path: "/signin", title: "Redan Medlem?" }]} />
				<External />
			</div>
		</div>
	);
};

export default Signup;
