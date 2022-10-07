import './index.scss';

const Badge = ({ children, disabled = false, className = "" }) => {
  const opacity = disabled ? 'opacity-5' : 'opacity-10';
  return (
    <div
      className={`badge-container flex justify-center items-center bg-primary ${opacity} ${className}`}
    >
      <span className="badge-text">{children}</span>
    </div>
  );
};

export default Badge;
