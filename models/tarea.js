const mongoose = require('mongoose')

const tareaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Por favor ingrese el nombre de la tarea a crear'],
        trim: true,
    },
    completada: {
        type: Boolean,
        default: false
    },
    prioridad: {
        type: String,
        required: true,
        enum: {
            values: ['alta', 'media', 'baja'],
            message: '{VALUE} no es soportado'
        }
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Tarea', tareaSchema)