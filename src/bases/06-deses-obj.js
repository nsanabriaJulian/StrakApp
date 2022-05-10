// Desestructuración
// Asignación Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaPersona = ( { clave, nombre, edad , rango = 'Capitán'} ) => {
    
    //console.log( nombre, edad, rango );
    
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 10.3212,
            lng: -12.5845
        }
    }

}

//recupero propiedades que necesito
const { nombreClave, anios, latlng:{ lat, lng } } = retornaPersona( persona );

console.log( nombreClave, anios );
console.log( lat, lng );