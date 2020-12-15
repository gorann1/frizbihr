import { render } from '@testing-library/react';
import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {

  constructor() {
    super(); 

    this.state = {
      sections: [
        {
         title: 'hats',
         imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
         id: 1
        },
        {
         title: 'jackets',
         imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
         id: 2
        },
        {
         title: 'sneakers',
         imageUrl: 'https://i.ibb.co/01qHpnp/sneakers.png',
         id: 3
        },
        {
         title: 'womens',
         imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
         size: 'large',
         id: 4
        },
        {
         title: 'mens',
         imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
         aize: 'large',
         id: 5
        },
      ]

    }
  }

    render() {
      return (
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {
          this.state.sections.map(({ title, imageUrl, id })  => (
            <MenuItem key={id}title = {title} imageUrl={ imageUrl} />
          ))
        }      
        </div>
      )
    }
  }

  export default Directory;

