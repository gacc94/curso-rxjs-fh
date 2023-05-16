import { asyncScheduler } from "rxjs";

export const saludar = () => console.log('Hola Mundo');

asyncScheduler.schedule(function (state){
    console.log(state)
    this.schedule( state, 1000 );
}, 2000, 0);