import React from 'react'
import ReactDom from 'react-dom'

import MapaTiempo from './components/MapaTiempo.js'


ReactDom.render(
  <MapaTiempo casos_url='https://base.nocheyniebla.org/casos/cuenta' 
    usar_proxy_cors='false' />, 
  document.getElementById('root')
)

