import { Link } from "react-router-dom";
import "./index.scss";

import { Contact, HeartHandshake, Loader } from "lucide-react";

const Footer = ({ user }) => {
	return (
		<footer className="main-footer bg-primary text-white">
			<div className="footer-container max-w-screen-lg mx-auto">
				{user?.loading && (
					<div className="p-4 flex-1 flex items-center justify-center">
						<Loader />
					</div>
				)}

				{user?.data && !user.loading && (
					<>
						{user.data.attribute.type === "student" ? (
							<Link to="/applications" className="p-4 flex-1">
								<HeartHandshake />
							</Link>
						) : (
							<Link to="/advertisement" className="p-4 flex-1">
								<HeartHandshake />
							</Link>
						)}

						{user.data.attribute.type === "student" && (
							<Link to="/matchmake" className="p-4 flex-1">
								<Contact />
							</Link>
						)}
					</>
				)}
			</div>
		</footer>
	);
};

export default Footer;
