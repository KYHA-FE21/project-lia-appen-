import React from "react";
import "../styles/auth.scss";
import { Mail, Lock } from "lucide-react";
import Logo from "../components/logo";
import Path from "../components/path";
import Button from "../../../components/buttons";
import InputField from "../../../components/input-field";
import usePOST from "../hooks/usePost";
import { useNavigate, useParams } from "react-router-dom";

const Reset = () => {
	const { data, loading, error, fetchPost } = usePOST;
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [password2, setPassword2] = React.useState("");
	const [notSame, setNotSame] = React.useState(false);
	const { id } = useParams();
	const navigate = useNavigate();

	const handleGetResetCredentials = (e) => {
		e.preventDefault();
		fetchPost("/api/user/reset/getCredentials", { email });
	};

	const handleReset = (e) => {
		e.preventDefault();
		fetchPost("/api/user/reset/confirmCredentials", { id, password });
	};

	React.useEffect(() => {
		if (data)
			setTimeout(() => {
				navigate("/signin");
			}, 3000);
	}, [data]);

	React.useEffect(() => {
		if (password === password2) setNotSame(false);
		else setNotSame(true);
	}, [password, password2]);

	return (
		<div className="authContainer flex justify-center items-center">
			<div className="authContent w-full p-12">
				<Logo />
				{!data ? (
					<>
						{id === "*" ? (
							<form onSubmit={handleGetResetCredentials}>
								<InputField
									icon={<Mail strokeWidth={1} />}
									type="email"
									placeholder="E-post"
									value={email}
									handleChange={(e) => setEmail(e.target.value)}
									isError={error?.type === "email" && error.message}
								/>
								<Button children="FORTSÄTT" loading={loading} disabled={notSame} className="w-full" />
							</form>
						) : (
							<form onSubmit={handleReset}>
								<div className="authSignupPasswordContainer">
									<InputField
										icon={<Lock strokeWidth={1} />}
										type="password"
										placeholder="Nytt lösenord"
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
								<Button children="ÅTERSTÄLL LÖSENORD" loading={loading} disabled={notSame} className="w-full" />
							</form>
						)}
						<Path links={[{ path: "/signin", title: "Tillbaka" }]} />
					</>
				) : (
					<>
						<div className="text-center text-green">{data}</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Reset;
