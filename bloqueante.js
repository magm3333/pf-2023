const fs=require('fs');

const contenido=fs.readFileSync('/etc/hosts');
console.log(contenido.toString());
console.log('Aquí otras instrucciones.....');