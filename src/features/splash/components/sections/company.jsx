import {
	ArrowRight,
	Building,
	Calendar,
	CheckCircle,
	CheckCircle2,
	ClipboardCheck,
	MapPin,
	X,
} from "lucide-react";
import generateBadges from "../../../../components/badge/generate-badges";
import SecondaryButton from "../../../../components/buttons/secondary-button";
import Card, {
	CardBadges,
	CardButtons,
	CardHeader,
} from "../../../../components/card";
import InfoGrid from "../../../../components/info-grid";
import InputField from "../../../../components/input-field";
import FlexContainer from "../flex-container";
import ProseParagraph from "../prose-paragraph";

const studentCard = {
	badges: ["HTML", "CSS", "JavaScript", "Git"],
	infoGridEntries: [
		{ icon: <Calendar />, children: "2022-11 - 2023-06" },
		{ icon: <CheckCircle />, children: "Hybrid" },
		{ icon: <MapPin />, children: "Gävleborgslän" },
		{ icon: <Building />, children: "Tekkie Yrkeshögskolan" },
	],
	salesPitch:
		"Jag är nyfiken på nya tekniker och bibliotek och intresserad av att skapa projekt i polyglot miljön där många språk utövas. En riktig challenge gillar jag!",
};

const companyBadges = ["JavaScript", "Angular", "React", "Git"]

const question = `let i;
for (i=1; i &lt;= 100; i++) {
	if (i%15 == 0) document.write("FizzBuzz" + " ");
	else if ((i%3) == 0) document.write("Fizz" + " ");
	else if ((i%5) == 0)
	document.write("Buzz" + " ");
	else document.write(i + " ");
}`;

function CompanySection() {
	return (
		<>
			<FlexContainer
				className="justify-center"
				id="company"
				style={{ scrollMargin: "20px" }}
			>
				<div className="splash-cards-max-width-xl">
					<Card>
						<CardHeader className="place-self-center">
							<strong>Företag</strong>
						</CardHeader>
						<ProseParagraph textAlign="center">
							Efter att man har skapat sin gratis företagsprofil, öppnas
							möjligheten att lägga upp en annons och hitta intresserade sökande.
						</ProseParagraph>
					</Card>
				</div>
			</FlexContainer>

			<FlexContainer className="justify-center">
				<div className="splash-cards-max-width-xl">
					<FlexContainer
						className="md:items-start"
						direction="col"
						desktopDirection="row"
						gap="4"
					>
						<Card className="flex-1">
							<CardHeader>
								<strong>Hur hittar man intressanta studenter?</strong>
							</CardHeader>
							<ProseParagraph>
								<span>
									För att du som företag ska få bra med sökande behöver du
									skriva frågor som studenter behöva besvara innan de kan skicka
									in en ansökan till företaget.{" "}
								</span>
								<strong>
									Du får skriva frågan och svaren hur du vill, och glöm inte att
									väcka intresse!
								</strong>
								<span>
									{" "}
									Sedan är det bara att vänta på att du får sökande. 🤞
								</span>
							</ProseParagraph>
						</Card>

						<Card className="flex-1">
							<CardHeader>
								<label htmlFor="sampleQuestion">Skriv din första fråga</label>
							</CardHeader>
							<div className="-m-3">
								<textarea
									className="bg-black text-white w-full splash-h-48 p-3 py-6 leading-normal"
									defaultValue={question}
									style={{ resize: "vertical" }}
									id="sampleQuestion"
								/>
							</div>
							<FlexContainer gap="3" direction="col" className="py-3">
								<div className="flex flex-1 gap-4">
									<InputField
										className="flex-1"
										type="text"
										name="exampleQuestion"
										id="exampleQuestion"
										defaultValue="Detta är FizzBuzz"
									/>
								</div>
								<div className="flex flex-1 gap-4">
									<InputField
										className="flex-1"
										type="text"
										name="exampleQuestion"
										id="exampleQuestion2"
										defaultValue="Detta är programmerat i JavaScript"
									/>
								</div>
								<div className="flex flex-1 gap-4">
									<InputField
										className="flex-1"
										type="text"
										name="exampleQuestion"
										id="exampleQuestion3"
										defaultValue="Svaret är Buzz 100"
									/>
								</div>
								<div className="flex flex-1 gap-4">
									<InputField
										className="flex-1"
										type="text"
										name="exampleQuestion"
										id="exampleQuestion4"
										defaultValue="Svar 4"
									/>
								</div>
							</FlexContainer>
							<CardButtons className="text-white">
								<SecondaryButton
									className="flex-1"
									bgColor=""
									color="white"
									icon={<CheckCircle />}
								>
									Spara
								</SecondaryButton>
							</CardButtons>
						</Card>
					</FlexContainer>
				</div>
			</FlexContainer>

			<FlexContainer className="justify-center">
				<div className="splash-cards-max-width-xl">
					<FlexContainer
						className="md:items-start"
						direction="col"
						desktopDirection="row"
						gap="4"
					>
						<Card className="flex-1">
							<CardHeader>
								<strong>Söker yrkesrollen frontend-utvecklare!</strong>
							</CardHeader>
							<CardBadges>
								{generateBadges(studentCard.badges, companyBadges, {
									className: "flex-1",
								})}
							</CardBadges>
							<InfoGrid entries={studentCard.infoGridEntries} className="text-sm" />
							<CardButtons className="text-white">
								<SecondaryButton
									className="flex-1"
									bgColor="red"
									color="white"
									icon={<X />}
								>
									Neka
								</SecondaryButton>
								<SecondaryButton
									className="flex-1"
									bgColor="green"
									color="white"
									icon={<CheckCircle2 />}
								>
									Acceptera
								</SecondaryButton>
							</CardButtons>
						</Card>

						<Card className="flex-1">
							<CardHeader>
								<strong>Matchar sökande uppdraget?</strong>
							</CardHeader>
							<ProseParagraph>
								Det är nu det gäller, har får du möjligheten att läsa om
								studenten innan du får kontakt detaljerna: Och för att få dem,
								behöver du acceptera studentens ansökning.
							</ProseParagraph>
						</Card>
					</FlexContainer>
				</div>
			</FlexContainer>
		</>
	);
}

export default CompanySection;
