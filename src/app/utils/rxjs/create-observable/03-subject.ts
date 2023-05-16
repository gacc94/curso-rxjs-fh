import {Observable, Subject, Subscriber, Subscription} from "rxjs";

export const interval$: Observable<any> = new Observable<any>( (subscriber: Subscriber<any>) => {

    let count : number = 0;

    const intervalID = setInterval(()=>{
        subscriber.next(count);
        count++;
    }, 1000)

    return () => clearInterval(intervalID);
})

/*
* 1 - Multi casteo
* 2 - Tambien es Observer
* 3 - next, error, complete
* */
export const subject$: Subject<any> = new Subject<any>();

interval$.subscribe(subject$);
let subscription1: Subscription = interval$.subscribe(rnd => console.log(`Sub1: ${rnd}`));
let subscription2: Subscription = interval$.subscribe(rnd => console.log(`Sub2: ${rnd}`));

setTimeout(() => {
    subscription1.unsubscribe();
    subscription2.unsubscribe();
}, 3000);

subscription1.add(subscription2);