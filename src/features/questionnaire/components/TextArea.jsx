import React from 'react';
import '../styles/components.scss';

const TextArea = ({ label, placeholder, rows, id, value, setValue }) => {
  return (
    <div className="questTextAreaContainer">
      <label htmlFor={id}>{label}</label>
      <div className="textareaContainer">
        <textarea
          id={id}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default TextArea;
