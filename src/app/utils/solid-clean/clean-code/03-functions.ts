/**
 * Recomendaciones:
 *  - Simplicidad es fundamental
 *  - Funciones de tamaño reducido
 *  - Funciones de una sola linea sin causar complejidad
 *  - Menos de 20 linea
 *  - Evita el uso de else
 *  - Prioriza el uso de condicional ternaria */

(() => {

    // función para obtener información de una película por Id
    function getMovieById( id: string ) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast //
    // id = movieId getMovieCast
    function getCastById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getBioOfActorById( id: string ) {
        console.log({ id });
    }
    interface IMovie {
        cast        : string[]
        description : string,
        rating      : number,
        title       : string,
    }
    // Crear una película
    function createMovie( { title, description, rating, cast}: IMovie ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;

    }

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) : number => {
        return (isDead)        ? 1500 :
                (isSeparated)   ? 2500 :
                (isRetired)     ? 3000 : 4000;
    }


})();