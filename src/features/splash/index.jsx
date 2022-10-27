import "./index.scss";

import AnimatedText from "./components/animated-text";
import FlexContainer from "./components/flex-container";
import LinkButton from "./components/link-button";
import ProseParagraph from "./components/prose-paragraph";

import SalesPitchSection from "./components/sections/sales-pitch";
import { CardHeader } from "../../components/card";
import SplashCard from "./components/card";
import { ArrowDownCircle } from "lucide-react";
import { useRef } from "react";

function Splash() {
	const infoElementRef = useRef();

	return (
		<FlexContainer direction="col" gap="0" className="items-stretch">
			<div className="splash-hero min-h-screen items-center flex">
				<FlexContainer
					gap="16"
					direction="col"
					className="p-3 md:p-16 splash-cards-max-width-xl md:mx-auto text-white items-center"
					style={{ position: "relative" }}
				>
					<FlexContainer
						direction="col"
						className="flex-1 splash-card-bg-white p-16 flex items-center justify-center gap-6 rounded-md p-3 md:p-16"
					>
						<h1 className="place-self-stretch md:place-self-center splash-mb-2 h-16 text-3xl md:text-6xl tracking-tighter">
							<span>Hitta din </span>
							<AnimatedText texts={["LIA plats...", "nästa kollega..."]} />
						</h1>

						<ProseParagraph textAlign="left" className="my-6 tracking text-xl">
							Här kan du som student hitta en LIA-plats, och som företag hitta
							dina framtida 🌟 <i>superstars</i>.<strong> Helt gratis!</strong>
						</ProseParagraph>

						<FlexContainer direction="col" className="w-full md:px-16" gap="4">
							<CardHeader className="text-2xl text-center place-self-center font-display">
								Jag letar efter
							</CardHeader>
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
					<FlexContainer
						onClick={() =>
							infoElementRef.current.scrollIntoView({ behavior: "smooth" })
						}
						direction="col"
						className="place-self-stretch items-center cursor-pointer"
					>
						<ArrowDownCircle size={32} />
					</FlexContainer>
				</FlexContainer>
			</div>

			<FlexContainer
				direction="col"
				gap="16"
				className="pt-16 splash-background-2"
				id="info"
				innerRef={infoElementRef}
			>
				<SalesPitchSection />

				<FlexContainer direction="col" className="mx-4 items-center mb-16">
					<SplashCard className="splash-cards-max-width-xl text-center gap-5 p-4">
						<strong>Vad väntar du på?</strong>
						<LinkButton href="/signup" className="p-4 text-lg">
							Registrera dig!
						</LinkButton>
					</SplashCard>
				</FlexContainer>
			</FlexContainer>
		</FlexContainer>
	);
}

export default Splash;
