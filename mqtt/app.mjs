import mqtt from 'mqtt';


//mosquitto_sub -t test -h magm.mooo.com -u ubuntu -P ubuntu
//mosquitto_pub -t test -m 'Hola mundo!'  -h magm.mooo.com -u ubuntu -P ubuntu

const host = process.env.HOST || 'magm.mooo.com';
const port = process.env.PORT || '1883';

const cred = {
    username : process.env.MQTTUSERNAME || 'ubuntu',
    password : process.env.MQTTPASSWORD || 'ubuntu'
};

const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;

const connectUrl = `mqtt://${host}:${port}`;

const clientConfig={
    ...cred,
    clientId:clientId,
    clean:true,
    connectTimeout: 4000,
    reconnectPeriod: 1000
};

console.log("Conectando....")
const client=mqtt.connect(connectUrl, clientConfig);

const topic = 'test';

// tópico = 'a/b/c'
// # => reemplaza desde donde se encuentra en adelante
// + => reemplaza exactamente un nodo del path
// a/#
// a/+/c => a/hola/c

client.on('connect', () => {
    console.log(`Conectado a: ${connectUrl}`);

    client.subscribe([topic],()=>{
        console.log(`Suscripto a: '${topic}'`);
    });
    
});


client.on('message', (topic, payload)=>{
    console.log(`Mensaje recibido: ${payload.toString()} - ${topic}`)
});

setInterval(()=>{
    client.publish(topic, `Mensaje emitido en ${new Date().toISOString()}`, {qos: 0, retain: false}, (error) => {
        if (error) {
            console.log(error);
        }
    });
}, 2000);
