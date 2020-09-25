Componente react para mostrar datos geolocalizados y con tiempo en un mapa 
y con varias posibilidades de explorarlos interactivamente.

Reusa las fuentes de covid19.health desarrollado por Yi Liu 
y disponible en https://github.com/stevenliuyi/covid19 con licencia
MIT

Está en desarrollo


# 1. Uso desde una aplicación Ruby on Rails

Como se explica en <https://github.com/pasosdeJesus/sip/wiki/2020_08-Formulario-interactivo-con-react-en-una-aplicaci%C3%B3n-que-usa-sip> es conveniente que actualice a la versión más reciente de `webpacker`, que la instale y/o que actualice sus archivos de configuración y prepare `webpacker` para desarrollar con react.  También es recomendable que use la gema react-rails y si hace falta que la instale y/o actualice sus archivos de configuración.  Tras esto puede añadir las dependencias que este paquete exige: 
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

Este paquete requiere que se agreguen muchos otros paquetes a su aplicación, 
y requiere unas versiones particulares que pueden ser diferentes a las que 
su aplicación ya tenga.  Puede ayudarle a determinar esta situación:

    yarn check

Puede que tenga que revisar y limpiar cache:
    
    yarn cache list

Si requiere versiones más actualizadas de las requeridas por este paquete, 
vea en la siguiente sección como puede actualizar paquetes de los que depende este.


# 3. Desarrollo de este paquete

Para la distribución como paquete npm, utiliza webpack, siguiendo 
este ejemplo:
<https://github.com/vtamara/react_ejemplo_stiff>

## 3.1 Actualizar dependencias y usar su copia 

Para empezar a hacer cambios sugerimos que clone

    git clone git@github/miusuario/mapa_tiempo_yi_liu
    cd mapa_tiempo_yi_liu
    yarn upgrade
    yarn install
    
Después revise `package.json` para asegurar que las dependencias de `peer-dependencies` 
no están en `dev-dependencies` y si las hay mueva la de `dev-dependencies` (que debe estar más actualizada) 
a `peer-dependencies`. 
Puede revisar consistencia con

    yarn check

Puede que tenga que actualizar manualmente paquete a paquete en unos casos,
por ejemplo con

    yarn upgrade d3
    
Y finalmente actualizar

    git commit -m "Actualiza" -a
    git push origin master
  
Y use su copia clonada en lugar de la de repositorio en pasosdeJesus, modificando su archivo `package.json` para cambiar

    @pasosdejesus/mapa_tiempo_yi_liu": "0.1.3",

por

    @pasosdejesus/mapa_tiempo_yi_liu": "github:vtamara/mapa_tiempo_yi_liu",


Puede que al actualizar su repositorio el cambio no se refleje en la 
aplicación donde la usa (pues depende de la copia de @node_modules,
de la copia que queda en el cache ~/.cache/yarn y del condensado sha
que queda en yarn.lock).  Hemos encontrado útil:

     yarn cache clean @pasosdejesus/mapa_tiempo_yi_liu
     yarn remove clean @pasosdejesus/mapa_tiempo_yi_liu
     yarn add github:miusuario/mapa_tiempo_yi_liu
     
En caso de actualizar le agradecemos nos envíe solicitud de cambios (Pull Request).



# 3.2. Demo muy precario

    yarn start

Iniciará una instancia que escucha http en el puerto 2700.  Al revisar con un
navegador deberá ver que empieza a cargar, pero no mucho más por cuanto no hay
un servidor que le responda con la información que requiere.


# 3.3. Publicar en registro npm

Recordar aumentar la versión en `package.json` y ejecutar
  
    yarn publish
