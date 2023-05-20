(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    const isRedFruit = ( fruit: string ): boolean => ( ['manzana','cereza','ciruela'].includes(fruit));

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    interface FruitsByColor  {
        [key: string]: string[];
    }
    function getFruitsByColor( color: string ): string[] | Error {
        const fruitsByColor: FruitsByColor = {
            red     : ['manzana', 'fresa'],
            yellow: ['piña', 'banana'],
            purple: ['moras', 'uvas']
        };

        return (fruitsByColor.hasOwnProperty(color))
            ? fruitsByColor[color]
            : new Error('the color must be: red, yellow, purple');
    }

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {
        const stepsValue = {
            isFirstStepWorking: 'Working properly!',
            isSecondStepWorking: 'Fourth step broken.',
            isThirdStepWorking: 'Third step broken.',
            isFourthStepWorking: 'First step broken.'
        }

        return (): string => {
            if (!isFirstStepWorking) {
                return 'First step broken.';
            }
            if (!isSecondStepWorking) {
                return 'Second step broken.';
            }
            if (!isThirdStepWorking) {
                return 'Third step broken.';
            }
            if (!isFourthStepWorking) {
                return 'Fourth step broken.';
            }
            return 'Working properly!';
        }
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();