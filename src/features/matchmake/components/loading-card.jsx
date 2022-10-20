import { Hourglass } from "lucide-react";
import Heading from "./heading";
import Loading from "./loading";

function LoadingCard() {
	return (
		<>
			<Heading
				className="text-2xl text-white px-3"
				{...{
					heading: "Laddar...",
					icon: <Hourglass color="white" size="30" />,
				}}
			/>
			<Loading color="white" size="25%" />
		</>
	);
}

export default LoadingCard;
