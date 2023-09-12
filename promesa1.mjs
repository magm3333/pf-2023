//const fetch=require('node-fetch');
import fetch from 'node-fetch'; 


function fetchUserData(cantidad=1) {
    return fetch(`https://randomuser.me/api/?results=${cantidad}`)
        .then(respuesta => respuesta.json())
        .then( datosJson => {return datosJson});
}
/*
fetchUserData(1)
    .then( datos => 
        {
            console.log("Resultado ");
            console.log(datos);

        }
    )
    .catch( error => { console.error(error)});
*/

console.log("Pidiendo datos...");

const resultado=await fetchUserData(1);
console.log("Resultado ");
console.log(resultado);

console.log("Fin del código")