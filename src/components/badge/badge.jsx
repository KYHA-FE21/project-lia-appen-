import './badge.scss';

const Badge = ({ children, disabled = false }) => {
  const opacity = disabled ? 'opacity-5' : 'opacity-10';
  return (
    <div
      className={`badge-container flex justify-center items-center flex-1 color-white bg-primary ${opacity}`}
    >
      <span className="badge-text">{children}</span>
    </div>
  );
};

export default Badge;
