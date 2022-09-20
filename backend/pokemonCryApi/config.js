'use strict'

const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
  PORT,
  HOST,
  HOST_URL

} = process.env;

assert(PORT, "PORT is required");
assert(HOST, "HOST is required");

module.exports = 
{
  port: PORT,
  host: HOST,
  hostUrl: HOST_URL
}