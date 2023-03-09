const mongoose = require('mongoose');

const { Schema } = mongoose;

const batchSchema = new Schema({
    nroOfLote : {type: Number, index: true},
    status: {type: String, required: true},
    images: {type: Array, required: true},
    dateInitial: {
        type: Date, 
        default: Date.now()
    },
    amount: {type: Number, required: true},
    serial: {type: String, required: true}, 
    delivered: {type: Date, required: true},
    actaDeSalida: {type: String, required: true},
    deliveredTo: {type: String, required: true},
}); 

const Batch = mongoose.model("Batch", batchSchema, "batch");

module.exports = Batch;