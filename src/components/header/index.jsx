import { Link } from "react-router-dom";
import { LogIn } from "lucide-react";
import "./index.scss";

const Header = () => {
	return (
		<header className="main-header h-max">
			<div className="header-container">
				<Link to="/" className="p-3">
					<img className="logo" src="./logo.svg" alt="Shows the logotype" />
				</Link>

				<Link to="/signin" title="Signin" className="h-full px-4">
					<LogIn size={24} color="white" />
				</Link>
			</div>
		</header>
	);
};

export default Header;
