import { Check, Smile, X } from "lucide-react";
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
					heading: "Grattis!",
					icon: <Smile color="white" size="30" className="cursor-pointer" />,
				}}
			></Heading>
			<Container className="flex flex-col gap-3 px-3 text-center text-white">
				<p>Du klarade provet, och har nu möjligheten att söka.</p>
				<p>Klicka på <em>Ansök</em> för att ansöka, och ha en chans att få en LIA-plats, eller klicka på <em>Nytt test</em> för att hoppa över ansökan.</p>
			</Container>
			<CardButtons className="px-3 h-10 mt-auto">
				<SecondaryButton icon={<X color="white" />} bgColor="red" className="text-white w-full text-sm" onClick={getNew}>
					Nytt test
				</SecondaryButton>
				<SecondaryButton icon={<Check color="white" />} bgColor="green" className="text-white w-full text-sm" onClick={getNew}>
					Ansök
				</SecondaryButton>
			</CardButtons>
		</>
	);
}

export default Verified;
