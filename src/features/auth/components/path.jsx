import React from 'react';
import { Link } from 'react-router-dom';

const path = ({ links }) => {
  return (
    <div className="authLinkContent">
      {links.map((link, i) => (
        <div key={link.path + i}>
          <Link to={link.path}>{link.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default path;
