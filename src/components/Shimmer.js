import React from 'react';
import ShimmerCard from './ShimmerCard';

const Shimmer = () => {
  return (
    <div className='w-3/4 mx-auto flex flex-col min-h-screen mt-44'>
      <div className='flex flex-wrap justify-around gap-3'>
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
      </div>
    </div>
  );
};

export default Shimmer;

// <div className='body'>
//   <div className='filter' style={{ visibility: 'hidden' }}>
//     <button className='filter-btn' style={{ visibility: 'hidden' }}>
//       Loading...
//     </button>
//   </div>
//   <div className='res-container'>
//     <ShimmerCard />
//     <ShimmerCard />
//     <ShimmerCard />
//     <ShimmerCard />
//     <ShimmerCard />
//     <ShimmerCard />
//     <ShimmerCard />
//     <ShimmerCard />
//   </div>
// </div>
