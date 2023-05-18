const getTotal = ( amount: number, tax: number ) => amount + (amount * tax);

function getTotalCurry(t: number) {
    let tax: number = t;
    return (amount: number) => amount + (amount * tax);
}