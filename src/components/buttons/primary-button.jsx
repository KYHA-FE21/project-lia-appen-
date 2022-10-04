import './primary-button.scss';

const PrimaryButton = ({ children, width, fontSize, color, bg, logo }) => {
  return (
    <button
      className="primary-button"
      style={{
        width: width,
        fontSize: fontSize,
        color: color,
        background: bg,
      }}
    >
      <p>{children}</p>
      {logo ? logo : ''}
    </button>
  );
};

export default PrimaryButton;
