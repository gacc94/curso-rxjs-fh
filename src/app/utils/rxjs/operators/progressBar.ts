import {fromEvent} from "rxjs";

export const  text: HTMLDivElement = document.createElement('div');
text.innerHTML = `
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
<br>
when an unknown printer took a galley of type and scrambled it to make a type
specimen book. It has survived not only five centuries, but also the leap into
electronic typesetting, remaining essentially unchanged. It was popularised in
<br>
the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
and more recently with desktop publishing software like Aldus PageMaker including
versions of Lorem Ipsum
`;

export let body = document.querySelector('body');
if (body){
    body.append(text);
}


export const scroll$ = fromEvent<ProgressEvent>(document, 'progress');

export const progress$ = scroll$.pipe();

progress$.subscribe({
    next: (value) =>{

    }
})



