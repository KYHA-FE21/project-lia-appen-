import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Badge from '../../../components/badge/badge';
import InfoText from '../../../components/info-text/info-text';
import './modal.scss';

const Modal = ({ applicantList, companyBadges, index, setOpenModal }) => {
  const [currentIndex, setCurrentIndex] = useState(index);
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-card">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <h2>{applicantList[currentIndex].type}</h2>
            <button onClick={() => setOpenModal(false)}>X</button>
          </div>
          <div className="card-badges">
            {companyBadges.map((badge) => {
              return applicantList[currentIndex].badges.some(
                (e) => e === badge
              ) ? (
                <Badge>{badge}</Badge>
              ) : (
                <Badge opacity="0.3">{badge}</Badge>
              );
            })}
          </div>
          <InfoText
            startTime={applicantList[currentIndex].startTime}
            endTime={applicantList[currentIndex].endTime}
            workModel={applicantList[currentIndex].workModel}
            location={applicantList[currentIndex].location}
          />
        </div>
        <div className="modal-bottom-contoller">
          <button className="modal-arrow-left">
            <ChevronLeft />
          </button>
          <span>
            {currentIndex + 1} / {applicantList.length}
          </span>
          <button
            className="modal-arrow-right"
            onClick={
              currentIndex != applicantList.lenght
                ? setCurrentIndex(currentIndex + 1)
                : setCurrentIndex(0)
            }
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
