// preguntar.
const { default: mongoose } = require('mongoose')

const conexionMongoose = require('../config/conectionMongoose')


//preguntar o acalarar para que es Schema
const SchemaMascota = new mongoose.Schema({
    id: {
        type:Number,
        min: 0,
        max:1000,
    },
    nombre:{
        type:String,
        required:true,
        default:'Sin nombre'
    },
    raza:{
        type:String,
        required:true
    },
    edad:{
        type:String,
        required:true
    }
});

const mascota = mongoose.model('Mascota', SchemaMascota);

module.exports=mascota;