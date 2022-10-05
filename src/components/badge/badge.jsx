import './badge.scss';

const Badge = ({ children, width, fontSize, opacity }) => {
  return (
    <div
      className="badge-container"
      style={{ width: width, fontSize: fontSize, opacity: opacity }}
    >
      <span className="badge-text">{children}</span>
    </div>
  );
};

export default Badge;
