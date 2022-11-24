import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const ExternalAuth = () => {
	return (
		<div className="authExternalContainer w-full text-white text-center gap-3 flex flex-col">
			<p className="flex flex-row mb-4 text-sm">eller</p>
			<div className="flex justify-center">
				<Link to="/">
					<button className="authFacebook">
						<Facebook strokeWidth={1} size={20} />
					</button>
				</Link>
				<Link to="/">
					<button className="authTwitter">
						<Twitter strokeWidth={1} size={20} />
					</button>
				</Link>
				<Link to="/">
					<button className="authLinkedin">
						<Linkedin strokeWidth={1} size={20} />
					</button>
				</Link>
			</div>
		</div>
	);
};

export default ExternalAuth;
