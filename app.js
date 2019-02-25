const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo} = require('./multipicar/multiplicar');
const { listarTabla } = require('./multipicar/multiplicar');
let comando = argv._[0]
switch(comando){
  case 'listar':
  listarTabla(argv.base,argv.limite)
    .then(data => console.log(`Tabla listada con exito: \n${data}`))
    .catch(e => console.log(e));
  break;
  case 'crear':
  crearArchivo(argv.base,argv.limite)
    .then(archivo => console.log(`Archivo creado: ${archivo.blue}`))
    .catch(e => console.log(e));
  break;
  default:
      console.log(`${comando}: no es un comando valido `);
  break;

}
