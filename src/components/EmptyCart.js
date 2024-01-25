import { Link } from 'react-router-dom';
import { EMPTY_CART } from '../utils/contants';

const EmptyCart = () => {
  return (
    <div className='h-[90vh] flex flex-col justify-center items-center'>
      <div className=''>
        <img
          src={EMPTY_CART}
          alt='empty cart'
          className='w-[271px] h-[179.2px]'
        />
      </div>
      <div className='flex flex-col justify-center'>
        <h1 className='font-bold text-[#535665] text-2xl text-center mt-6'>
          Your cart is empty
        </h1>
        <p className='text-[#7e808c] text-sm mt-2'>
          You can go to home page to view more restaurants
        </p>
        <div className='m-auto'>
          <Link to='/' className='li'>
            <button className='bg-[#fc8019] mt-8 text-[15px] text-[#fff] font-semibold cursor-pointer py-2 px-5'>
              SEE RESTAURANTS NEAR YOU
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
