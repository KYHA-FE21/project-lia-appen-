import './secondary-button.scss';

const SecondaryButton = ({
  children,
  width,
  fontSize,
  logo,
  color,
  bgColor,
}) => {
  return (
    <>
      <button
        className="secondary-button"
        style={{ width: width, fontSize: fontSize }}
      >
        <p>{children}</p>
        {logo ? (
          <div
            className="card-button-icon"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: color,
              backgroundColor: bgColor,
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
