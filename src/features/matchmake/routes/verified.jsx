import { Check, Rocket, Smile, X } from "lucide-react";
import SecondaryButton from "../../../components/buttons/secondary-button";
import { CardButtons } from "../../../components/card";
import Container from "../components/container";
import Heading from "../components/heading";
import Loading from "../components/loading";
import useApply from "../hooks/use-apply";

function Verified({ advertisementData, user, getNew }) {
	const { loading, error, applied, apply } = useApply();

	async function acceptButton() {
		await apply(advertisementData, user, true);
	}
	async function denyButton() {
		await apply(advertisementData, user, false);
		getNew();
	}
	return (
		<>
			{loading && <Loading />}
			{!loading && error && <Container className="p-3">{error}</Container>}
			{!loading && !error && (
				<>
					{!applied && (
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
								<p>
									Klicka på <em>Ansök</em> för att ansöka, och ha en chans att få en LIA-plats, eller klicka på <em>Nytt test</em> för att hoppa över ansökan.
								</p>
							</Container>
							<CardButtons className="px-3 h-10 mt-auto">
								<SecondaryButton icon={<X color="white" />} bgColor="red" className="text-white w-full text-sm" onClick={denyButton}>
									Nytt test
								</SecondaryButton>
								<SecondaryButton icon={<Check color="white" />} bgColor="green" className="text-white w-full text-sm" onClick={acceptButton}>
									Ansök
								</SecondaryButton>
							</CardButtons>
						</>
					)}
					{applied && (
						<>
							<Heading
								className="text-2xl text-white px-3"
								{...{
									heading: "Grattis!",
									icon: <Rocket color="white" size="30" className="cursor-pointer" />,
								}}
							></Heading>
							<Container className="flex flex-col gap-3 px-3 text-center text-white">
								<p>Ansökan är skickad!</p>
								<p>Passa gärna på att göra fler tester medan du väntar på svar.</p>
							</Container>
							<CardButtons className="px-3 h-10 mt-auto">
								<SecondaryButton icon={<Check color="white" />} bgColor="green" className="text-white w-full text-sm" onClick={getNew}>
									Nytt test
								</SecondaryButton>
							</CardButtons>
						</>
					)}
				</>
			)}
		</>
	);
}

export default Verified;
