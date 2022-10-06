import { Link } from 'react-router-dom';
import './footer.scss';

import { Link as LucideLink, Star, Contact, Menu } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
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
