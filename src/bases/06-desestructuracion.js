//Desestructuracion
//Asignacion Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'vengador'
}

//surge a partir de no querer hacer esto
console.log( persona.nombre );
console.log( persona.edad );
console.log( persona.clave );

//1re ejemplo de desestructuracion
const { edad, clave, nombre } = persona;
//logrando obtener
console.log( nombre );
console.log( clave );
console.log( edad );

//Desestructuracion en argumento aplicanda a una funcion
const ellanoteama = ( {nombre, edad, rango = 'millonario'} ) => {
    //console.log( nombre,edad,rango );
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 123456789,
            lng: 987654321
        }
    }
}
//Asi
//const { nombreClave, anios, latlng: {lat, lng } } = useContext( persona );

//o
const { nombreClave, anios, latlng } = ellanoteama( persona );
const { lat, lng } = latlng
console.log(nombreClave,anios, lat, lng)