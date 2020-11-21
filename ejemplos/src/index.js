import React from 'react';
import { render} from 'react-dom';
import App from '../../src';

class MapaTiempo extends React.Component {

  render() {

    return (
        <App {...this.props}/>
    );
  }
};


render(<MapaTiempo/>, document.getElementById('root'));
