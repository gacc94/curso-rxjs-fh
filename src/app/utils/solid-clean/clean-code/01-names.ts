(async () => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ];

    // Archivos marcados para borrar - files to delete
    const filesToDelete: boolean[] = filesToEvaluate.map( file =>
        file.flagged );

    //Malos Nombres
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea

    // día de hoy - today
    const today = new Date();

    // días transcurridos - elapsed time in days
    const daysPassed: number = 23;

    // número de archivos en un directorio - number of files in directory
    const numberFilesOrDirectory = 33;

    // primer nombre - first name
    const firstName = 'Fernando';

    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const dayLastChange = 12;

    // cantidad máxima de clases por estudiante - max classes per student
    const maxStudentForClass = 6;

    const fruitsNames = ['Manzana', 'Apple', 'Orange'];
})();

/*==========================
            2DA PARTE
* ==========================*/

(() => {

    // arreglo de temperaturas celsius
    const temperaturesCelsius: number[] = [33.6, 12.34];

    // Dirección ip del servidor
    const ipServer = '123.123.123.123';

    // Listado de usuarios
    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    // Listado de emails de los usuarios
    const emailsUsers = users.map( (user) => user.email );

    // Variables booleanas de un video juego
    const canJump = false;
    const canRun = true;
    const hasItems = true;
    const isLoading = false;

    // Otros ejercicios
    // tiempo inicial
    const startTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    // Tiempo al final
    const endTime = new Date().getTime() - startTime;


    // Funciones
    // Obtiene los libros
    function getBook() {
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL
    function getBookByUrl( url: string) {
        throw new Error('Function not implemented.');
    }

    // obtiene el área de un cuadrado basado en sus lados
    function areaCuadrado( lado: number ) {
        throw new Error('Function not implemented.');
    }

    // imprime el trabajo
    function printJob() {
        throw new Error('Function not implemented.');
    }

})();
