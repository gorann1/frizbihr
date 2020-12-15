import React from 'react';

const MenuItem = ({ title, imageUrl }) => (
  <div
  className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
  >
    <div className="overflow-hidden rounded-lg shadow-lg">
   
                    <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random" />

      <h1 className="title"> { title }</h1>
      <span className="subtitle"> SHOP NOW</span>
    </div>
  </div>
)

export default MenuItem;


