import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';


const usuarioSchema = new Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre es necesario']
    },
    avatar:{
        type: String,
        default: 'av-1.png'
    },
    email: {
        type: String,
        required: [true, 'El correo es necesario'],
        unique: true

    },
    password:{
        type:String,
        required: [true,'la Contraseña es necesaria']
    }
});


usuarioSchema.method('compararPassword', function(password:string =''):boolean{
    if (bcrypt.compareSync(password, this.password)) {
    return true;
    }else{
        return false;
    }
})

interface IUduario extends Document{
    nombre: string;
    email: string;
    password: string;
    avatar: string;

    compararPassword(password: string): boolean;
}

export const Usuario = model<IUduario>('Usuario',usuarioSchema);