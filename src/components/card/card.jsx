import Badge from '../badge/badge';
import PrimaryButton from '../buttons/primary-button';
import { Info, Check, X } from 'lucide-react';
import './card.scss';
import SecondaryButton from '../buttons/secondary-button';
import InfoText from '../info-text/info-text';

const Card = ({ title, badges }) => {
  return (
    <article className="card-container">
      <div className="card-top">
        <h2>Front-End Utvecklare</h2>
        <PrimaryButton width="30%" logo={<Info size={16} />}>
          Läs Mer
        </PrimaryButton>
      </div>
      <div className="card-badges">
        <Badge>HTML</Badge>
        <Badge opacity=".3">CSS</Badge>
        <Badge>JS</Badge>
        <Badge opacity=".3">NODE</Badge>
        <Badge opacity=".3">REACT</Badge>
      </div>
      <InfoText
        startTime="2022-11"
        endTime="2023-05"
        workModel="Remote"
        location="Gävleborg"
      />
      <div className="card-buttons">
        <SecondaryButton width="50%" logo={<X />} bg="#fd6d6d">
          Neka
        </SecondaryButton>
        <SecondaryButton width="50%" logo={<Check />} bg="#32ba78">
          Acceptera
        </SecondaryButton>
      </div>
    </article>
  );
};

export default Card;
