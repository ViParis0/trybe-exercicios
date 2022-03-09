// * Exercicios # 1 * Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let eachNumber of numbers) {
    console.log(eachNumber)
}

// # 2 * Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

const sum = numbers.reduce((partialSum, a) => partialSum + a, 0);
console.log(sum) // encontrei esse artigo sobre o .reduce https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers

// # 3 * Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

const sum = numbers.reduce((partialSum, a) => partialSum + a, 0);
const media = sum / numbers.length
console.log(media)

// # 4 * Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

const sum = numbers.reduce((partialSum, a) => partialSum + a, 0);
const media = sum / numbers.length

if (media > 20) {
    console.log('valor maior que 20 ; ', media)
}
else {
    console.log('valor menor ou igual a 20 ; ', media)
}

// # 5 * Utilizando for , descubra qual o maior valor contido no array e imprima-o

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maxNumber = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
        console.log(maxNumber)
    }
}

// # 6 * Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let quantosImpares = 0;

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 == 0) {
    }

    else {
        quantosImpares++

    }
    console.log(quantosImpares)
}




// 7 * Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let minNumber = 9;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minNumber) {
        minNumber = numbers[i];
        console.log(minNumber)
    }
}

// # 8 * Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let numbers = [];

for (let i = 1; i < 26; i++) {
    numbers += i
    console.log(numbers)
}

// # 9 * Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let numbers = [];

for (let i = 1; i < 26; i++) {
    numbers += i
    console.log(numbers)

    for (let p = 0; p < numbers.length; p++) {
        numbers[i] / 2
        console.log(numbers[i])
    }
}

