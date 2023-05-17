import {delay, map, Observable, tap} from "rxjs";
import {inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";

const _http = inject(HttpClient);

export const employees = [
    {
        id: '005',
        name: 'Pedro',
    },
    {
        id: '002',
        name: 'Ernesto',
    },
    {
        id: '007',
        name: 'Carlos',
    },
    {
        id: '006',
        name: 'Jacinto',
    },
    {
        id: '003',
        name: 'Hermelinda',
    },
    {
        id: '002',
        name: 'Tiburcia',
    },
    {
        id: '001',
        name: 'Gustavo',
    },

]
const ItemFactura: any[] = [];

console.log(employees);

employees.sort((a, b) => a.id.localeCompare(b.id))
ItemFactura.sort((a, b) => a.NumeroItemOC.localeCompare(b.NumeroItemOC))

console.log(employees);
console.log(ItemFactura)

function getDataJson(): Observable<any[]> {
    return _http.get<any[]>('assets/data.json');
}

getDataJson().pipe(
    delay(5000),
    tap((val) => console.log(val)),
    map( (data) => data.sort((a, b) => a.NumeroItemOC.localeCompare(b.NumeroItemOC))),
    tap((val) => console.log(val)),
).subscribe({
    next: (value) => {
        console.log(value);
    }
})