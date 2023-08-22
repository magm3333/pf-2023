function fetchUserData() {
    return new Promise( (resolve, reject)=>{
        setTimeout(()=>{
            const datos = {"username":"Magm"};
            if(Math.random()>.7) {
                resolve(datos); 
            } else {
                reject("Error!!!");
            }
        },2000);
    }  )
}

fetchUserData()
    .then( datos=>{ console.log(datos); })
    .catch( error => { console.error(error)});

console.log("Fin del código, esperando 2 segundos...")