import { Link } from "react-router-dom";
import { Loader, LogIn, User } from "lucide-react";
import "./index.scss";

import logo from "./logo.svg";

const Header = ({ user }) => {
	return (
		<header className="main-header h-max">
			<div className="header-container max-w-screen-xl mx-auto">
				<Link to="/" className="p-3 -ml-7">
					<img className="logo" src={logo} alt="LIA-appen logo" />
				</Link>

				{user?.loading && (
					<div className="p-2 login rounded-md">
						<Loader size={24} className="text-primary" />
					</div>
				)}

				{user?.data && !user.loading && (
					<Link to="/profile" title="Profile" className="p-2 login rounded-md">
						<User size={24} className="text-primary" />
					</Link>
				)}

				{user?.unauthenticated && (
					<Link to="/signin" title="Signin" className="p-2 login rounded-md">
						<LogIn size={24} className="text-primary" />
					</Link>
				)}
			</div>
		</header>
	);
};

export default Header;
