const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

//exportacion por defecto, una forma
//export default heroes;

//Importante
//si utilizamos una importacion individual 
// ej export const owners = ['DC','Marvel']
const owners = ['DC','Marvel'];
//y una exportacion por defecto, como la anteriormente mencionada
//falla
//ej del video (falla)
//import heroes, owners from "./data/heroes";
//ej del video (no falla)
//import heroes, { owners } from "./data/heroes";

//con una sola exportacion
export {
    heroes as default ,
    owners
}