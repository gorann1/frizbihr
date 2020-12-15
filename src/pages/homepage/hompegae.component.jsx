import React from 'react';
import '../homepage/homepage.scss';
import Directory from '../../components/directory/directory.component';
import MenuItem from '../../components/menu-item/menu-item.component';

const HomePage = () => (
  <div className="container my-12 mx-auto px-4 md:px-12">

      <Directory />
      <MenuItem />
  </div>
);

export default HomePage