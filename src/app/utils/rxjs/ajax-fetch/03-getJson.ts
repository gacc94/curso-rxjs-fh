import {fromFetch} from "rxjs/internal/observable/dom/fetch";
import {ajax} from "rxjs/internal/ajax/ajax";
const url: string = `https://httpbin.org/delay/1`;
// const url: string = `https://api.github.com/users?per_page=5`;

const obs$ = ajax.getJSON(url, {
    'Content-type': 'application/json',
});

obs$.subscribe(console.log)

ajax({
    url,
    method: 'POST',
    headers: {
        'mi-token': 'AJSDAJASD-21'
    },
    body: {
        id:1,
        name: 'gustavo',
    }
})