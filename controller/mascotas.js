const mascota = require('../models/mascota');


exports.listaMascota = async (req, res) => {
    let listaMascotas = await mascota.find();
    res.render('listaMascotas', {
        "mascota": listaMascotas,
    })
};

exports.formNuevaMascota=(req,res)=>{
    res.render('registrar')
};



exports.nuevaMascota = async (req, res) => {
    const nuevaMascota = new mascota({
        id: req.body.idMacota,
        nombre: req.body.nombreMacota,
        raza: req.body.razaMacota,
        edad: req.body.edadMacota,
    });
    nuevaMascota.save();
    
    res.redirect('mascotas')
};

