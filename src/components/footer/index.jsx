import { Link } from 'react-router-dom';
import './index.scss';

import { Link as LucideLink, Star, Contact, Menu } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="footer-container">
        <Link to="/applications">
          <LucideLink />
        </Link>
        <Link to="/matchmake">
          <Star />
        </Link>
        <Link to="/profile">
          <Contact />
        </Link>
        <Link to="/">
          <Menu />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
