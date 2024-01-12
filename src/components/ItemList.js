import { CDN_URL, ELSE_IMG } from '../utils/contants';

const ItemList = ({ items }) => {
  // console.log(items);
  // const allItem = items.map((item) => item.card.info);
  // console.log(allItem);

  return (
    <div className='flex flex-col w-[92%] m-auto'>
      {items.map((item) => (
        <div className='mt-3 border-b-2'>
          <div className='my-3 flex'>
            <div key={item.card.info.id} className='text-left w-[94%]'>
              <span className='text-[14px]'>
                {item.card.info.isVeg ? '🟢' : '🔴'}
              </span>
              <span className='text-[#EE9C00] text-[13.02px] ml-2'>
                {item.card.info.isBestseller ? '⭐️ Bestseller' : null}
              </span>
              <span className='block text-[16.08px] leading-[1.8] font-[500]'>
                {item.card.info.name}
              </span>
              <span className='block text-sm'>
                ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
              <span className='block leading-[1.3] text-[#9CA3AF] text-[13.5px] mt-3.5 font-light'>
                {item.card.info.description || 'Eat once, crave repeatedly.'}
              </span>
            </div>
            <div className='pt-3 h-36'>
              <img
                src={
                  item.card.info.imageId
                    ? `${CDN_URL + item.card.info.imageId}`
                    : `${ELSE_IMG}`
                }
                className='h-[102px] w-[128px] rounded-lg'
              />
              <div className='relative bottom-7 right-[10px] inline'>
                <button className='bg-white text-[#60B246] border-solid border-[1px] border-gray-300 shadow-md rounded-md px-10 py-2 text-[12px] font-bold'>
                  ADD
                </button>
                <span className='text-[#9CA3AF] font-normal text-[10px] p-0 mt-0 relative bottom-2'>
                  Customisable
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/
// <hr class='h-px mt-5 mb-2 bg-gray-950 border-0 dark:bg-gray-300 w-[100%]' />
