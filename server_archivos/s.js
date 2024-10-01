const net = require('net');
const fs = require('fs');

const EOM = '\n--EOM--\n'; // Indicador de fin de mensaje

const server = net.createServer((socket) => {
  console.log('Cliente conectado');
  socket.setEncoding('utf8');

  socket.on('data', (data) => {
    console.log(`Comando recibido: ${data.trim()}`);

    if (data.trim() === 'GET_TEXT') {
      socket.write('Aquí está tu texto de respuesta.' + EOM);
    } else if (data.trim() === 'GET_BINARY_FILE') {
      const fileStream = fs.createReadStream('/home/mariano/Descargas/linux.jpg');
      fileStream.pipe(socket, { end: false });
      fileStream.on('end', () => {
        socket.write(EOM); // Enviar EOM después de transmitir el archivo
      });
    } else {
      socket.write('Comando no reconocido.\n' + EOM);
    }
  });

  socket.on('end', () => {
    console.log('Cliente desconectado');
  });

  socket.on('error', (err) => {
    console.error(`Error: ${err.message}`);
  });
});

server.listen(8080, () => {
  console.log('Servidor TCP escuchando en el puerto 8080');
});
