import { Link } from "react-router-dom";
import "./index.scss";

import { Link as LucideLink, Star, Contact, Menu } from "lucide-react";

const Footer = () => {
	return (
		<footer className="main-footer bg-primary text-white">
			<div className="footer-container max-w-screen-lg mx-auto">
				<Link to="/applications" className="p-4">
					<LucideLink />
				</Link>
				<Link to="/matchmake" className="p-4">
					<Star />
				</Link>
				<Link to="/profile" className="p-4">
					<Contact />
				</Link>
				<Link to="/" className="p-4">
					<Menu />
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
