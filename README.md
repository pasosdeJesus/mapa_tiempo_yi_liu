Componente react para mostrar datos geolocalizados y con tiempo en un mapa 
y con varias posibilidades de explorarlos interactivamente.

Reusa las fuentes de covid19.health desarrollado por Yi Liu 
y disponible en https://github.com/stevenliuyi/covid19 con licencia
MIT

Está en desarrollo


# 1. Uso desde una aplicación Ruby on Rails

Como se explica en <https://github.com/pasosdeJesus/sip/wiki/2020_08-Formulario-interactivo-con-react-en-una-aplicaci%C3%B3n-que-usa-sip> es conveniente que actualice a la versión más reciente de `webpacker`, que la instale y/o que actualice sus archivos de configuración y que prepare `webpacker` para desarrollar con `react`.  También es recomendable que use la gema `react-rails` y si hace falta que la instale y/o actualice la configuración de `react-rails`.  Tras esto puede añadir las dependencias que este paquete exige: 
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


## 3.1 Utilizando su propia copia

Para empezar a hacer cambios sugerimos que bifurque este repositorio y clone su repositorio bifurcado:
    
    mkdir -p ~/comp/js/
    cd ~/comp/js/
    git clone git@github/miusuario/mapa_tiempo_yi_liu
    cd mapa_tiempo_yi_liu
    yarn upgrade
    yarn install
    
Después revise `package.json` para asegurar que las dependencias de `peer-dependencies` 
no están en `dev-dependencies` y si las hay mueva de `dev-dependencies` (que debe estar más actualizada) 
a `peer-dependencies`. 
Puede revisar consistencia con

    yarn check

Puede que tenga que actualizar manualmente paquete a paquete en unos casos,
por ejemplo con

    yarn upgrade d3
    
### 3.1.1 Probar sus cambios

Para probar las actualizaciones o cambios que haga gener el directorio dist con

    yarn build
    yarn run transpile 
Y pruebe minimamente operación  con

    yarn start

que iniciará una instancia que escucha http en el puerto 2700.  Al revisar con un
navegador deberá ver que empieza a cargar, pero no mucho más por cuanto no hay
un servidor que le responda con la información que requiere.
 
### 3.1.2 Use su paquete modificado localmente desde una aplicación

Es importante que en su copia local de `mapa_tiempo_yi_liu` pueble el directorio `dist` ejecutando:

    yarn build
    yarn run transpile
    
Después si desde el directorio de su aplicación que use este paquete
puede ejecutar
 
    cd ~/comp/miap
    yarn add file:$HOME/comp/js/mapa_tiempo_yi_liu
    
Esto instalará las fuentes completas, pero especialmente el compilado
del directorio `dist`
que quedará en `node_modules/@pasosdejesus/mapa_tiempo_yi_liu/dist/` y 
que debe ser el que use el webpack de su aplicación.

En caso de actualizar le agradecemos nos envíe solicitud de cambios (Pull Request).

### 3.1.3 Use su paquete en github desde una aplicación

Si en lugar de un directorio local quisiera emplear su cuenta en github
tenga en cuenta que `yarn` (al menos hasta la versión 1.22.4) no soporta
el `prepare` de `package.json`  --que se supone si es soportado por `npm`-- y que
indica como construir el paquete cuando se descarga de un sitio sólo 
con fuentes.

Por este motivo deber agregar el directorio `dist`  a su repositorio github.

Una vez en la aplicación indique que usará su versión publicada en github:

    yarn add github:miusuario/mapa_tiempo_yi_liu

Haga cambios y publique en github, puede que al actualizar su repositorio
el cambio no se refleje en la aplicación donde la usa (pues depende de la
copia de `node_modules`, de la copia que queda en el cache `~/.cache/yarn` 
y del condensado sha que queda en `yarn.lock`).  Hemos encontrado útil:

     yarn cache clean @pasosdejesus/mapa_tiempo_yi_liu
     yarn remove clean @pasosdejesus/mapa_tiempo_yi_liu
     yarn add github:miusuario/mapa_tiempo_yi_liu
     


## 3.2 Publicar cambios en registro npm

La publicación requerirá la clave de vtamara@pasosdeJesus.org en el repositorio npm.

Tener en cuenta que el registro npm no permite borrar, ni cambiar una versión ya publicada.

* Hacer los cambios necesarios.
* Actualizar depenencias con `yarn upgrade; yarn install` y revisar con `yarn check`
* Aumentar la versión en `package.json`
* Compilar con `yarn build;  yarn run transpile`
* Probar minimamente operación  con `yarn start`
* Publicar en el registro npm con
    
    yarn publish
