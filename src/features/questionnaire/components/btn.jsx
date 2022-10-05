import React from 'react';
import '../styles/components.scss';

const btn = ({ title, type = 'button', disabled = false }) => {
  return (
    <div>
      <button className="questBtn" type={type} disabled={disabled}>
        {title}
      </button>
    </div>
  );
};

export default btn;
