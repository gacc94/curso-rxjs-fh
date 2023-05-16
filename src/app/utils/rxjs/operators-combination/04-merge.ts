import {fromEvent, merge} from "rxjs";

merge(
    fromEvent(document, 'keyup'),
    fromEvent(document, 'click'),
).subscribe(console.log);