import './primary-button.scss';

const PrimaryButton = ({
  children,
  width,
  fontSize,
  color,
  bg,
  logo,
  onClick,
}) => {
  return (
    <button
      className="primary-button"
      style={{
        width: width,
        fontSize: fontSize,
        color: color,
        background: bg,
      }}
      onClick={onClick}
    >
      <span>{children}</span>
      {logo ? logo : ''}
    </button>
  );
};

export default PrimaryButton;
