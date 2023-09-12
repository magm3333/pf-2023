import net from 'net';

const puerto=process.env.PUERTO || 7777;

const cliName=(socket)=>{
    return `${socket.remoteAddress}:${socket.remotePort}`;
};

const serverTCP=net.createServer( socketCliente => {
    socketCliente.write("Hola cliente!\n");
    console.log(`Se conectó el cliente ${cliName(socketCliente)}`);

    socketCliente.on('data', datos=>{
        console.log(`${cliName(socketCliente)}: "${datos}"`);
        socketCliente.write("Echo: "+datos);
    });
});

serverTCP.listen(puerto);

console.log(`Escuchando en puerto ${puerto}`);


/*
while(true) {
  Socket soc=ServerSocket.accept();
  //atención al cliente
  Atecion ateciones=new Atencion(soc);
  atencion.start();  
}
*/