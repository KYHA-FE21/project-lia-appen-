import { Link } from "react-router-dom";
import "./index.scss";

import { Contact, HeartHandshake, Settings } from "lucide-react";

const Footer = () => {
	return (
		<footer className="main-footer bg-primary text-white">
			<div className="footer-container max-w-screen-lg mx-auto">
				{/**
				 * TODO: Link differently based on currently logged in user type.
				 * type === "company" = "/advertisements",
				 * type === "student" = "/applications"
				 */}
				<Link to="/applications" className="p-4 flex-1">
					<HeartHandshake />
				</Link>
				{/**
				 * TODO: Link differently based on currently logged in user type.
				 * type === "company" = "/profiles",
				 * type === "student" = "/matchmake"
				 */}
				<Link to="/matchmake" className="p-4 flex-1">
					<Contact />
				</Link>
				<Link to="/profile" className="p-4 flex-1">
					<Settings />
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
