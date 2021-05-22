
# 1. Desarrollo de este paquete

Para la distribución como paquete npm, utiliza webpack, siguiendo 
este ejemplo:
<https://github.com/vtamara/react_ejemplo_stiff>


## 1.1 Utilizando su propia copia

Para empezar a hacer cambios sugerimos que bifurque este repositorio, clone su repositorio bifurcado y 
compile a partir de sus fuentes lo que irá en `dist`:
    
    mkdir -p ~/comp/js/
    cd ~/comp/js/
    git clone git@github/miusuario/mapa_tiempo_yi_liu
    cd mapa_tiempo_yi_liu
    yarn upgrade
    yarn install

El último paso debe ejecutar `yarn build` y `yarn run transpile`.


### 1.1.1 Probar sus cambios

Para probar las actualizaciones o cambios que haga genere el directorio 
`dist` con

    yarn build
    yarn run transpile 

Y pruebe minimamente la operación con

    yarn start

que iniciará una instancia que escucha http en el puerto 2700.  
Al revisar con un navegador deberá ver que empieza a cargar, pero 
no mucho más por cuanto no hay un servidor que le responda con la 
información que requiere.

### 1.1.2 Use su paquete modificado localmente desde una aplicación

Es importante que en su copia local de `mapa_tiempo_yi_liu` pueble el 
directorio `dist` ejecutando:

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

Hemos notado que para evitar estas duplicaciones, también es recomendable que 
desde su aplicación antes de volver a compilar con webpacker elimine el 
directorio `public/packs`:

     rm -rf public/packs/*
     bin/rails webpacker:compile


### 1.1.3 Use su paquete en github desde una aplicación

Para evitar tener que borrar `node_modules/@pasosdejesus/mapa_tiempo_yi_liu/node_modules`
cada vez que haga cambios en su copia local, puede optar por subir
los cambios  a su repositorio github y referenciar el mismo desde
su archivo `package.json`.

Con ese plan, tenga en cuenta que `yarn` (al menos hasta la versión 1.22.4) 
no soporta el `prepare` de `package.json`  --que se supone si es soportado 
por `npm`-- y que indica como construir el paquete cuando se descarga 
de un sitio sólo con fuentes.

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

### 1.1.4 Actualizar dependencias

Revise `package.json` para asegurar la distribución correcta de los paquetes 
de los que depende este, entre las 3 secciones de dependencias:
* de desarrollo `devDependencies`,
* requeridas en tiempo de ejecución en la aplicación que use este paquete 
  `peerDependencies`
* y requeridas durante desarrollo y ejecución de la aplicación que use esta 
  `dependencies`
De esa distribución depende el tamaño del compilado en `dist` y 
los paquetes que un aplicación que use esta vayan a requerir.
Sería ideal que `dependencies` estuviera en blanco, pues las versiones 
que allí se pongan serán precisamente las que deben ponerse en la aplicación 
que usará este paquete. Sabrá que una dependencia debe estar en esta 
sección si al ejecutar yarn install en este paquete obtiene
un error del estilo:

    ERROR in ./src/components/RawTable.js
    Module not found: Error: Can't resolve 'react-table' in '/ruta/comp/js/mapa_tiempo_yi_liu-pasosdeJesus/src/components'  

Revise consistencia con

    yarn check

Puede que tenga que actualizar manualmente paquete a paquete en unos casos,
por ejemplo con

    yarn upgrade d3

En caso de actualizar le agradecemos nos envíe solicitud de cambios 
(Pull Request).


## 1.2 Publicar cambios en registro npm

La publicación requerirá la clave de vtamara@pasosdeJesus.org en el repositorio npm.

Tener en cuenta que el registro npm no permite borrar, ni cambiar una versión ya publicada.

* Hacer los cambios necesarios.
* Actualizar dependencias con `yarn upgrade; yarn install` y revisar con 
  `yarn check`
* Aumentar la versión en `package.json`
* Compilar con `yarn build;  yarn run transpile`
* Probar minimamente operación  con `yarn start`
* Publicar en el registro npm con `yarn publish`
