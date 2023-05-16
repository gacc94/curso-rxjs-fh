import {from, of} from "rxjs";

export const src$ = of(
    fetch(`https://api.github.com/users/klerith`));

src$.subscribe({
    next:  (resp) => {
        let data = resp
            .then((data)=>{
                return data.json();
            })
            .then((value)=>{
                console.log(value);
            });
        console.log(data);
        // console.log(resp.ok);
    }
})

