import Card, { CardTitle } from "../card";
import FlexContainer from "../flex-container";
import LinkButton from "../link-button";
import ProseParagraph from "../prose-paragraph";

function SalesPitchSection() {
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
        <div className="splash-cards-max-width-lg">
          <Card>
            <CardTitle>Student</CardTitle>
            <ProseParagraph textAlign="center">
              Efter att du har skapat din profil, får du möjligheten att ansöka
              till företag som matchar dina preferenser.
            </ProseParagraph>
          </Card>
        </div>
      </FlexContainer>

      <FlexContainer className="justify-center">
        <div className="splash-cards-max-width-lg">
          <FlexContainer direction="col" desktopDirection="row" gap="4">
            <Card className="flex-1">
              <CardTitle>Söker frontend studenter!</CardTitle>
            </Card>

            <Card className="flex-1">
              <CardTitle>Matchar företaget dig?</CardTitle>
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
        <div className="splash-cards-max-width-lg">
          <FlexContainer direction="col" desktopDirection="row" gap="4">
            <Card className="flex-1">
              <CardTitle>Fråga #1</CardTitle>
            </Card>

            <Card className="flex-1">
              <CardTitle>Lyckas du med frågorna?</CardTitle>
              <ProseParagraph>
                Om dina svar stämmer överrens med vad företaget frågar, får du
                tillgång att skicka din profil till företaget.
                <strong>
                  Vi skickar bara dina preferenser, din profiltext och länkar du
                  vill skicka med som företaget ska ta ställning till.
                </strong>
                Sedan är det bara att vänta på svar. 🤞
              </ProseParagraph>
            </Card>
          </FlexContainer>
        </div>
      </FlexContainer>
    </FlexContainer>
  );
}

export default SalesPitchSection;
