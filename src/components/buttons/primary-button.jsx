import "./primary-button.scss";

const PrimaryButton = ({
  width,
  fontSize,
  color = "primary",
  logo,
  onClick,
  className = "",
  children,
}) => {
  let colors = "";
  if (color === "primary") colors = "text-white bg-primary";
  else if (color === "white") colors = "text-black bg-white";
  else if (color === "black") colors = "text-white bg-black";

  return (
    <button
      className={`primary-button flex justify-center items-center gap-1 p-2 rounded-md ${colors} ${className}`}
      style={{
        width: width,
        fontSize: fontSize,
      }}
      onClick={onClick}
    >
      {children && <span>{children}</span>}
      {logo && logo}
    </button>
  );
};

export default PrimaryButton;
