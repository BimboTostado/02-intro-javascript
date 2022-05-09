//const saludar = function ( nombre ){
//    return `Hola, ${ nombre }`;
//}

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;

console.log( saludar2('Vegeta') );
console.log( saludar3('Goku') );
console.log( saludar4() );

//tarea
//1. Transformen a una funcion de flecha
//2. Retornar objeto implicito
//3. Pruebas

const getUsuarioActivo = (nombre) => ({ 
    uid:'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Agustin');
console.log( usuarioActivo );