var reservaModel = require('../models/reservaModel');


exports.reserva_save = function(req, res){
    let reserva = req.body;
    reservaModel.create({
        idreserva: reserva.id, 
        nombres: reserva.nombres, 
        apellidos: reserva.apellidos, 
        email: reserva.email, 
        fechareserva: reserva.fechareserva, 
        horareserva: reserva.horareserva, 
        idservicio: reserva.idservicio, 
        estado: reserva.estado
    })
    .then(data => res.json(data))
    .catch( err => res.status(500).send(err))
}