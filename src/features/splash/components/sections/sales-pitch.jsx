import Card, { CardBadges, CardButtons, CardHeader } from "../../../../components/card";
import SecondaryButton from "../../../../components/buttons/secondary-button"
import InfoGrid from "../../../../components/info-grid";
import generateBadges from "../../../../components/badge/generate-badges";
import FlexContainer from "../flex-container";
import LinkButton from "../link-button";
import ProseParagraph from "../prose-paragraph";
import { ArrowRight, Calendar, CheckCircle, ClipboardCheck, MapPin } from "lucide-react";

function SalesPitchSection() {
	const companyCard = {
		badges: ["HTML", "CSS", "JavaScript", "Git"],
		infoGridEntries: [
			{ icon: <Calendar />, children: '2022-11 - 2023-06' },
			{ icon: <CheckCircle />, children: 'Hybrid' },
			{ icon: <MapPin />, children: 'Gävleborgslän' }
		]
	}

	return (
		<FlexContainer direction="col" gap="8" className="items-stretch mx-4">
			<FlexContainer direction="col" className="text-2xl items-center">
				<span className="font-display">Hur funkar det</span>
				<FlexContainer className="items-center" gap="4">
					<span className="font-display">som</span>
					<LinkButton
						bgColor="primary"
						textColor="white"
						className="text-sm"
						href="#student"
					>
						Student
					</LinkButton>
					<LinkButton
						bgColor="white"
						textColor="black"
						className="text-sm"
						href="#företag"
					>
						Företag
					</LinkButton>
					<span className="font-display">?</span>
				</FlexContainer>
			</FlexContainer>

			<FlexContainer className="justify-center">
				<div className="splash-cards-max-width-xl">
					<Card>
						<CardHeader className="place-self-center">
							<strong>Student</strong>
						</CardHeader>
						<ProseParagraph textAlign="center">
							Efter att du har skapat din profil, får du möjligheten att ansöka
							till företag som matchar dina preferenser.
						</ProseParagraph>
					</Card>
				</div>
			</FlexContainer>

			<FlexContainer className="justify-center">
				<div className="splash-cards-max-width-xl">
					<FlexContainer className="md:items-start" direction="col" desktopDirection="row" gap="4">
						<Card className="flex-1">
							<CardHeader>
								<strong>Söker frontend studenter!</strong>
							</CardHeader>
							<CardBadges>
								{generateBadges(companyCard.badges, companyCard.badges, { className: 'flex-1' })}
							</CardBadges>
							<InfoGrid entries={companyCard.infoGridEntries} />
							<CardButtons className="text-white">
								<SecondaryButton className="flex-1" bgColor="" color="white" icon={<ArrowRight />}>Nästa</SecondaryButton>
								<SecondaryButton className="flex-1" bgColor="primary" color="white" icon={<ClipboardCheck />}>Ansök</SecondaryButton>
							</CardButtons>
						</Card>

						<Card className="flex-1">
							<CardHeader><strong>Matchar företaget dig?</strong></CardHeader>
							<ProseParagraph>
								När du har läst igenom företagets preferenser och tycker att det
								passar dig, får du chansen att besvara frågor som är skrivna av
								företaget.
							</ProseParagraph>
						</Card>
					</FlexContainer>
				</div>
			</FlexContainer>

			<FlexContainer className="justify-center">
				<div className="splash-cards-max-width-xl">
					<FlexContainer className="md:items-start" direction="col" desktopDirection="row" gap="4">
						<Card className="flex-1">
							<CardHeader><strong>Fråga #1</strong></CardHeader>
							<div className="bg-black -m-3 p-3 py-6 text-white">
								<ProseParagraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel doloremque rem rerum eveniet laudantium nulla? Magnam tenetur repellendus minus!</ProseParagraph>
							</div>
							<FlexContainer gap="3" direction="col" className="py-3">
								<div className="flex flex-1 gap-4 py-2"><input type="radio" name="exampleQuestion" id="exampleQuestion" /> <label  className="flex-1" htmlFor="exampleQuestion">Svar 1</label></div>
								<div className="flex flex-1 gap-4 py-2"><input type="radio" name="exampleQuestion" id="exampleQuestion2" /> <label className="flex-1"  htmlFor="exampleQuestion2">Svar 2</label></div>
								<div className="flex flex-1 gap-4 py-2"><input type="radio" name="exampleQuestion" id="exampleQuestion3" /> <label className="flex-1"  htmlFor="exampleQuestion3">Svar 3</label></div>
								<div className="flex flex-1 gap-4 py-2"><input type="radio" name="exampleQuestion" id="exampleQuestion4" /> <label className="flex-1"  htmlFor="exampleQuestion4">Svar 4</label></div>
							</FlexContainer>
							<CardButtons className="text-white">
								<SecondaryButton className="flex-1" bgColor="" color="white" icon={<ArrowRight />}>Tillbaka</SecondaryButton>
								<SecondaryButton className="flex-1" bgColor="primary" color="white">Nästa fråga</SecondaryButton>
							</CardButtons>
						</Card>

						<Card className="flex-1">
							<CardHeader><strong>Lyckas du med frågorna?</strong></CardHeader>
							<ProseParagraph>
								<span>Om dina svar stämmer överrens med vad företaget frågar, får du
									tillgång att skicka din profil till företaget. </span>
								<strong>
									Vi skickar bara dina preferenser, din profiltext och länkar du
									vill skicka med som företaget ska ta ställning till.
								</strong>
								<span> Sedan är det bara att vänta på svar. 🤞</span>
							</ProseParagraph>
						</Card>
					</FlexContainer>
				</div>
			</FlexContainer>
		</FlexContainer>
	);
}

export default SalesPitchSection;
