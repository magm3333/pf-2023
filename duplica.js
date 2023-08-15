const fs=require('fs');

const pathOrigen='/etc/hosts';
const pathDestino='/home/mariano/borrar/copia_hosts';
let origen=fs.createReadStream(pathOrigen);
let destino=fs.createWriteStream(pathDestino);
origen.pipe(destino);

/*
origen ==========> (proceso)  --+
                                |               
destino <========= (proceso)  --+
*/