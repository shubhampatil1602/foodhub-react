import { useState } from 'react';
import ItemList from './ItemList';

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);
  // const [button, setButton] = useState('🔼');

  const handleClick = () => {
    setShowIndex();
    //   setButton((btn) => (btn === '🔽' ? '🔼' : '🔽'));
  };

  const { title, itemCards } = data;
  // console.log(data);
  return (
    <div className='w-full border-y-8 border-solid border-[#F1F1F6] shadow-md'>
      {/* Header */}
      <div className=''>
        <div
          className='flex justify-between cursor-pointer px-8 py-5'
          onClick={handleClick}
        >
          <span className='font-extrabold text-lg'>
            {title} ({itemCards.length})
          </span>
          <span>🔽</span>
        </div>

        {/* Accordian Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
