'use strict'

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const cryRoutes = require('./routes/cryRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/cry', cryRoutes);

app.listen(config.port, () => {console.log(`App listening on ${config.hostUrl}`)});