// primera forma de importar
//este importar es de el video del tema, pero debo comentarlo
//import  heroes, { owners }  from '../data/heroes';
import heroes from '../data/heroes';

//segunda tipo de importacion
//heroes
//realiza automaticamente la importacion 

export const getHeroeById = (id) => {
    return heroes.find( (heroe) => heroe.id === id );
}

//console.log( getHeroeById(2) );

export const getHeroesByOwner = ( owner ) => {
    return heroes.filter( (heroe) => heroe.owner === owner );    
}

//console.log( getHeroesByOwner('DC') );

//console.log( owners );