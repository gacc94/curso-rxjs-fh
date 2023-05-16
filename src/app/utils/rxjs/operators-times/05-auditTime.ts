import {auditTime, fromEvent, sample, tap} from "rxjs";

const click$ = fromEvent(document, 'click');
click$.pipe(
    tap(val => console.log('tap1'+val)),
    auditTime(1000),
    tap(val => console.log('tap2'+val)),
).subscribe(console.log);