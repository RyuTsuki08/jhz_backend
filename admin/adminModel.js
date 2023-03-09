const mongoose = require('mongoose');

// Creacion del esquema y el modelo en mongoose para se guardado en la base de datos no-sql MondoDB-Atlas...

const { Schema } = mongoose;

const AdminSchema = new Schema({
    email : String,
    password : String,
    token: String
});

module.exports = mongoose.model('Admin', AdminSchema, "admin");