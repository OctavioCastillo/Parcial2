const mongoose = require('mongoose')

const dataSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, //es tipo id de un objeto
        required: true,
        ref:'User' //busca el object id en la coleccion user
    },
    nombre: {
        type: String,
        required: [true, "Por favor ingresa nombre"]
    },
    apellido: {
        type: String,
        required : [true, "Por favor ingresa apellido"]
    },
    empresa: {
        type: String,
        required : [true, "Por favor ingresa empresa"]
    },
    correo: {
        type: String,
        required : [true, "Por favor ingresa email"]
    },
    info: {
        type: String,
        required : [true, "Por favor ingresa información extra"]
    }
}, {
    timestamps: true // mongo crea 2 campos, para la fecha de creación y de update
})

module.exports = mongoose.model('Dato', dataSchema) 