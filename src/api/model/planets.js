const mongoose = require('mongoose')


const planetSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    clima: {
        type: String,
        required: true
    },
    terreno: {
        type: String,
        required: true
    },
    aparicoesFilme: {
        type: Number,
        required: false,
        default: 0
    }

});

const Planet = mongoose.model('planet', planetSchema);

module.exports = Planet;