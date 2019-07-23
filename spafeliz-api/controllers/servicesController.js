var serviceModel = require('../models/serviceModel');


exports.services_all_get = function(req, res){
    serviceModel.findAll({
        attribute: ['id', 'name', 'happy', 'image']
    })
    .then(data => res.json(data))
    .catch( err => res.status(500).send(err))
}

exports.services_detail_get = function(req, res){
    res.send('Devolver un servicios del SPA con ID ' + req.params.id);
}

