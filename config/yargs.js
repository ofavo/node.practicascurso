const opts = {
    base: {
        demand: true,
        alias: 'b'
      },
      limite:{
        alias:'l',
        default: 9
      }
}

const argv = require('yargs')
      .command('listar','Imprime la tabla de multiplicar',opts)
      .command('crear', 'Crea un Archivo txt con la la tabla',opts)
      .help()
      .argv;

module.exports = {
    argv
}