import heroes, { owners } from '../data/heroes';

console.log( owners );

//find --> recupera 1 solo - filter --> recupera todos
const getHeroById = (id) => {
    return heroes.find( (heroes) => heroes.id === id);
}


console.log( getHeroById(2) );


const getHeroByOwner = ( owner ) => heroes.filter( (heroes) => heroes.owner === owner);

console.log( getHeroByOwner('DC') );

