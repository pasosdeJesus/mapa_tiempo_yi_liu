Componente react para mostrar datos geolocalizados y con tiempo en un mapa 
y con varias posibilidades de explorarlos interactivamente.

Reusa las fuentes de covid19.health desarrollado por Yi Liu 
y disponible en https://github.com/stevenliuyi/covid19 con licencia
MIT

Está en desarrollo


# 1. Uso

```
yarn add @pasosdejesus/mapa_tiempo_yi_liu
yarn add svg-url-loader style-loader reactstrap react-tooltip \
 react-toggle react-text-transition react-table react-simple-maps \
 react-select react-scripts react-measure react-loader-spinner \
 react-icons react-helmet react-device-detect react-d3-graph \
 react-compound-slider react-app-rewired react-app-rewire-yaml \
 postinstall-postinstall patch-package mapshaper lodash js-yaml-loader \
 html-webpack-plugin flag-icon-css file-loader date-fns d3-zoom d3-time \
 d3-scale-chromatic d3-scale d3-force d3-drag d3 css-loader @vx/pattern \
 @nivo/stream @nivo/line @nivo/circle-packing @nivo/bump @ctrl/tinycolor \
 @babel/preset-env @babel/core
yarn install
```

Donde requiera insertar el componente puede crear un elemento
con id `root` y  asegurar la ejecución del siguiente código que
incrustará la aplicación ese elemento:
```
import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'

import App from '@pasosdejesus/mapa_tiempo_yi_liu'

render(<App />, document.getElementById('root'))
```

Por ahora la aplicación que lo incluya debe proveer una API que
responda a peticiones GET así:

<dl>
  <dt>`/maps/WORLD`</dt>
  <dd>que retorne WORLD.json como en <https://github.com/pasosdeJesus/sivel2_gen/raw/usa_paq_mapa_tiempo/test/dummy/public/maps/WORLD.json></dd>
  <dt>`/maps/gadm36_COL_1` </dt>
  <dd>que retorne gadm36_COL_1.json como en <https://github.com/pasosdeJesus/sivel2_gen/raw/usa_paq_mapa_tiempo/test/dummy/public/maps/gadm36_COL_1.json></dd>
  <dt>`/casos/infomapa/datoscovid`</dt>
  <dd>que retorne `all.json` como en <https://github.com/pasosdeJesus/sivel2_gen/raw/usa_paq_mapa_tiempo/test/dummy/public/data/all.json></dt>
</dl>
  
    


# 2. Desarrollo de este paquete

Para la distribución como paquete npm, utiliza webpack, siguiendo 
este ejemplo:
<https://github.com/vtamara/react_ejemplo_stiff>



# 2.1. Demo muy precario

  yarn start



# 3. Publicar
  
  yarn publish
