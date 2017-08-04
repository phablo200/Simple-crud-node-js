/** CRIADO POR PHABLO VILAS BOAS */

const express    = require('express');
const vueExpress = require('express-vue');
const app        = express();
const crudController = require('./app/controllers/CrudController');
const bodyParser     = require('body-parser');

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/assets', express.static('./public/assets'));

var Connect = require('./app/support/Connection');
var con = new Connect();

crudController(app, con);
app.listen(4000);
console.log('Listening in the port 4000');




