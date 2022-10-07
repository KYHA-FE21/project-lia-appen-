import React from 'react';
import '../styles/components.scss';

const btn = ({ title, type = 'button', disabled = false, backgroundColor = '#4d243d' }) => {
  return (
    <div>
      <button style={{ backgroundColor }} className="questBtn" type={type} disabled={disabled}>
        {title}
      </button>
    </div>
  );
};

export default btn;
