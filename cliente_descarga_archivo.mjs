import net from 'net';
import fs from 'fs';

net.bytesWritten=300000;
net.writableLength=30000;

// Recibir el puerto como parámetro
// Soportar dos comandos:
// list [path]: lista los archivos y carpetas del [path] en el server 
//    y los envía al cliente 
// get [path]: obtiene el archivo desde el [path] remoto

const puerto=process.env.PUERTO_SERVER || 6666;


const cliente=net.connect({port: puerto, address:'localhost'},()=>{
    console.log('Conectado!');
    cliente.write('get file');
});

const partes=[];

cliente.on('data',(parte)=>{
    partes.push(parte);
});

cliente.on('end',()=>{
    const archivoDestino='/home/mariano/Descargas/linux_copia.jpg';
    const contenido=Buffer.concat(partes);
    fs.writeFile(archivoDestino,contenido, err => {
        if(!err) {
            console.log(`Se almacenó correctamente el archivo ${archivoDestino}`);
        } else {
            console.log(`Error: ${err}`);
        }
    })
});

