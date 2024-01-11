import { CDN_URL } from '../utils/contants';

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla, locality } =
    resData?.info;
  return (
    <div className='res-card'>
      <div className='res-logo-div'>
        <img src={CDN_URL + cloudinaryImageId} className='res-logo' />
      </div>

      <div className='res-info'>
        <h4 style={{ marginTop: '12px', fontSize: '16px' }}>{name}</h4>
        <h4 style={{ fontSize: '14px' }}>
          {cuisines.slice(0, 3).join(', ')}...
        </h4>
        <p>
          {avgRating} stars · {sla.deliveryTime} minutes
        </p>
        <p>{locality}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
