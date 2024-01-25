import RestaurantCard, { withOfferLabel } from './RestaurantCard';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import useListAndFilterOfRestaurants from '../utils/useListAndFilterOfRestaurants';
import Shimmer from './Shimmer';
import UserContext from '../utils/UserContext';

const Body = () => {
  const [searchText, setSearchText] = useState('');

  const [
    { listOfRestaurants, setListOfRestaurants },
    { filteredRestaurant, setFilteredRestaurant },
  ] = useListAndFilterOfRestaurants();

  // console.log(listOfRestaurants);

  const onlineStatus = useOnlineStatus();

  const RestaurantCardOffer = withOfferLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  if (onlineStatus === false)
    return (
      <div className='body'>
        <h1>
          Looks like you're offline. Please check your internet connection.
        </h1>
      </div>
    );

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='w-3/4 mx-auto flex flex-col min-h-screen mt-10'>
      <div className='flex justify-between my-10 p-2'>
        <div>
          <input
            type='text'
            className='p-2 w-72 rounded-l-md border border-r-0 border-orange-500 text-base outline-none'
            placeholder='Search by Restaurants'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className='px-4 py-2 bg-orange-500 text-white border border-orange-500 rounded-r-md text-base cursor-pointer'
            onClick={() => {
              // console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div>
          <input
            type='text'
            className='p-2 w-40 rounded border border-orange-500 text-base outline-none'
            placeholder='Username'
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <button
          className='bg-orange-500 text-white cursor-pointer border-none px-4 py-2 rounded-md text-base font-semibold'
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            console.log(filteredList);
            setFilteredRestaurant(filteredList); //setListOfRestaurants
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className='flex flex-wrap justify-around gap-3'>
        {filteredRestaurant.map((res) => (
          <Link
            to={'restaurants/' + res.info.id}
            key={res.info.id}
            style={{ color: '#000', textDecoration: 'none' }}
          >
            {
              /** if the restaurant has offer then add a offer label to it */
              res.info.aggregatedDiscountInfoV3.discountTag ? (
                <RestaurantCardOffer resData={res} />
              ) : (
                <RestaurantCard resData={res} />
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
