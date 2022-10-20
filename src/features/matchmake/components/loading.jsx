import { Hourglass, Loader } from "lucide-react";
import Heading from "./heading";
import "./loading.scss";

function Loading() {
	return (
		<>
			<Heading
				className="text-2xl text-white px-3"
				{...{
					heading: "Laddar...",
					icon: <Hourglass color="white" size="30" />,
				}}
			/>
			<Loader className={`spinner m-auto`} color="white" size="25%" />;
		</>
	);
}

export default Loading;
