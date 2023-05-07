
const ruta = require ('../controller/mascotas')
const express = require ('express')
const router = express.Router()

router.get('/mascotas',ruta.listaMascota);
router.get('/formulario',ruta.formNuevaMascota);
router.post('/registrar',ruta.nuevaMascota);

module.exports=router