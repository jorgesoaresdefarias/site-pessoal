const express = require('express');
const app = express();
const routes = require('./routes/routes');
const port = 550;
const config = require('./config');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('./public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', routes.routes);

app.listen(process.env.PORT || 550, () => {
    console.log('Servidor Inicializado com Sucesso!');
});