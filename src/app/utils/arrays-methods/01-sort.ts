import {employees} from "@utils/Practices/ticket-ordenamiento";
/**
 *  Metodo Sort() => se utiliza para ordenar los elementos de un arreglo en su lugar, es
 *  decir, modifica el arreglo original sin crear uno nuevo. El ordenamiento se
 *  realiza por defecto en base a la comparación de los elementos
 *  convertidos a cadenas de texto.*/
let numbers = [1,2,4,56,7,89,2,1,23];
numbers.sort((a: number, b: number) => {
    if (a === b) {
        return 0
    }
    if (a < b) {
        return -1;
    }
    return 1;


})

/***
 *
 * Opcion es utilizar el metodo localCompare() que se utiliza para comparar cadena
 * de texto, en el cual retorno un valor numero -1,0,1;*/

employees.sort((a,b) => {
    if (a.id > b.id) {
        return 1;
    }
    if (a.id < b.id) {
        return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
    }
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
    }
    return 0;
})

employees.sort((a, b) => {
    const idComparison = a.id.localeCompare(b.id);
    const nameComparison = a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    return (idComparison !== 0) ? idComparison : nameComparison;
});


employees.sort((a,b) => {
    let first  = parseInt(a.id);
    let second = parseInt(b.id);
    if (first > second){
        return 1;
    } if (first < second) {
        return -1;
    }
    return 0;
});

console.log(employees);