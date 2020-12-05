import { render } from '@testing-library/react';
import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {

  constructor() {
    super(); 

    this.state = {
      sections: []

    }
  }

    render() {
      return (
        <div className="directory_menu">
        {
          this.state.sections.map(({ title imageUrl, id })  => (
            <MenuItem key={id}title = {title} />
          ))
        }      
        </div>
      )
    }
  }

