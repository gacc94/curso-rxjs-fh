/**
 *  1   Metodo Reduce() => se utiliza en arreglos para reducir o combinar todos los
 *  elementos en un solo valor. Aplica una función de reducción a cada elemento
 *  del arreglo, de izquierda a derecha, para reducirlos a un solo valor acumulativo..*/


const sumArr =numbers.reduce((acc, curr) => {
    console.log(acc, curr)
    return acc + curr
},100)

console.log(sumArr);