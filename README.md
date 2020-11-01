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

Por ahora la apliación incluye de forma estática los datos necesarios unicamente
para la visulación del mapa de Colombia y sus departamentos. 

  
Si al ejecutar no se presenta el mapa, y en el inspector ve un problema del estilo:

```react-table.production.min.js:161 Uncaught TypeError: Cannot read property 'useLayoutEffect' of undefined```

Se trata del problema con react-table descrito en  https://github.com/tannerlinsley/react-table/discussions/2048
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
vea en la siguiente sección como puede actualizar paquetes de los que depende este.


# 3. Desarrollo de este paquete

Para la distribución como paquete npm, utiliza webpack, siguiendo 
este ejemplo:
<https://github.com/vtamara/react_ejemplo_stiff>


## 3.1 Utilizando su propia copia

Para empezar a hacer cambios sugerimos que bifurque este repositorio, clone su repositorio bifurcado y 
compile a partir de sus fuentes lo que irá en `dist`:
    
    mkdir -p ~/comp/js/
    cd ~/comp/js/
    git clone git@github/miusuario/mapa_tiempo_yi_liu
    cd mapa_tiempo_yi_liu
    yarn upgrade
    yarn install

El último paso debe ejecutar `yarn build` y `yarn run transpile`.

    
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
    
Después desde el directorio de la aplicación que use este paquete
puede ejecutar
 
    cd ~/comp/miap
    yarn add file:$HOME/comp/js/mapa_tiempo_yi_liu
    
Esto instalará las fuentes completas, pero especialmente el compilado
del directorio `dist`
que quedará en `node_modules/@pasosdejesus/mapa_tiempo_yi_liu/dist/` y 
que debe ser el que use el webpack de su aplicación.

Sin embargo como en `node_modules` queda una copia completa de sus fuentes 
locales de `mapa_tiempo_yi_liu`, también quedará copia del directorio 
`node_modules/@pasosdejesus/mapa_tiempo_yi_liu/node_modules` que debe
borrar para evitar un excesivo tiempo en la ejecución de webpacker:compile 
(que dará más de 40.000 dependencias en lugar de cerca de 20.000) y al ejecutar
verá el error 321 de React (Invalid hook call) por tener duplicado react.   
Por eso debe ejecutar:

    rm -rf node_modules/@pasosdejesus/mapa_tiempo_yi_liu/node_modules

Hemos notado que para evitar estas duplicacions, también es recomendable que desde su aplicación
antes de volver a compilar con webpacker elimine el directorio `public/packs`:

     rm -rf public/packs/*
     bin/rails webpacker:compile
     

### 3.1.3 Use su paquete en github desde una aplicación

Para evitar tener que borrar node_modules/@pasosdejesus/mapa_tiempo_yi_liu/node_modules
cada vez que haga cambios en su copia local, puede optar por subir
los cambios  a su repositorio github y referenciar el mismo desde
su archivo package.json.  

Con ese plan, tenga en cuenta que `yarn` (al menos hasta la versión 1.22.4) no soporta
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
     yarn remove @pasosdejesus/mapa_tiempo_yi_liu
     yarn add github:miusuario/mapa_tiempo_yi_liu

### 3.1.4 Actualizar dependencias

Revise `package.json` para asegurar la distribución correcta de los paquetes de los que
depende este, entre las 3 secciones de dependencias:
* de desarrollo `peer-dependencies`,
* requeridas en tiempo de ejecución en la aplicación que use este paquete `peer-dependencies`
* y requeridas durante desarrollo y ejecución de la aplicación que use esta `dependencies`
De esa distribución depende el tamaño del compilado en `dist` y 
los paquetes que un aplicación que use esta vayan a requerir.
Sería ideal que `dependencies` estuviera en blanco, pues las versiones que allí se
pongan serán precisamente las que deben ponerse en la aplicación que usará este paquete. Sabrá que una
dependencia debe estar en esta sección si al ejecutar yarn install en este paquete obtiene
un error del estilo:
    
    ERROR in ./src/components/RawTable.js
    Module not found: Error: Can't resolve 'react-table' in '/ruta/comp/js/mapa_tiempo_yi_liu-pasosdeJesus/src/components'  

Revise consistencia con

    yarn check

Puede que tenga que actualizar manualmente paquete a paquete en unos casos,
por ejemplo con

    yarn upgrade d3

En caso de actualizar le agradecemos nos envíe solicitud de cambios (Pull Request).


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
