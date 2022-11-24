import {
	Building,
	Calendar,
	CheckCircle,
	CheckCircle2,
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
		{
			icon: <Calendar />,
			children: (
				<>
					2022-11-01
					<br />
					2023-06-31
				</>
			),
		},
		{ icon: <CheckCircle />, children: "Hybrid" },
		{ icon: <MapPin />, children: "Gävleborgslän" },
		{ icon: <Building />, children: "Tekkie Yrkeshögskolan" },
	],
	salesPitch:
		"Jag är nyfiken på nya tekniker och bibliotek och intresserad av att skapa projekt i polyglot miljön där många språk utövas. En riktig challenge gillar jag!",
};

const companyBadges = ["JavaScript", "Angular", "React", "Git"];

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
					<div className="flex flex-col gap-3 text-center">
						<strong className="text-xl">Företag</strong>
						<ProseParagraph textAlign="center">
							Efter att man har skapat en gratis företagsprofil, öppnas
							möjligheten att lägga upp en annons och hitta intresserade
							sökande.
						</ProseParagraph>
					</div>
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
						<div className="flex flex-col gap-3 flex-1 text-center p-3">
							<strong>Hur hittar man intressanta studenter?</strong>
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
						</div>

						<Card className="flex-1 gap-5">
							<CardHeader>
								<label htmlFor="sampleQuestion" className="font-bold">
									Skriv din första fråga
								</label>
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
								<InputField
									className="flex flex-1 gap-4"
									type="text"
									name="exampleQuestion"
									id="exampleQuestion"
									defaultValue="Detta är FizzBuzz"
								/>
								<InputField
									className="flex flex-1 gap-4"
									type="text"
									name="exampleQuestion"
									id="exampleQuestion2"
									defaultValue="Detta är programmerat i JavaScript"
								/>
								<InputField
									className="flex flex-1 gap-4"
									type="text"
									name="exampleQuestion"
									id="exampleQuestion3"
									defaultValue="Svaret är Buzz 100"
								/>
								<InputField
									className="flex flex-1 gap-4"
									type="text"
									name="exampleQuestion"
									id="exampleQuestion4"
									defaultValue="Svar 4"
								/>
							</FlexContainer>
							<CardButtons className="text-black">
								<SecondaryButton
									className="flex-1"
									bgColor=""
									color="black"
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
						<Card className="flex-1 gap-5">
							<CardHeader>
								<strong>Söker yrkesrollen frontend-utvecklare!</strong>
							</CardHeader>
							<CardBadges>
								{generateBadges(studentCard.badges, companyBadges, {
									className: "flex-1",
								})}
							</CardBadges>
							<InfoGrid
								entries={studentCard.infoGridEntries}
								className="text-sm"
							/>
							<CardButtons className="text-black">
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

						<div className="flex flex-col gap-3 flex-1 text-center p-3">
							<strong>Matchar sökande uppdraget?</strong>
							<ProseParagraph>
								Det är nu det gäller, här får du möjligheten att läsa om
								studenten innan du får kontakt detaljerna: Och för att få dem,
								behöver du acceptera studentens ansökning.
							</ProseParagraph>
						</div>
					</FlexContainer>
				</div>
			</FlexContainer>
		</>
	);
}

export default CompanySection;
