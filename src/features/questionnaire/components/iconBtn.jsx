import React from 'react';

const iconBtn = ({ icon, onClick, disabled }) => {
  return (
    <button className="questIconBtn" type="button" onClick={onClick} disabled={disabled}>
      {icon}
    </button>
  );
};

export default iconBtn;
