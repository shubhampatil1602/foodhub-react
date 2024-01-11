import foodhub from '../img/foodhub.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const [btnName, setBtnName] = useState('Login');

  const onlineStatus = useOnlineStatus();

  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={foodhub} alt='foodhub' />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Online Status: {onlineStatus ? '✅' : '🔴'}</li>
          <li>
            <Link to='/' className='li'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' className='li'>
              About Us
            </Link>
          </li>
          <li>
            <Link to='/contact' className='li'>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to='grocery' className='li'>
              Grocery
            </Link>
          </li>
          <li>Cart</li>

          <button
            className='login'
            onClick={() => {
              btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
