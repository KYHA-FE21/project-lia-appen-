import './secondary-button.scss';

const SecondaryButton = ({
  children,
  width,
  fontSize,
  logo,
  color,
  bg,
  onClick,
}) => {
  return (
    <>
      <button
        className="secondary-button"
        style={{ width: width, fontSize: fontSize }}
        onClick={onClick}
      >
        <span className="secondary-button-text">{children}</span>
        {logo ? (
          <div
            className="secondary-button-icon"
            style={{
              color: color,
              background: bg,
            }}
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
