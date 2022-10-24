import { Check, Rocket } from "lucide-react";
import SecondaryButton from "../../../components/buttons/secondary-button";
import { CardButtons } from "../../../components/card";
import Container from "../components/container";
import Heading from "../components/heading";

function Verified({ getNew }) {
	return (
		<>
			<Heading
				className="text-2xl text-white px-3"
				{...{
					heading: "Skickat",
					icon: <Rocket color="white" size="30" className="cursor-pointer" onClick={getNew} />,
				}}
			></Heading>
			<Container type="p" className="px-3 text-center text-white">
				Du har en chans
			</Container>
			<CardButtons className="px-3 h-10 mt-auto">
				<SecondaryButton icon={<Check color="white" />} bgColor="green" className="text-white w-full text-sm" onClick={getNew}>
					Tillbaks
				</SecondaryButton>
			</CardButtons>
		</>
	);
}

export default Verified;
