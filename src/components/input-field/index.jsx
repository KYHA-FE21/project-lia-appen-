import { useEffect, useRef, useState } from "react";
import "./index.scss";

const InputField = ({
  icon = null,
  isError = false,
  value,
  handleChange,
  ...restProps
}) => {
  const ref = useRef(null);
  const [error, setError] = useState(null);

  const handleClick = () => {
    ref.current.focus();
  };

  useEffect(() => {
    setError(isError);
  }, [isError]);

  let classes = []
  if (error) classes.push('globalInputFieldError')

  return (
    <div
      className="globalInputContainer"
      onClick={handleClick}
    >
      <div className="globalInputContent">
        {icon && <span className="globalInputIcon">{icon}</span>}
        <input
          ref={ref}
          className={`globalInputContent globalInputField ${classes}`}
          value={value}
          onChange={handleChange}
          {...restProps}
        />
      </div>
      {error && <p className="globalInputError">{error}</p>}
    </div>
  );
};

export function InputLabel ({children, ...restProps}) {
  return <label {...restProps}>{children}</label>
}

export default InputField;
