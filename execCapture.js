const procExterno=require('child_process').spawn;

const ls=procExterno('fswebcam',['-r 640x480','--no-banner','-S 20', '-s brightness=100%', 'pepe.jpg']);

ls.stdout.setEncoding('utf-8');

ls.stdout.on('data', data => {
    console.log(data.toString());
});

ls.on('close', errorLevel => {
    console.log(`Fin del proceso, error level=${errorLevel}`);
})