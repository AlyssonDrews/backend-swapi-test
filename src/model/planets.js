import mongoose from 'mongoose';

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

const planet = mongoose.model('planet', planetSchema);

module.exports = planet;