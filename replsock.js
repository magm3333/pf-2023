let repl=require('repl');
let net=require('net');

const server=net.createServer(
    (socket)=>{
        repl.start('via socket>',socket);
    }
);
console.log('Escuchando en 1234');
server.listen(1234);

