const express = require('express');
const { getAllCries, getCryById } = require('../controllers/cryController');

const router = express.Router();

router.get('/', getAllCries);
router.get('/:id', getCryById);

module.exports = router;