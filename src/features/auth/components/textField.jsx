import React from 'react';
import '../styles/components.scss';

const TextField = ({
  icon = null,
  type = 'text',
  placeholder,
  required = true,
  value,
  setValue,
  isError = false,
  disabled = false,
}) => {
  const ref = React.useRef(null);
  const [error, setError] = React.useState(null);

  const [isFocus, setIsFocus] = React.useState(false);

  const handleClick = () => {
    ref.current.focus();
  };

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleFocusLost = () => {
    setIsFocus(false);
  };

  React.useEffect(() => {
    setError(isError);
  }, [isError]);

  return (
    <div
      className={`authInputContainer ${isFocus && 'authInputFieldFocus'} ${error && 'authInputFieldError'}`}
      onClick={handleClick}
    >
      <div className="authInputContent">
        {icon && <span className="authInputIcon">{icon}</span>}
        <input
          disabled={disabled}
          required={required}
          ref={ref}
          className="authInputField"
          type={type}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleFocusLost}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(null);
          }}
        />
      </div>
      {error && <p className="authInputError">{error}</p>}
    </div>
  );
};

export default TextField;
