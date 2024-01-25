import { useState, useEffect } from 'react';

const useListAndFilterOfRestaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        'https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      );

      const json = await data.json();

      // console.log(
      //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      // ); //1,2,4,5

      setListOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return [
    {
      listOfRestaurants,
      setListOfRestaurants,
    },
    {
      filteredRestaurant,
      setFilteredRestaurant,
    },
  ];
};

export default useListAndFilterOfRestaurants;
