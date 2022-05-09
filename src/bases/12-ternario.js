const activo = true;

//sin operador condicionador ternario
//let mensaje = '';

//if ( activo ) {
//    mensaje = 'Activo';
//} else {
//    mensaje = 'Inactivo';
//}

//con operador condicionador ternario
//const mensaje = ( activo ) ? 'Activo' : 'Inactivo';


//si quiero solo ejecutar opciones por true

const mensaje = !activo && 'Activo';

console.log( mensaje );