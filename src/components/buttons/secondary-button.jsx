import './secondary-button.scss';

const SecondaryButton = ({ children, width, fontSize, logo, color, bg }) => {
  return (
    <>
      <button
        className="secondary-button"
        style={{ width: width, fontSize: fontSize }}
      >
        <p>{children}</p>
        {logo ? (
          <div
            className="secondary-button-icon"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: width,
              fontSize: fontSize,
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
