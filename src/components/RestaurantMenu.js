import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantmenu';
import RestaurantCategory from './RestaurantCategory';
import Shimmer from './Shimmer';
import { useState } from 'react';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, areaName } =
    resInfo?.cards[0]?.card?.card?.info; // || {}
  // console.log(resInfo?.cards[0]?.card?.card?.info);

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log('menu');
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.['card']?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );
  // console.log(categories);

  return (
    <div className='w-[56%] mx-auto min-h-screen'>
      <div className='text-center'>
        <h1 className='font-bold mt-5 mb-2 text-xl text-left'>{name}</h1>
        <p className='text-left text-gray-400 text-[12px]'>
          {cuisines.join(', ')}
        </p>
        <p className='text-left text-gray-400 text-[12px] mb-8'>{areaName}</p>

        {/* Catagories Accordians */}
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
