import React from 'react'
//import './styles.css'

import App from './components/App.js'

export default class MapaTiempoYiLiu extends React.Component {
  render () {
      return (<div>
        <App {...this.props}/>
      </div>)
  }
}

