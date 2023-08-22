const EventEmitter=require('events').EventEmitter;

let logger=new EventEmitter();

logger.on('trace', msg=>{
    console.log(`Trace ${new Date().toISOString()}: ${msg}`)
});

logger.on('debug', msg=>{
    console.log(`Debug ${new Date().toISOString()}: ${msg}`)
});

logger.on('error', msg=>{
    console.error(`Error ${new Date().toISOString()}: ${msg}`)
});

logger.emit('debug',new Date());

logger.emit('trace',JSON.stringify({a:1, b:"texto", c:[1,2], d:true}))

logger.emit('error','Este es un error!');
