import { Loader } from "lucide-react";
import "./loading.scss";

function Loading({ size, color }) {
	return <Loader className="spinner aspect-squared m-auto" color={color} size={size} />;
}

export default Loading;
