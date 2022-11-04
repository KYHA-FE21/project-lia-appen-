import { Check, Rocket, Smile, X } from "lucide-react";
import SecondaryButton from "../../../../components/buttons/secondary-button";
import { CardButtons, CardHeader } from "../../../../components/card";
import Container from "../container";
import Loading from "../loading";

function Verified({ getNew, apply }) {
	const { loading, error, applied } = apply;

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
								<p>Du klarade testet, och har nu möjligheten att söka.</p>
								<p>
									Klicka på <em>Ansök</em> för att ansöka, och ha en chans att få en LIA-plats, eller klicka på <em>Ny annons</em> för att hoppa över ansökan.
								</p>
							</Container>
							<CardButtons className="px-3 text-white mt-auto">
								<SecondaryButton icon={<X color="white" />} bgColor="red" className="w-full text-sm" onClick={apply.deny}>
									Ny annons
								</SecondaryButton>
								<SecondaryButton icon={<Check color="white" />} bgColor="green" className="w-full text-sm" onClick={apply.accept}>
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
								<p>Passa på att titta på fler annonser medan du väntar på svar.</p>
							</Container>
							<CardButtons className="px-3 text-white mt-auto">
								<SecondaryButton icon={<Check color="white" />} bgColor="green" className="w-full text-sm" onClick={getNew}>
									Ny annons
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
