'use strict'

const express = require('express');
const httpProxy = require('express-http-proxy');
const logger = require('morgan');
const helmet = require('helmet');
const config = require('./config');

const pokemonService = httpProxy(config.pokemonApiUrl);
const cryService = httpProxy(config.cryApiUrl);

const app = express();

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());

app.get('/', (request, response, next) => {
  response.send("Api gateway here!!");
});

app.get('/pokemon', (request, response, next) => {
  pokemonService(request, response, next);
});

app.get('/pokemon/:id', (request, response, next) => {
  pokemonService(request, response, next);
});

app.get('/cry', (request, response, next) => {
  cryService(request, response, next);
});

app.get('/cry/:id', (request, response, next) => {
  cryService(request, response, next);
});

app.listen(config.port, () => {console.log(`App listening at ${config.hostUrl}`)});
