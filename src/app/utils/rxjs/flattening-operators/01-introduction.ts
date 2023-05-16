import {debounceTime, fromEvent, map} from "rxjs";

const input = document.createElement('input');
const element = document.querySelector('.lastParagraph')?.append(input);


const input$ = fromEvent<InputEvent>(input,'input');

input$.pipe(
    debounceTime(500),
    map((event: InputEvent) => {
        return event.dataTransfer
    })
).subscribe(console.log)