import React from "react";
import "../styles/auth.scss";
import { Mail, Lock } from "lucide-react";
import Logo from "../components/logo";
import Path from "../components/path";
import External from "../components/external";
import Button from "../../../components/buttons";
import InputField from "../../../components/input-field";
import usePOST from "../hooks/usePost";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
	const { data, loading, error, fetchPost } = usePOST;
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		fetchPost("/api/user/signin", { email, password });
	};

	const navigate = useNavigate();
	React.useEffect(() => {
		if (data) navigate("/profile");
	}, [data]);

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
					<InputField
						icon={<Lock strokeWidth={1} />}
						type="password"
						placeholder="Lösenord"
						value={password}
						handleChange={(e) => setPassword(e.target.value)}
						isError={error?.type === "password" && error.message}
					/>
					<Link to="/profile" className="no-underline">
						<Button loading={loading} className="w-full">
							LOGGA IN
						</Button>
					</Link>
				</form>
				<Path
					links={[
						{ path: "/signup", title: "Skapa Konto" },
						{ path: "/reset/*", title: "Glöm Lösenord?" },
					]}
				/>
				<External />
			</div>
		</div>
	);
};

export default Signin;
