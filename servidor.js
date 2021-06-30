const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const apl = express();
const configuracion = require('./webpack.config.js');
const compilador = webpack(configuracion);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
apl.use(
  webpackDevMiddleware(compilador, {
    publicPath: configuracion.output.publicPath,
  })
);

// Serve the files on port 2600
apl.listen(2600, function () {
  console.log('Example apl listening on port 2600!\n');
});
