import './secondary-button.scss';

const SecondaryButton = ({
  width,
  fontSize,
  logo,
  color,
  bgColor,
  onClick,
  className = "",
  children
}) => {
  let buttonBgColor;
  let buttonTextColor;
  if (color) buttonTextColor = `text-${color}`;
  if (bgColor) buttonBgColor = `bg-${bgColor}`;

  return (
    <>
      <button
        className={`secondary-button flex items-center rounded-md ${className}`}
        style={{ width: width, fontSize: fontSize }}
        onClick={onClick}
      >
        <span className="secondary-button-text">{children}</span>
        {logo ? (
          <div
            className={`secondary-button-icon flex justify-center items-center ${buttonBgColor} ${buttonTextColor}`}
          >
            {logo}
          </div>
        ) : (
          ''
        )}
      </button>
    </>
  );
};

export default SecondaryButton;
