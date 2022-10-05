import { CalendarDays, CheckCircle, MapPin } from 'lucide-react';
import './info-text.scss';

const InfoText = ({
  startTime,
  endTime,
  workModel,
  location,
  width,
  fontSize,
  color,
}) => {
  return (
    <div
      className="info-container"
      style={{
        width: width,
        fontSize: fontSize,
        color: color,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
        <CalendarDays size={20} />
        <span>
          {startTime} to {endTime}
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
        <CheckCircle size={20} />
        <span>{workModel}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
        <MapPin size={20} />
        <span>{location}</span>
      </div>
    </div>
  );
};

export default InfoText;
