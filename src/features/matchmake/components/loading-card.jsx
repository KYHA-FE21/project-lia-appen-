import { Hourglass } from "lucide-react";
import Card from "../../../components/card";
import Heading from "./heading";
import Loading from "./loading";

function LoadingCard() {
	return (
		<Card className="matchmake-cardfix mx-auto max-w-screen-sm matchmake-min-height">
			<Heading
				className="text-2xl text-white px-3"
				{...{
					heading: "Laddar...",
					icon: <Hourglass color="white" size="30" />,
				}}
			/>
			<Loading color="white" size="25%" />
		</Card>
	);
}

export default LoadingCard;
