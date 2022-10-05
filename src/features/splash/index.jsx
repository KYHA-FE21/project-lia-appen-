import "./index.scss";

import AnimatedText from "./components/animated-text";
import Card from "./components/card";
import FlexContainer from "./components/flex-container";
import LinkButton from "./components/link-button";

import SalesPitchSection from "./components/sections/sales-pitch";

function Splash() {
  return (
    <FlexContainer direction="col" gap="8">
      <FlexContainer direction="col" gap="4" className="mx-8">
        <div className="h-16">
          <h1 className="text-lg text-center tracking-tighter">
            <span>Hitta din </span>
            <AnimatedText texts={["LIA plats...", "nästa kollega..."]} />
          </h1>
        </div>

        <div>
          <p className="text-center leading-normal tracking">
            Här kan du som student hitta en LIA-plats, och som företag hitta
            dina framtida 🌟 <i>superstars</i>.
            <br />
            <strong>Helt gratis!</strong>
          </p>
        </div>
      </FlexContainer>

      <FlexContainer direction="col" className="mx-4">
        <Card>
          <strong className="text-md place-self-center">Jag letar efter</strong>
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
    </FlexContainer>
  );
}

export default Splash;
