import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantmenu';

import Shimmer from './Shimmer';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info; // || {}

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className='body'>
      <div className='menu'>
        <h1>{name}</h1>
        <p>
          {cuisines.join(', ')} - {costForTwoMessage}
        </p>

        <h2>Menu</h2>
        <ul>
          {itemCards &&
            itemCards.map((item) => {
              return (
                <li key={item?.card?.info?.id}>
                  {item?.card?.info?.name} - ₹
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
