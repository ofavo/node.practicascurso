const fs = require('fs');
const colors = require('colors');
let listarTabla = (base, limite) => {

    return new Promise ((resolve,reject) =>{
        if ( !Number(base) || !Number(limite)){
            reject(`El limite y la base deben ser numeros`);
            return;
        }
        let data = '';
        for(let i=0;i<=limite;i++){
            data += `${i} * ${base} = ${i*base}\n`;
        }
        resolve(data.green);
    })
}

let crearArchivo = (base,limite) => {
    return new Promise( (resolve, reject) =>{

        if( !Number(base)){
            reject(`${base} no es un numero`);
            return;
        }

        let data = '';
        for(let i=0; i<=limite;i++){
        data += `${i} * ${base} = ${i*base}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt `, data, (err) => {
        if (err) 
            reject(err);
        else
        resolve(`tablas/tabla-${base}.txt `);
        });
    });
        
}

module.exports = {
    crearArchivo,
    listarTabla
}

