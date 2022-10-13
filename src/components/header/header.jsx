import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import './header.scss';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className='logo'></div>
  
        <Link to="/login">
          <LogIn size={24} color='white' />
        </Link>
      </div>
    </header>
  );
};

export default Header;
