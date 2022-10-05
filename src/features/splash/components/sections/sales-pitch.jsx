import Card from "../card";
import FlexContainer from "../flex-container";
import LinkButton from "../link-button";

function SalesPitchSection() {
  return (
    <FlexContainer direction="col" gap="4" className="items-center mx-4">
      <FlexContainer direction="col" className="text-md items-center">
        <span className="font-display">Hur funkar det</span>
        <FlexContainer className="items-center" gap="4">
          <span className="font-display">som</span>
          <LinkButton
            bgColor="primary"
            textColor="white"
            className="text-base"
            href="#student"
          >
            Student
          </LinkButton>
          <LinkButton
            bgColor="white"
            textColor="black"
            className="text-base"
            href="#företag"
          >
            Företag
          </LinkButton>
          <span className="font-display">?</span>
        </FlexContainer>
      </FlexContainer>

      <Card className="place-self-stretch">
        <strong className="place-self-center">Student</strong>
        <p className="leading-normal">
          Efter att du har skapat din profil, får du möjligheten att ansöka till
          företag som matchar dina preferenser.
        </p>
      </Card>

      <FlexContainer
        direction="col"
        className="place-self-stretch items-stretch"
      >
        <strong className="font-display text-center">Exempel:</strong>
        <Card className="place-self-stretch">
          <strong className="place-self-center">
            Söker frontend studenter!
          </strong>
        </Card>
      </FlexContainer>

      <Card className="place-self-stretch">
        <strong className="place-self-center">Matchar företaget dig?</strong>
        <p className="leading-normal text-justify">
          När du har läst igenom företagets preferenser och tycker att det
          passar dig, får du chansen att besvara frågor som är skrivna av
          företaget.
        </p>
      </Card>

      <Card className="place-self-stretch">
        <strong className="place-self-center">Fråga #1</strong>
      </Card>

      <Card className="place-self-stretch">
        <strong className="place-self-center">Lyckas du med frågorna?</strong>
        <p className="leading-normal text-justify">
          Om dina svar stämmer överrens med vad företaget frågar, får du
          tillgång att skicka din profil till företaget.
          <strong>
            Vi skickar bara dina preferenser, din profiltext och länkar du vill
            skicka med som företaget ska ta ställning till.
          </strong>
          Sedan är det bara att vänta på svar. 🤞
        </p>
      </Card>

      <Card className="place-self-stretch">
        <strong className="place-self-center">Vad väntar du på?</strong>
        <LinkButton className="p-6 text-md">
          Registrera dig!
        </LinkButton>
      </Card>
    </FlexContainer>
  );
}

export default SalesPitchSection;
