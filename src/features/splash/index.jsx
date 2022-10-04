import AnimatedText from "./components/animated-text";
import Card from "./components/card";
import FlexContainer from "./components/flex-container";
import "./index.scss";

function Splash() {
  return (
    <FlexContainer direction="col" gap="3">
      <div>
        <h1 className="text-xl">
          <span>Hitta din </span>
          <AnimatedText texts={["LIA plats...", "nästa medarbetare..."]} />
        </h1>

        <p>
          Här kan du som student hitta en LIA-plats, och som företag hitta dina
          framtida 🌟 superstars. <strong>Helt gratis!</strong>
        </p>
      </div>
      <Card>
        <FlexContainer className="m-4">
          <FlexContainer className="justify-center">test</FlexContainer>
        </FlexContainer>
      </Card>
    </FlexContainer>
  );
}

export default Splash;
