import "./index.scss";

import AnimatedText from "./components/animated-text";
import FlexContainer from "./components/flex-container";
import LinkButton from "./components/link-button";
import ProseParagraph from "./components/prose-paragraph";

import SalesPitchSection from "./components/sections/sales-pitch";
import Card, { CardHeader } from "../../components/card";
import { Rocket } from "lucide-react";

function Splash() {
	return (
		<FlexContainer
			direction="col"
			gap="16"
			className="splash-hero-wrapper items-stretch splash-mb-2"
		>
			<div className="splash-hero">
				<FlexContainer
					gap="4"
					direction="col"
					desktopDirection="row"
					className="p-3 splash-cards-max-width-xl min-h-screen md:mx-auto text-white"
					style={{ position: 'relative' }}
				>
					<FlexContainer
						direction="col"
						className="flex-1 flex items-center justify-center gap-6"
					>
						<h1 className="splash-mb-2 h-16 md:h-32 text-3xl md:text-6xl tracking-tighter place-self-stretch">
							<span>Hitta din </span>
							<AnimatedText texts={["LIA plats...", "nästa kollega..."]} />
						</h1>

						<ProseParagraph className="my-6 tracking text-xl">
							Här kan du som student hitta en LIA-plats, och som företag hitta
							dina framtida 🌟 <i>superstars</i>.<strong> Helt gratis!</strong>
						</ProseParagraph>

						<FlexContainer direction="col" className="w-full" gap="4">
							<CardHeader className="text-2xl place-self-center">Jag letar efter</CardHeader>
							<FlexContainer gap="4" className="items-stretch">
								<LinkButton className="text-base p-4" href="/signup">
									Student
								</LinkButton>
								<LinkButton className="text-base p-4" href="/signup">
									Företag
								</LinkButton>
							</FlexContainer>
						</FlexContainer>
					</FlexContainer>
					<FlexContainer className="flex-1 justify-center items-center">
						<Rocket size={128} />
					</FlexContainer>
				</FlexContainer>
			</div>

			<SalesPitchSection />

			<FlexContainer direction="col" className="mx-4 items-center mb-16">
				<Card className="splash-cards-max-width-xl">
					<CardHeader className="place-self-center">
						<strong>Vad väntar du på?</strong>
					</CardHeader>
					<LinkButton href="/signup" className="p-4 text-lg">
						Registrera dig!
					</LinkButton>
				</Card>
			</FlexContainer>
		</FlexContainer>
	);
}

export default Splash;
