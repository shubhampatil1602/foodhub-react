import { CDN_URL } from '../utils/contants';

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla, locality } =
    resData?.info;
  return (
    <div className='res-card w-[244px] h-[300px] mb-3 rounded-lg cursor-pointer overflow-hidden'>
      <div className='h-40 w-full'>
        <img
          src={CDN_URL + cloudinaryImageId}
          className='custom-img w-full h-full object-cover rounded-lg brightness-75'
        />
      </div>

      <div className='h-56 w-full ml-2'>
        <h4 className='mb-1 mt-3 text-[17px] font-bold'>{name}</h4>
        <h4 className='mb-1 text-[15px] font-bold'>
          {cuisines.slice(0, 3).join(', ')}...
        </h4>
        <p className='text-gray-600 font-light'>
          {avgRating} stars · {sla.deliveryTime} minutes
        </p>
        <p className='text-gray-600 font-light'>{locality}</p>
      </div>
    </div>
  );
};

export const withOfferLabel = (RestaurantCard) => {
  return (props) => {
    const { discountTag } = props.resData.info.aggregatedDiscountInfoV3;
    // console.log(props.resData.info.aggregatedDiscountInfoV3.discountTag);
    return (
      <div>
        <label className='absolute font-extrabold text-3xl text-white p-2 rounded-lg z-10 mt-[108px] pl-4'>
          {discountTag}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
