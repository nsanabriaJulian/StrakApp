

const persona = {
    nombre : 'Tony',
    apellido : 'Stark',
    edad : 45,
    domicilio: {
        calle: 'flemming',
        altura: 1234,
        lat: 14.33455,
        lng: 53.2231,
    }
};


//console.table( persona );

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(  persona  );
console.log(  persona2 );



