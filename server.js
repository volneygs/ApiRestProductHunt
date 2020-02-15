const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');


//iniciando app
const app = express();
app.use(express.json());
app.use(cors());


//iniciando db
mongoose.connect(
    'mongodb+srv://volneygs:volneygs@cluster0-efv5g.mongodb.net/test?retryWrites=true&w=majority',
     {useNewUrlParser: true, useUnifiedTopology: true}
);

requireDir('./src/models');     

//rotas
app.use('/api', require('./src/routes'));

app.listen(8080);

