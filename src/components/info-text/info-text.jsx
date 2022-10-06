import { CalendarDays, CheckCircle, MapPin } from 'lucide-react';
import './info-text.scss';

const InfoText = ({
  startTime,
  endTime,
  workModel,
  location,
  width,
  fontSize,
  color = 'black',
}) => {
  let clr;
  if (color === 'light') clr = 'text-black';
  else if (color === 'dark') clr = 'text-white';

  return (
    <div
      className={`info-container ${clr}`}
      style={{
        width: width,
        fontSize: fontSize,
      }}
    >
      <div className="flex items-center gap-2">
        <CalendarDays size={20} />
        <span>
          {startTime} to {endTime}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle size={20} />
        <span>{workModel}</span>
      </div>
      <div className="flex items-center gap-2">
        <MapPin size={20} />
        <span>{location}</span>
      </div>
    </div>
  );
};

export default InfoText;
