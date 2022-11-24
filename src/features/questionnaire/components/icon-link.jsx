import { Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

function IconLink({ to = "", icon = <LinkIcon />, children }) {
	return (
		<Link className="mb-5 flex items-center gap-2" to={to}>
			{icon}
			{children}
		</Link>
	);
}

export default IconLink;
