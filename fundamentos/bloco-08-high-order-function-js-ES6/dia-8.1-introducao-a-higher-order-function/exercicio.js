// const newEmployees = (dadosEmployee) => {
//     const employees = {
//       id1: dadosEmployee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: dadosEmployee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: dadosEmployee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
//   };

//   const dadosEmployee = (nomeCompleto) => {
//     let emailFormatado = `${nomeCompleto.replace(' ', '_').toLowerCase()}@trybe.com`;
//     return {
//         nome: nomeCompleto,
//         email: emailFormatado
//     }
// }

// console.log(newEmployees(dadosEmployee));

function getRandomInt(min, max) {
    const random = Math.floor(Math.random() * (max - min)) + min;
    console.log(random);
    return random       
}

const checkPick = (callback, pickNumb, min, max) => {
    if (pickNumb === callback(min, max)){        
        console.log("Parabéns você ganhou");
        
    }else {
        console.log("Tente novamente");
    }
}

checkPick(getRandomInt, 4, 1, 10)

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = numbers.find((number) => number % 3 === 0 && number % 5 === 0);

console.log(findDivisibleBy3And5)

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = names.find((name) => name.length === 5)

console.log(findNameWithFiveLetters);

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(idNumerico) {
    return musicas.find((elemento) => elemento.id === idNumerico)
};
  
console.log(findMusic('31031685'))

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
  const verifyGrades = (objeto) => (
    Object.values(objeto).every((valor) => valor === 'Aprovado')
  );
  
  console.log(verifyGrades(grades));

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((nome) => nome === name)


console.log(hasName(names, 'Ana'))

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => arr.every((elemento) => elemento.age >= minimumAge)
  
  console.log(verifyAges(people, 18));


  
people.sort(function (a, b) {
    if (a.age > b.age) {
      return 1;
    }
    if (a.age < b.age) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  
  console.log(people);