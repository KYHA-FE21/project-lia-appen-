import Badge from '../badge/badge';
import PrimaryButton from '../buttons/primary-button';
import {
  Info,
  CalendarDays,
  CheckCircle,
  MapPin,
  Check,
  X,
} from 'lucide-react';
import './card.scss';
import SecondaryButton from '../buttons/secondary-button';

const Card = ({ title }) => {
  return (
    <div className="card-container">
      <div className="card-top">
        <h3>Front-End Utvecklare</h3>
        <PrimaryButton logo={<Info size={20} />}>Läs Mer</PrimaryButton>
      </div>
      <div className="card-badges">
        <Badge>HTML</Badge>
        <Badge opacity=".3">CSS</Badge>
        <Badge>JS</Badge>
        <Badge opacity=".3">NODE</Badge>
        <Badge opacity=".3">REACT</Badge>
      </div>
      <div className="card-info-container">
        <div className="card-info">
          <CalendarDays size={20} />
          <p>2022-11 to 2023-06</p>
        </div>
        <div className="card-info">
          <CheckCircle size={20} />
          <p>Remote</p>
        </div>
        <div className="card-info">
          <MapPin size={20} />
          <p>Gävleborgs län</p>
        </div>
      </div>
      <div className="card-buttons">
        <SecondaryButton logo={<X />} bg="#fd6d6d">
          Neka
        </SecondaryButton>
        <SecondaryButton logo={<Check />} bg="#32ba78">
          Acceptera
        </SecondaryButton>
      </div>
    </div>
  );
};

export default Card;
