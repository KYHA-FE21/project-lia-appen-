import { Loader } from "lucide-react";
import "./loading.scss";

function Loading({ size, color, className }) {
	return <Loader className={ `spinner aspect-squared m-auto ${className && className}`} color={color} size={size} />;
}

export default Loading;
