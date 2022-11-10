import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/buttons";

const Path = ({ links }) => {
	return (
		<div className="flex flex-col md:flex-row justify-between gap-3 text-sm">
			{links.map((link, i) => (
				<div key={link.path + i} className="flex-1">
					<Link className="text-white no-underline" to={link.path}>
						<Button className="w-full">{link.title}</Button>
					</Link>
				</div>
			))}
		</div>
	);
};

export default Path;
