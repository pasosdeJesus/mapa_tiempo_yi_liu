Componente react para mostrar datos geolocalizados y con tiempo en un mapa 
y con varias posibilidades de explorarlos interactivamente.

Reusa las fuentes de covid19.health desarrollado por Yi Liu 
y disponible en https://github.com/stevenliuyi/covid19 con licencia
MIT

Está en desarrollo


# 1. Uso

```
yarn add @pasosdejesus/mapa_tiempo_yi_liu
yarn add babel-loader svg-url-loader style-loader reactstrap react-tooltip \
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
  
# 2. Ayudas para resolver problemas en el uso

Este paquete requiere que se agreguen muchos otros paquetes a su aplicación, y requiere unas versiones particulares que pueden ser diferentes a las que su aplicación ya tenga.  Puede ayudarle a determinar esta situación:

  yarn check

Si requiere versiones más actualizadas de las requeridas por este paquete pued clonarlo y usar su copia en github para actualizarla

  git clone git@github/miusuario/mapa_tiempo_yi_liu
  yarn upgrade
  yarn install
  git commit -m "Actualiza" -a
  git push origin master
  
Y use su copia clonada en lugar de la de repositorio en pasosdeJesus, modificando su archivo `package.json` para cambiar

  @pasosdejesus/mapa_tiempo_yi_liu": "0.1.3",

por

  @pasosdejesus/mapa_tiempo_yi_liu": "github:vtamara/mapa_tiempo_yi_liu",


En caso de actualizar le agradecemos nos 

# 3. Desarrollo de este paquete

Para la distribución como paquete npm, utiliza webpack, siguiendo 
este ejemplo:
<https://github.com/vtamara/react_ejemplo_stiff>



# 3.1. Demo muy precario

  yarn start

Iniciará una instancia que escucha http en el puerto 2700.


# 3.2. Publicar
  
  yarn publish
