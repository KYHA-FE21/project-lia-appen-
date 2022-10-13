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
		<FlexContainer direction="col" gap="12" className="items-stretch splash-mb-2">
			<FlexContainer gap="4" direction="col" desktopDirection="row" className="p-3 splash-cards-max-width-xl min-h-screen md:mx-auto">
				<FlexContainer direction="col" className="flex-1 flex items-center justify-center gap-6">
					<h1 className="splash-mb-2 h-16 md:h-32 text-3xl md:text-6xl tracking-tighter place-self-stretch">
						<span>Hitta din </span>
						<AnimatedText texts={["LIA plats...", "nästa kollega..."]} />
					</h1>

					<ProseParagraph className="my-6 tracking">
						Här kan du som student hitta en LIA-plats, och som företag hitta
						dina framtida 🌟 <i>superstars</i>.
						<strong> Helt gratis!</strong>
					</ProseParagraph>

					<Card className="w-full">
						<CardHeader className="text-2xl place-self-center">
							<strong>Jag letar efter</strong>
						</CardHeader>
						<FlexContainer gap="4" className="items-stretch">
							<LinkButton className="text-base p-4" href="#student">
								Student
							</LinkButton>
							<LinkButton className="text-base p-4" href="#företag">
								Företag
							</LinkButton>
						</FlexContainer>
					</Card>
				</FlexContainer>
				<FlexContainer className="flex-1 justify-center items-center">
					<Rocket size={128}/>
				</FlexContainer>
			</FlexContainer>

			<SalesPitchSection />

			<FlexContainer direction="col" className="mx-4 items-center">
				<Card className="splash-cards-max-width-xl">
					<CardHeader className="place-self-center">
						<strong>Vad väntar du på?</strong>
					</CardHeader>
					<LinkButton href="#" className="p-4 text-lg">
						Registrera dig!
					</LinkButton>
				</Card>
			</FlexContainer>
		</FlexContainer>
	);
}

export default Splash;
