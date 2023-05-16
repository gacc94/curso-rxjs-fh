import {Observer} from "rxjs";

export const observer: Observer<any> = {
    next: (value) => console.log('next: ' + value),
    error: (err) => console.log('error: ' + err),
    complete: () => console.log('complete'),
}
