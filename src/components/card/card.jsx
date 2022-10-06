import Badge from '../badge/badge';
import PrimaryButton from '../buttons/primary-button';
import { Info, Check, X } from 'lucide-react';
import './card.scss';
import SecondaryButton from '../buttons/secondary-button';
import InfoText from '../info-text/info-text';

const Card = ({
  id,
  title = 'Front-End Developer',
  companyBadges = ['HTML', 'CSS', 'JS', 'NODE', 'REACT'],
  applicantBadges = ['HTML', 'CSS', 'REACT'],
  startTime = '2022-11',
  endTime = '2023-05',
  workModel = 'Remote',
  location = 'Gävleborg',
  readMoreButtonOnClick,
  denyButtonOnClick,
  acceptButtonOnClick,
  background,
}) => {
  function drawBadges() {
    return companyBadges.map((badge) => {
      return applicantBadges.some((e) => e === badge) ? (
        <Badge>{badge}</Badge>
      ) : (
        <Badge disabled>{badge}</Badge>
      );
    });
  }

  return (
    <article className="card-container" id={id}>
      <div className="card-top">
        <h2>{title}</h2>
        <PrimaryButton
          onClick={readMoreButtonOnClick}
          width="30%"
          logo={<Info size={16} />}
        >
          Läs Mer
        </PrimaryButton>
      </div>
      <div className="card-badges items-stretch gap-4">{drawBadges()}</div>
      <InfoText
        startTime={startTime}
        endTime={endTime}
        workModel={workModel}
        location={location}
      />
      <div className="card-buttons">
        <SecondaryButton
          width="50%"
          logo={<X />}
          onClick={denyButtonOnClick}
          bg="deny"
        >
          Neka
        </SecondaryButton>
        <SecondaryButton
          width="50%"
          logo={<Check />}
          onClick={acceptButtonOnClick}
          bg="accept"
        >
          Acceptera
        </SecondaryButton>
      </div>
    </article>
  );
};

export default Card;
