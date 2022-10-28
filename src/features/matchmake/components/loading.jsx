import { Hourglass, Loader } from "lucide-react";
import { CardHeader } from "../../../components/card";
import "./loading.scss";

function Loading() {
	return (
		<>
			<CardHeader className="text-2xl text-white px-3">
				<h2>Laddar...</h2>
				<Hourglass color="white" size="30" />
			</CardHeader>
			<Loader className={`spinner m-auto`} color="white" size="25%" />
		</>
	);
}

export default Loading;
