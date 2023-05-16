import {Observable, Observer, Subscriber} from "rxjs";


export const obs$: Observable<string> = new Observable<string>((subs: Subscriber<string>) => {
    subs.next('a');
    subs.next('b');
    subs.next('c');
    subs.next('d');

    /*Deja de emitirse valores*/
    subs.complete();
});

export const interval$ = new Observable( (subscriber: Subscriber<any>) => {

    let count : number = 0;

    setInterval(()=>{
        subscriber.next(count);
        count++;
    }, 1000)

})