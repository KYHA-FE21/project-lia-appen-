import "./index.scss";

import AnimatedText from "./components/animated-text";
import FlexContainer from "./components/flex-container";
import LinkButton from "./components/link-button";
import ProseParagraph from "./components/prose-paragraph";

import SalesPitchSection from "./components/sections/sales-pitch";
import Card, { CardHeader } from "../../components/card";

function Splash() {
  return (
    <FlexContainer direction="col" gap="12" className="items-stretch">
      <FlexContainer direction="col" gap="4" className="mx-8">
        <div className="h-16 md:h-32 flex items-center justify-center">
          <h1 className="text-3xl md:text-6xl text-center tracking-tighter">
            <span>Hitta din </span>
            <AnimatedText texts={["LIA plats...", "nästa kollega..."]} />
          </h1>
        </div>
        <div>
          <ProseParagraph textAlign="center" className="tracking">
            Här kan du som student hitta en LIA-plats, och som företag hitta
            dina framtida 🌟 <i>superstars</i>.
            <br />
            <strong>Helt gratis!</strong>
          </ProseParagraph>
        </div>
      </FlexContainer>

      <FlexContainer direction="col" className="mx-4 items-center">
        <Card className="splash-cards-max-width-md">
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
