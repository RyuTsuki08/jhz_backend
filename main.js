// main del proyecto, basicamente donde se llama a todas las configuraciones, modulos, middlewares, servicios, etc...

const Express = require('express');
const dotenv = require('dotenv').config();
const AWS = require('aws-sdk');
const morgan = require('morgan');
const mongoose = require('mongoose');
const admin = require("./admin/adminRoutes");
const batch = require("./Batch/batchRoutes");
const app = Express();

mongoose.connect(process.env.MONGO_ATLAS_URL)
  .then((e) => console.log('Connected to database'))
  .catch((e) => console.log(e));

// Setting ports and another things...

app.set('port', process.env.PORT || 8000);

// Middlewares

app.use(morgan('dev'));
app.use(Express.json());

app.use("/", admin);
app.use("/", batch);

app.listen(app.get('port'), () =>{
     console.log('Starting server in port: ', app.get('port'))
});