import foodhub from '../img/foodhub.png';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Header = () => {
  const [btnName, setBtnName] = useState('Login');

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  const onlineStatus = useOnlineStatus();

  return (
    <div className='flex justify-between items-center shadow-lg mb-10'>
      <div className='ml-20'>
        <img className='w-60 p-1' src={foodhub} alt='foodhub' />
      </div>
      <div className='flex items-center'>
        <ul className='flex p-4 justify-between items-center'>
          <li className='px-3'>Online Status: {onlineStatus ? '✅' : '🔴'}</li>
          <li className='px-3'>
            <Link to='/' className='li'>
              Home
            </Link>
          </li>
          <li className='px-3'>
            <Link to='/about' className='li'>
              About Us
            </Link>
          </li>
          <li className='px-3'>
            <Link to='/contact' className='li'>
              Contact Us
            </Link>
          </li>
          <li className='px-3'>
            <Link to='grocery' className='li'>
              Grocery
            </Link>
          </li>
          <li className='px-3'>Cart</li>

          <button
            className='px-3'
            onClick={() => {
              btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
            }}
          >
            {btnName}
          </button>
          <li className='px-3 font-bold text-orange-500'>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

// className='bg-orange-500 text-white cursor-pointer border-none px-4 py-2 rounded-md text-base font-semibold ml-5'
