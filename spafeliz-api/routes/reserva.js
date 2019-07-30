var express = require('express');
var router = express.Router();

var reserva_controller = require('../controllers/reservaController')

/* save reserva. */
router.post('/', reserva_controller.reserva_save);

module.exports = router;
