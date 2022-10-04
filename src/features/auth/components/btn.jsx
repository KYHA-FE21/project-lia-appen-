import React from 'react';
import '../styles/components.scss';

const btn = ({ title, loading = false, disabled = false }) => {
  return (
    <div>
      <button className="authBtn" disabled={loading | disabled}>
        {!loading ? title : 'Loading...'}
      </button>
    </div>
  );
};

export default btn;
