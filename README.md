Componente react para mostrar datos geolocalizados y con tiempo en un mapa 
y con varias posibilidades de explorarlos interactivamente.

Reusa las fuentes de covid19.health desarrollado por Yi Liu 
y disponible en https://github.com/stevenliuyi/covid19 con licencia
MIT

Está en desarrollo


# 1. Uso desde una aplicación Ruby on Rails

Como se explica en 
<https://github.com/pasosdeJesus/sip/wiki/2020_08-Formulario-interactivo-con-react-en-una-aplicaci%C3%B3n-que-usa-sip> 
es conveniente que actualice a la versión más reciente de `webpacker`, 
que la instale y/o que actualice sus archivos de configuración y que 
prepare `webpacker` para desarrollar con `react`.  También es recomendable 
que use la gema `react-rails` y si hace falta que la instale y/o actualice 
la configuración de `react-rails`.  Tras esto puede añadir las dependencias 
que este paquete exige: 
```
yarn add @pasosdejesus/mapa_tiempo_yi_liu
yarn add babel-loader svg-url-loader style-loader reactstrap react-tooltip \
 react-toggle react-text-transition react-table react-simple-maps \
 react-select react-scripts react-measure react-loader-spinner \
 react-icons react-helmet react-device-detect react-d3-graph \
 react-compound-slider react-app-rewired react-app-rewire-yaml \
 postinstall-postinstall patch-package mapshaper lodash js-yaml-loader \
 html-webpack-plugin flag-icon-css file-loader date-fns d3-zoom d3-time \
 d3-scale-chromatic d3-scale d3-force d3-drag d3 css-loader d3-selection @vx/pattern \
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

Por ahora la aplicación incluye de forma estática los datos necesarios 
únicamente para la visualización del mapa de Colombia y sus departamentos. 


Si al ejecutar no se presenta el mapa, y en el inspector ve un problema 
del estilo:

```react-table.production.min.js:161 Uncaught TypeError: Cannot read property 'useLayoutEffect' of undefined```

Se trata del problema con react-table descrito en  
<https://github.com/tannerlinsley/react-table/discussions/2048>
lo puede resolver agregando al final de   `config/webpack/environment.js`:

```
const nodeModulesLoader = environment.loaders.get('nodeModules')

if (!Array.isArray(nodeModulesLoader.exclude)) {
    nodeModulesLoader.exclude = (nodeModulesLoader.exclude == null) ? [] : [nodeModulesLoader.exclude]
}
nodeModulesLoader.exclude.push(/react-table/)
```

# 2. Ayudas para resolver problemas en el uso

Este paquete requiere que se agreguen muchos otros paquetes a su aplicación, 
y requiere unas versiones particulares que pueden ser diferentes a las que 
su aplicación ya tenga.  Puede ayudarle a determinar esta situación:

    yarn check

Puede que tenga que revisar y limpiar cache:

    yarn cache list

Si requiere versiones más actualizadas de las requeridas por este paquete, 
vea en [CONTRIBUTING.md] como puede actualizar paquetes de los que 
depende este.


