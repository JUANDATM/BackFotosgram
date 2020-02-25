import { Schema } from 'mongoose';


const usuarioSchema = new Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre es necesario']
    },
    avatar:{
        type: String,
        default: 'av-1.png'
    }
});