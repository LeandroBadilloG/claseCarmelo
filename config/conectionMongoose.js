const mongoose = require('mongoose')

const uri ='mongodb+srv://leandro:KQIcrM6w59tZjk4d@clusteradsi.enayqlr.mongodb.net/Mascotas?retryWrites=true&w=majority';
          
mongoose.connect(uri, { useNewUrlParser: true });

