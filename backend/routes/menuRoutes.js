const express = require('express');
const router = express.Router();

const menu = require('../controllers/menuController');

router.get('/', menu.getMenu );
router.post('/', menu.createMenu);
router.put('/:id', menu.editMenu);

module.exports = router;