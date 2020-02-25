"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./classes/server"));
var usuario_1 = __importDefault(require("./routes/usuario"));
var mongoose_1 = __importDefault(require("mongoose"));
var server = new server_1.default();
//Rutas de mi App
server.app.use('/user', usuario_1.default);
//Conectar DB
mongoose_1.default.connect('mongodb://localhost:/27017/fotosgram');
//Levantar express
server.start(function () {
    console.log("Servidor corriendo en puerto " + server.port);
});
