import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return cartItems.length === 0 ? (
    <EmptyCart />
  ) : (
    <div className='bg-[#E9ECEE] text-center'>
      <div className='w-[70%] m-auto p-8 flex justify-between'>
        <h1 className='font-bold text-[32px]'>Your Cart</h1>
        <button
          className='px-5 rounded-md text-white font-bold text-md bg-red-500'
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      <div className='h-[100vh] w-full flex justify-center gap-8 bg-[#E9ECEE] mt-0'>
        <div className='w-[50%] min-h-screen bg-white'>
          <ItemList items={cartItems} />
        </div>
        <div className='w-[25%] min-h-screen bg-white'>Cart</div>
      </div>
    </div>
  );
};

export default Cart;
