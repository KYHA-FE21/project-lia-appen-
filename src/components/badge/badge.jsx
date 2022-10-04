import './badge.scss';

const Badge = ({ children, width, fontSize, opacity }) => {
  return (
    <div
      className="badge"
      style={{ width: width, fontSize: fontSize, opacity: opacity }}
    >
      <p>{children}</p>
    </div>
  );
};

export default Badge;
