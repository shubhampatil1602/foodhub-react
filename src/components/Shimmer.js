import React from 'react';
import ShimmerCard from './ShimmerCard';

const Shimmer = () => {
  return (
    <div className='body'>
      <div className='filter'>
        <div className='search'>
          <input
            type='text'
            className='search-box'
            placeholder='Search by Restaurants'
          />
          <button className='search-btn'>Search</button>
        </div>
        <button className='filter-btn'>Loading...</button>
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
