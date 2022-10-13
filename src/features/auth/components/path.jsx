import React from "react";
import { Link } from "react-router-dom";

const path = ({ links }) => {
	return (
		<div className="flex justify-between text-sm">
			{links.map((link, i) => (
				<div key={link.path + i}>
					<Link className="authLinks no-underline" to={link.path}>
						{link.title}
					</Link>
				</div>
			))}
		</div>
	);
};

export default path;
