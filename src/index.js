import React from 'react'
//import './styles.css'

import MapaTiempo from './components/MapaTiempo.js'

export default class MapaTiempoYiLiu extends React.Component {
  render () {
      return (<div>
        <MapaTiempo {...this.props}/>
      </div>)
  }
}

