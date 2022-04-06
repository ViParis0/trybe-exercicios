// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';

//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);



const testingScope = (escopo) => {
    if (escopo === true) {
        var ifScope = `Não devo ser utilizada fora do meu escopo (if)`; 
        console.log(`${ifScope}`); ifScope = `${ifScope} ótimo, fui utilizada no escopo !`
    }
    else {
        var elseScope = `Não devo ser utilizada fora meu escopo (else)`;
        console.log(elseScope);
    }     
};

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort(((a, b) => a - b))

console.log(oddsAndEvens); // será necessário alterar essa linha 😉