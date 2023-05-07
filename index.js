const express = require('express');
const app = express();
const path=require('path');
const morgan=require('morgan');
const dotenv =require('dotenv');
dotenv.config();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extends:false}));
const PORT= process.env.PORT;





const miRuoter = require('./routes/enrrutamiento');
app.use('/api/v1/',miRuoter);








app.get('/login',(req, res)=>{
    res.render('login');
})

app.post('/login', async(req, res)=>{
    const correo= 'leandro@gmail.com';
    const contraseña = '12345';
    const usuario ={

        usuario: req.body.correo,
        contraseña: req.body.contraseña,
    }
    if(usuario.usuario + usuario.contraseña == correo+contraseña){
        let listaMascotas = await mascota.find();

        res.redirect('mascotas')
    }else {
        res.send('error');
    }

})


app.get('/eliminar/:id',async(req, res)=>{
    let id= req.params.idMacota
    console.log(id)
    await mascota.findByIdAndDelete({"_id":id})
    res.redirect('mascotas')
})


app.listen(PORT, ()=>{
    console.log('estoy en linea desde el puerto: '+ PORT);
});

