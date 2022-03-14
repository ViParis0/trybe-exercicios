// # 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

let fatorial = 10;

for (let i = fatorial -1; i >= 1; i -= 1) {
    fatorial *= i
    
    console.log(fatorial)
}

// # 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let palavraInvertida = '';

for (let i = word.length -1; i >= 0; i -= 1) {
    palavraInvertida += word[i];
}
console.log(palavraInvertida);


// # 3- Considere o array de strings abaixo: * Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let i = 0; i < array.length; i++) {
    if (array[i].length > maiorPalavra.length){
        maiorPalavra = array[i]
    }
}
console.log(maiorPalavra)

for (let i = 0; i < array.length; i++) {
    if (array[i].length < menorPalavra.length){
        menorPalavra = array[i]
    }
}
console.log(menorPalavra)

// # 4 Escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let primo = 50; 
let ePrimo = 0;

for (let i = 1; i < 50; i++) {
    if (i % i === 1 && i % 1 === i)
    ePrimo = i    
}

console.log(ePrimo)

