Componente react para mostrar datos geolocalizados y con tiempo en un mapa 
y con varias posibilidades de explorar los datos interactivamente.

Reusa las fuentes de covid19.health desarrollado por Yi Liu 
y disponible en https://github.com/stevenliuyi/covid19 con licencia
MIT

Está en desarrollo

# 1. Ejemplo

  yarn start


# 2. Usar desde una aplicación.

Por ahora la aplicación que lo incluya debe proveer una API que
responda a peticiones GET así:

`/maps/WORLD` que retorne WORLD.json como en <https://github.com/pasosdeJesus/sivel2_gen/raw/usa_paq_mapa_tiempo/test/dummy/public/maps/WORLD.json>
`/maps/gadm36_COL_1` que retorne gadm36_COL_1.json como en <https://github.com/pasosdeJesus/sivel2_gen/raw/usa_paq_mapa_tiempo/test/dummy/public/maps/gadm36_COL_1.json>
`/casos/infomapa/datoscovid` que retorne all.json como en <https://github.com/pasosdeJesus/sivel2_gen/raw/usa_paq_mapa_tiempo/test/dummy/public/data/all.json>


# 3. Publicar
  
  yarn publish
