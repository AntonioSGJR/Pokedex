'use strict'

const Cry = require('../models/cryModel.json');



async function getAllCries(request, response, next)
{
  try
  {

    response.send(Cry.cries);
  }
  catch(error)
  {
    response.status(400).send(error.message);
  }
}

async function getCryById(request, response, next)
{
  try
  {
    const id = request.params.id;

    response.send(Cry.cries[parseInt(id) - 1]);

  }
  catch(error)
  {
    response.status(400).send(error.message);
  }
}


module.exports = 
{
  getAllCries,
  getCryById
}