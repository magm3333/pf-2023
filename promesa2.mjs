import fetch from 'node-fetch'; 


async function fetchUserData(cantidad=1) {
    const respuesta= await fetch(`https://randomuser.me/api/?results=${cantidad}`);
    const datosJson= await respuesta.json();
    return datosJson;
}

console.log("Pidiendo datos...");

const resultado= await fetchUserData(2);
console.log("Resultado ");
console.log(resultado);

console.log("Fin del código, esperando 2 segundos...")