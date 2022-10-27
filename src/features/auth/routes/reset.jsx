import React from "react";
import "../styles/auth.scss";
import { Mail, Lock } from "lucide-react";
import Logo from "../components/logo";
import Path from "../components/path";
import Button from "../../../components/buttons";
import InputField from "../../../components/input-field";
import useFetch from "../hooks/use-fetch";
import InputError from "../components/input-error";
import { useParams } from "react-router-dom";
import PasswordInfo from "../components/password-info";
import useFocus from "../hooks/use-focus";

const Reset = () => {
	const [localError, setLocalError] = React.useState(null);
	const { data, loading, error, execute } = useFetch();
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [password2, setPassword2] = React.useState("");
	const [notSame, setNotSame] = React.useState(false);
	const { id } = useParams();

	const handleGetResetCredentials = (e) => {
		e.preventDefault();
		execute("/user/reset/getCredentials", { email }, "GET", `?email=${email}`);
	};

	const handleReset = (e) => {
		e.preventDefault();
		execute("/user/reset/confirmCredentials", { password }, "PATCH", `/${id}`);
	};

	React.useEffect(() => {
		const linkTo = (url) => {
			setTimeout(() => {
				window.location.href = url; // Should be useNavigate
			}, 3000);
		};
		if (data && id === "*") linkTo(`/reset/${data[0].id}`);
		else if (data) linkTo("/signin");
	}, [data]);

	React.useEffect(() => {
		if (password === password2) setNotSame(false);
		else setNotSame(true);
	}, [password, password2]);

	React.useEffect(() => {
		setLocalError(error);
	}, [error]);

	const { infoRef, handlePasswordFocus, handlePasswordBlure } = useFocus();

	return (
		<div className="authContainer flex justify-center items-center">
			<div className="authContent w-full p-12">
				<Logo />
				{!data ? (
					<>
						{id === "*" ? (
							<form onSubmit={handleGetResetCredentials} className="flex gap-3 flex-col">
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
								<Button children={loading ? "..." : "FORTSÄTT"} disabled={notSame | loading} className="w-full" />
							</form>
						) : (
							<form onSubmit={handleReset} className="flex gap-3 flex-col">
								<div className="authSignupPasswordContainer">
									<InputField
										className={localError?.type === "password" && "globalInputFieldError"}
										icon={<Lock strokeWidth={1} />}
										type="password"
										placeholder="Nytt lösenord"
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
								<Button
									children={loading ? "..." : "ÅTERSTÄLL LÖSENORD"}
									disabled={notSame | loading}
									className="w-full"
								/>
							</form>
						)}
						<Path links={[{ path: "/signin", title: "Tillbaka" }]} />
					</>
				) : (
					<>
						<div className="text-center text-green">
							{data && id !== "*" ? "Password reset complete!" : "A reset link has been sent to your email!"}
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Reset;
