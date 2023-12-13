const Jimp = require('jimp') ;

const resize=256;
const x=39;
const y=43;

async function overlay(qr) { 
   let imageQR = await Jimp.read(qr);
   imageQR = imageQR.resize(resize,resize); 
   const imageFondo = await Jimp.read('./fondo.jpg');
   imageQR = await imageQR
   imageFondo.composite(imageQR, x, y, {
      mode: Jimp.BLEND_SOURCE_OVER,
      opacityDest: 1,
      opacitySource: 1
   })
   await imageFondo.writeAsync('./new.png');
}

overlay('./qr.png');