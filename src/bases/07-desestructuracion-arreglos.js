//desestructuracion arreglos

const personajes = ['Goku','Vegeta','Trunks'];

console.log( personajes[0] );
console.log( personajes[1] );
console.log( personajes[2] );

const [ p1 ] = personajes;

console.log(p1);

const retornaArreglo = () =>{
    return ['ABC',123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);

//tarea
//1. el primer valor del arr se llamara nombre
//2. el segundo se llamara setNombre
const arreglo = ( valor ) => {
    return [ valor, () =>{ console.log('Hola Mundo') } ];
}

const [ nombre, setNombre ] = arreglo('Goku');
console.log(nombre);
setNombre();
