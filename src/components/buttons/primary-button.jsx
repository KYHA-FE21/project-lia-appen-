import './primary-button.scss';

const PrimaryButton = ({
  children,
  width,
  fontSize,
  color = 'primary',
  logo,
  onClick,
}) => {
  let colorway = '';
  if (color == 'primary') colorway = 'text-white bg-primary';
  else if (color == 'white') colorway = 'text-black bg-white';
  else if (color == 'black') colorway = 'text-white bg-black';

  return (
    <button
      className={`primary-button flex justify-center items-center gap-1 p-2 rounded-md ${colorway}`}
      style={{
        width: width,
        fontSize: fontSize,
      }}
      onClick={onClick}
    >
      <span>{children}</span>
      {logo ? logo : ''}
    </button>
  );
};

export default PrimaryButton;
