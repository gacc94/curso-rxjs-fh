import {ajax} from "rxjs/internal/ajax/ajax";
import {catchError, of, pluck} from "rxjs";
import {AjaxError} from "rxjs/internal/ajax/errors";

const url: string = `https://api.github.cosam/users?per_page=5`;
const ajaxRxjs$ = ajax(url);

ajaxRxjs$.pipe(
    pluck('response'),
    catchError( (err: AjaxError) => {
        return of(err.xhr)
    }),
).subscribe({
    next: (value) => {
        console.log(value)
    },
    error: (err) => {
        console.log(err);
    },
    complete: () => console.log('completado')
})