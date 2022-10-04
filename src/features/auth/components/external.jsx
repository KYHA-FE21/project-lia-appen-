import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

const externalAuth = () => {
  return (
    <div className="authExternalContainer">
      <p>or</p>
      <div className="authExternalBtns">
        <Link to="/">
          <button className="authFacebook">
            <Facebook strokeWidth={1} size={20} />
          </button>
        </Link>
        <Link to="/">
          <button className="authTwitter">
            <Twitter strokeWidth={1} size={20} />
          </button>
        </Link>
        <Link to="/">
          <button className="authLinkedin">
            <Linkedin strokeWidth={1} size={20} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default externalAuth;
