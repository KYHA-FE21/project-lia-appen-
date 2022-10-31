import { Check, Rocket, Smile, X } from "lucide-react";
import SecondaryButton from "../../../components/buttons/secondary-button";
import { CardButtons, CardHeader } from "../../../components/card";
import Container from "../components/container";
import Loading from "../components/loading";
import useApply from "../hooks/apply";

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
							<CardHeader className="text-2xl px-3">
								<h2>Grattis!</h2>
								<Smile className="cursor-pointer" color="black" size="30" />
							</CardHeader>
							<Container className="flex flex-col gap-3 px-3 text-center">
								<p>Du klarade provet, och har nu möjligheten att söka.</p>
								<p>
									Klicka på <em>Ansök</em> för att ansöka, och ha en chans att få en LIA-plats, eller klicka på <em>Nytt test</em> för att hoppa över ansökan.
								</p>
							</Container>
							<CardButtons className="px-3 text-white mt-auto">
								<SecondaryButton icon={<X color="white" />} bgColor="red" className="w-full text-sm" onClick={denyButton}>
									Nytt test
								</SecondaryButton>
								<SecondaryButton icon={<Check color="white" />} bgColor="green" className="w-full text-sm" onClick={acceptButton}>
									Ansök
								</SecondaryButton>
							</CardButtons>
						</>
					)}
					{applied && (
						<>
							<CardHeader className="text-2xl px-3">
								<h2>Grattis!</h2>
								<Rocket className="cursor-pointer" color="black" size="30" />
							</CardHeader>
							<Container className="flex flex-col gap-3 px-3 text-center">
								<p>Ansökan är skickad!</p>
								<p>Passa gärna på att göra fler tester medan du väntar på svar.</p>
							</Container>
							<CardButtons className="px-3 text-white mt-auto">
								<SecondaryButton icon={<Check color="white" />} bgColor="green" className="w-full text-sm" onClick={getNew}>
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
