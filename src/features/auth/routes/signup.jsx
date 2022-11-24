import React from "react";
import "../styles/auth.scss";
import { Mail, Lock, User } from "lucide-react";
import Logo from "../components/logo";
import Path from "../components/path";
import Button from "../../../components/buttons";
import InputField from "../../../components/input-field";
import External from "../components/external";
import InputError from "../components/input-error";
import useFetch from "../hooks/use-fetch";
import { useNavigate, useSearchParams } from "react-router-dom";
import PasswordInfo from "../components/password-info";
import useFocus from "../hooks/use-focus";
import AuthContext from "../../../context";
import { getStorage } from "../../../hooks/use-authenticate";

const Signup = () => {
	const { user } = React.useContext(AuthContext);

	const [localError, setLocalError] = React.useState(null);
	const { data, loading, error, execute } = useFetch();
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [password2, setPassword2] = React.useState("");
	const [notSame, setNotSame] = React.useState(false);

	const [searchParams] = useSearchParams();
	const [typeParam] = React.useState(searchParams.get("type"));
	const [type, setType] = React.useState(
		["student", "company"].includes(typeParam) ? typeParam : "student"
	);

	const [name, setName] = React.useState("");

	const userStorage = getStorage("user");

	const handleSubmit = (e) => {
		e.preventDefault();
		execute("/user/signup", { email, password, type, name });
	};

	const navigate = useNavigate();
	React.useEffect(() => {
		if (data) {
			userStorage.update({ id: data.id });
			window.location.reload();
		}
	}, [data]);

	React.useEffect(() => {
		if (password === password2) setNotSame(false);
		else setNotSame(true);
	}, [password, password2]);

	React.useEffect(() => {
		setLocalError(error);
	}, [error]);

	React.useEffect(() => {
		if (user?.data && !user?.loading) {
			navigate("/profile");
		}
	}, [user]);

	const { infoRef, handlePasswordFocus, handlePasswordBlur } = useFocus();

	return (
		<div className="authContainer flex justify-center items-center">
			<div className="authContent w-full p-12 flex flex-col gap-8">
				<Logo />
				<form onSubmit={handleSubmit} className="flex gap-3 flex-col">
					<InputField
						icon={<User strokeWidth={1} />}
						className={localError?.type === "name" && "globalInputFieldError"}
						type="text"
						placeholder={
							type === "student" ? "Förnamn Efternamn" : "Företagsnamn"
						}
						value={name}
						handleChange={(e) => {
							if (localError?.type === "name") setLocalError(null);
							setName(e.target.value);
						}}
						required
					/>
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
					<div className="authSignupPasswordContainer relative flex flex-col gap-3">
						<InputField
							className={
								localError?.type === "password" && "globalInputFieldError"
							}
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
							onBlur={handlePasswordBlur}
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
					<div className="flex items-start gap-3 text-white">
						<label className="flex gap-3">
							<InputField
								type="radio"
								value="student"
								checked={type === "student"}
								handleChange={(e) => setType(e.target.value)}
								required
							/>
							<span>Student</span>
						</label>
						<label className="flex gap-3">
							<InputField
								type="radio"
								value="company"
								checked={type === "company"}
								handleChange={(e) => setType(e.target.value)}
								required
							/>
							<span>Företag</span>
						</label>
					</div>
					<Button
						children={loading ? "..." : "BLI MEDLEM"}
						disabled={notSame | loading}
						className="w-full"
					/>
				</form>
				<External />
				<Path links={[{ path: "/signin", title: "Redan medlem?" }]} />
			</div>
		</div>
	);
};

export default Signup;
