/**
 * El operador combineLatest espera a que todos los observables de origen hayan emitido
 * al menos un valor y luego combina los valores más recientes de cada uno en un
 * arreglo o en un objeto, dependiendo de cómo se especifique.
 * A medida que los observables de origen emiten nuevos valores, se
 * emite un nuevo valor combinado.*/

import {combineLatest, fromEvent, pluck} from "rxjs";

combineLatest([
    getInputStream(document.querySelector('#name')),
    getInputStream(document.querySelector('#password')),
]).subscribe(console.log);

function getInputStream(el: any) {
    return fromEvent(el, 'keyup').pipe
        (pluck('target','value')
    )
}