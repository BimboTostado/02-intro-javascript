const nombre = 'Agustin';
const apellido = 'Garcia';
//concatenacion intuitiva que uno pensaria a realizar
//const nombreCompleto = nombre + ' ' + apellido;

//concatenacion con backtick backtick
//se utiliza codigo JS dentro de las {}
const nombreCompleto = `${ nombre } ${ apellido }`

function getNombreCompleto(nombre){
    return 'Saludos ' + nombre;
}

console.log(`Mi nombre completo es: ${ getNombreCompleto(nombreCompleto)}`);