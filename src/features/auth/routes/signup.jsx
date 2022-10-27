import React from "react";
import "../styles/auth.scss";
import { Mail, Lock } from "lucide-react";
import Logo from "../components/logo";
import Path from "../components/path";
import Button from "../../../components/buttons";
import InputField from "../../../components/input-field";
import External from "../components/external";
import InputError from "../components/input-error";
import useFetch from "../hooks/use-fetch";
import { useNavigate } from "react-router-dom";
import PasswordInfo from "../components/password-info";
import useFocus from "../hooks/use-focus";

const Signup = () => {
	const [localError, setLocalError] = React.useState(null);
	const { data, loading, error, execute } = useFetch();
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [password2, setPassword2] = React.useState("");
	const [notSame, setNotSame] = React.useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		execute("/user/signup", { email, password });
	};

	const navigate = useNavigate();
	React.useEffect(() => {
		if (data) navigate("/profile");
	}, [data]);

	React.useEffect(() => {
		if (password === password2) setNotSame(false);
		else setNotSame(true);
	}, [password, password2]);

	React.useEffect(() => {
		setLocalError(error);
	}, [error]);

	const { infoRef, handlePasswordFocus, handlePasswordBlur } = useFocus();

	return (
		<div className="authContainer flex justify-center items-center">
			<div className="authContent w-full p-12">
				<Logo />
				<form onSubmit={handleSubmit} className="flex gap-3 flex-col">
					<InputField
						icon={<Mail strokeWidth={1} />}
						className={localError?.type === "email" && "globalInputFieldError"}
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
					<div className="authSignupPasswordContainer">
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
							onFocus={handlePasswordFocus}
							onBlur={handlePasswordBlure}
						/>
						<InputField
							className={notSame && "globalInputFieldError"}
							type="password"
							placeholder="Repetera lösenord"
							value={password2}
							handleChange={(e) => setPassword2(e.target.value)}
							required
						/>
						<PasswordInfo password={password} ref={infoRef} />
					</div>
					<InputError error={localError} type="password" />
					<Button children={loading ? "..." : "BLI MEDLEM"} disabled={notSame | loading} className="w-full" />
				</form>
				<Path links={[{ path: "/signin", title: "Redan Medlem?" }]} />
				<External />
			</div>
		</div>
	);
};

export default Signup;
