import { Link } from "react-router-dom";
import { LogIn } from "lucide-react";
import "./index.scss";

import logo from './logo.svg'

const Header = () => {
	return (
		<header className="main-header h-max">
			<div className="header-container max-w-screen-xl mx-auto">
				<Link to="/" className="p-3 -ml-7">
					<img className="logo" src={logo} alt="LIA-appen logo" />
				</Link>

				{/* TODO: Replace button with logout if already logged in. */}
				<Link to="/signin" title="Signin" className="p-2 login rounded-md">
					<LogIn size={24} color="#4d243d" />
				</Link>
			</div>
		</header>
	);
};

export default Header;
