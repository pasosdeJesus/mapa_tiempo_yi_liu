import React from 'react';
import { render} from 'react-dom';
import MapaTiempo from '../../src/index.js';

class MapaApp extends React.Component {

  render() {

    return (
        <MapaTiempo {...this.props}/>
    );
  }
};


render(<MapaApp/>, document.getElementById('root'));
