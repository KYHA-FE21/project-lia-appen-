import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import './index.scss';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <Link to='/'><img className='logo' src='./logo.svg' alt='Shows the logotype'/></Link>
  
        <Link to="/login">
          <LogIn size={24} color='white' />
        </Link>
      </div>
    </header>
  );
};

export default Header;
