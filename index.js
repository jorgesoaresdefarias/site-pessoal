const express = require('express');
const app = express();
const routes = require('./routes/routes');
const port = 550;

app.set('view engine', 'ejs');


app.use(express.static('./public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', routes.routes);

app.listen(+port, () => console.log(`Server is running on port: ${port}!`));
