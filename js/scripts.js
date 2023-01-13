const myFunction = () => 1 + 1;
const resultFunction = myFunction();

console.log('resultFunction', resultFunction, typeof resultFunction);

// --------------------------------------------------------------------------------------

const myFunctionDue = () => { 1 + 1 }; 
const resultFunctionDue = myFunctionDue();

console.log('resultFunctionDue', resultFunctionDue, typeof resultFunctionDue);

// --------------------------------------------------------------------------------------

const myFunctionTre = () => { 
    1 + 1
}; 
const resultFunctionTre = myFunctionTre();

console.log('resultFunctionTre', resultFunctionTre, typeof resultFunctionTre);

// --------------------------------------------------------------------------------------

const myFunctionQuattro = () => { 
    return 1 + 1;
}; 
const resultFunctionQuattro = myFunctionQuattro();

console.log('resultFunctionQuattro', resultFunctionQuattro, typeof resultFunctionQuattro);

// --------------------------------------------------------------------------------------

function sommaUno(numUno, numDue) {
    return numUno + numDue;
}

const resultSommaUno = sommaUno(1, 2);

console.log('resultSommaUno', resultSommaUno, typeof resultSommaUno);

// --------------------------------------------------------------------------------------

const sommaDue = function (numUno, numDue) {
    return numUno + numDue;
};

const resultSommaDue = sommaDue(3, 4);

console.log('resultSommaDue', resultSommaDue, typeof resultSommaDue);

// --------------------------------------------------------------------------------------

const sommaTre = (numUno, numDue) => {
    return numUno + numDue;
};

const resultSommaTre = sommaTre(5, 6);

console.log('resultSommaTre', resultSommaTre, typeof resultSommaTre);

// --------------------------------------------------------------------------------------

const sommaQuattro = (numUno, numDue) => numUno + numDue;

const resultSommaQuattro = sommaQuattro(7, 8);

console.log('resultSommaQuattro', resultSommaQuattro, typeof resultSommaQuattro);

// --------------------------------------------------------------------------------------

// Questa sintassi senza le parentesi tonde si può usare solo quando c'è un unico argomento
// const elevaAlQuadrato = (numero) => numero * numero;
const elevaAlQuadrato = numero => numero * numero;

const resultEleva = elevaAlQuadrato(3);

console.log('resultEleva', resultEleva, typeof resultEleva);

// --------------------------------------------------------------------------------------

document.getElementById('button').addEventListener('click', 
    function () {
        console.log('Hello dalla function()');
        console.log('this dalla function()', this);
    }
);

console.log(this);

document.getElementById('button').addEventListener('click', 
    () => {
        console.log('Hello dalla arrow function');
        console.log('this dalla arrow function', this);
    }
);