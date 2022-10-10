import { Check, Info, X } from "lucide-react";
import { Outlet } from "react-router-dom";
import generateBadges from "../badge/generate-badges";
import PrimaryButton from "../buttons";
import SecondaryButton from "../buttons/secondary-button";
import Card, { CardBadges, CardButtons, CardHeader } from "../card";
import InfoGrid from "../info-grid";

const Layout = () => {
  return (
    <>
      <header>Header</header>
      <main>
        <Card id="some-id-for-scrolling">
          <CardHeader>
            <h2>test</h2>
            <PrimaryButton icon={<Info size={16} />}>
              Läs Mer
            </PrimaryButton>
          </CardHeader>

          <CardBadges>
            {generateBadges(['JS', 'HTML'], ['JS', 'TS'], {  })}
          </CardBadges>

          <InfoGrid
            entries={[
              { icon: <Info size="20"/>, children: "Text goes here" },
              { icon: <X size="20"/>, children: "Lorem ipsum" },
            ]}
          />

          <CardButtons>
            <SecondaryButton icon={<X />} bgColor="red" className="flex-1">
              Neka
            </SecondaryButton>
            <SecondaryButton
              icon={<Check />}
              bgColor="green"
              className="flex-1"
            >
              Acceptera
            </SecondaryButton>
          </CardButtons>
        </Card>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
