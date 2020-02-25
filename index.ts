import Server from './classes/server';
import userRoutes from './routes/usuario';
import mongoose from 'mongoose';
 
const server = new Server();


//Rutas de mi App
server.app.use('/user',userRoutes);

//Conectar DB
mongoose.connect('mongodb://localhost:/27017/fotosgram');

//Levantar express
server.start( () => {
    console.log(`Servidor corriendo en puerto ${ server.port }`);
});

