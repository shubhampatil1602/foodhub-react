import React from 'react';
import ShimmerCard from './ShimmerCard';

const Shimmer = () => {
  return (
    <div className='body'>
      <div className='filter' style={{ visibility: 'hidden' }}>
        <button className='filter-btn' style={{ visibility: 'hidden' }}>
          Loading...
        </button>
      </div>
      <div className='res-container'>
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
