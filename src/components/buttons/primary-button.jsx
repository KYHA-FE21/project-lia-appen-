import './primary-button.scss';

const PrimaryButton = ({ children, width, fontSize, logo }) => {
  return (
    <button
      className="primary-button"
      style={{ width: width, fontSize: fontSize }}
    >
      {logo ? logo : ''}
      <p>{children}</p>
    </button>
  );
};

export default PrimaryButton;
