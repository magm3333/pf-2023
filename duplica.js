const fs=require('fs');

// TP02

// 1) Empaquetar la funcionalidad en un módulo
// 2) recibir origen y destino como parámetros
// 3) Controlar sintáxis
// 4) Controlar origen, que sea archivo y que se pueda leer
// 5) Si el destino existe y e un  archivo, dar error, salvo que se 
//    reciba un 3er parámetro 'w '(opcional) que indique el overwrite

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