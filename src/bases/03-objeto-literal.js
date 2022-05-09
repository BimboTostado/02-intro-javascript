const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: '55321321',
        lat: 14.3223,
        lng: 34.9233321
    }
}

console.table( persona );

//aca estoy diciendo que persona2 tiene la misma referencia que persona
//si hago alguna asignacion en persona2 se vere reflajado en persona
const persona2 = persona;
persona2.nombre = 'Peter';
console.table(persona2)

console.table(persona);

//Si quiero  que persona3 sea un objeto con los mismo valores que persona
//Utilizo {...objetoName}

const persona3 = {...persona};
persona3.nombre = 'Bruce';
persona3.apellido = 'Baner';
console.table(persona3);
