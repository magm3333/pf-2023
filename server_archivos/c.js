const net = require('net');
const fs = require('fs');

const path = require('path');
const client = net.createConnection({ port: 8080 }, () => {
  console.log('Conectado al servidor');
  client.write('GET_BINARY_FILE');
});

let dataBuffer = '';
const filePath = path.join(__dirname, 'lnx.jpg');
const fileStream = fs.createWriteStream(filePath);
client.on('data', (data) => {
  dataBuffer += data.toString('binary'); // Acumula los datos

  // Busca el indicador de fin de mensaje
  if (dataBuffer.includes('\n--EOM--\n')) {
    const [fileData, remainingData] = dataBuffer.split('\n--EOM--\n');
    dataBuffer = remainingData; // Guarda cualquier dato restante para la siguiente transmisión
    fileStream.write(fileData)
    // Procesar el archivo recibido
    console.log('Archivo recibido:', fileData);

    // Cerrar la conexión
    client.end();
  }
});

client.on('end', () => {
    fileStream.end();
  console.log('Desconectado del servidor');
});

client.on('error', (err) => {
    fileStream.end();
  console.error(`Error: ${err.message}`);
});
