import React from 'react';

const ShimmerCard = () => {
  return (
    <div className='res-card w-[244px] h-[300px] mb-3 rounded-lg cursor-pointer overflow-hidden'>
      <div className='h-[162.66px] w-[244px] rounded-[20px] bg-gray-300'></div>
      <div className='w-70 h-5 mt-4 ml-2 bg-gray-300 '></div>
      <div className='w-70 h-5 mt-4 ml-2 bg-gray-300 '></div>
    </div>
  );
};

export default ShimmerCard;

// <div className='shimmer-cards'>
//   <div className='res-logo-shimmer'></div>
//   <div className='res-info-shimmer'></div>
//   <div className='res-info-shimmer'></div>
// </div>
