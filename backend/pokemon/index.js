'use strict'

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const pokemonRoutes = require('./routes/pokemonRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/pokemon', pokemonRoutes);

app.listen(config.port, () => {console.log(`App listening at ${config.hostUrl}`)});