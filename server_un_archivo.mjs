import net from 'net';
import fs from 'fs';

net.bytesWritten=300000;
net.writableLength=30000;



const puerto=process.env.PUERTO || 5555;

const cliName=(socket)=>{
    return `${socket.remoteAddress}:${socket.remotePort}`;
};

const serverTCP=net.createServer( socketCliente => {
   // socketCliente.write("Hola cliente!\n");
    console.log(`Se conectó el cliente ${cliName(socketCliente)}`);
    socketCliente.on('end',()=>{
        console.log(`${cliName(socketCliente)}: desconectado`);
    });
    socketCliente.on('data', datos=>{
        console.log(`${cliName(socketCliente)}: "${datos}"`);
        if(datos.toString().startsWith('get file')) {
            const nombreArchivo='/home/mariano/Descargas/linux.jpg';
            console.log(`Enviando ${nombreArchivo}`);
            fs.readFile(nombreArchivo, (err,data)=>{
                if(!err) {
                    socketCliente.write(data);
                    socketCliente.end();
                } else {
                    console.log(`Error: ${err}`)
                }
            })
        } else {
            socketCliente.write('Commandos soportados:\nget file\n');
        }
    });
});


serverTCP.listen(puerto);
console.log(`Escuchando en puerto ${puerto}`);