import {fromEvent, Observable} from "rxjs";

export const event1$: Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'click');
export const event2$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(document, 'keyup');
export const event3$ = fromEvent(document, 'scroller');

event1$.subscribe({
    next: (value) => {
        let {x,clientY} = value;
        console.log(x);
        console.log(clientY);
    }
});
event2$.subscribe({
    next: (value) => {
        console.log(value.keyCode);
    }
})