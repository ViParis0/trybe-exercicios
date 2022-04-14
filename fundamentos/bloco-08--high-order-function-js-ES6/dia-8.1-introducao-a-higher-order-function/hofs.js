//--------------------- Primeira parte do código -------------------

// const pessoa = {
//     nome: 'Tamara',
//     sobreNome: 'Simões',

//     saudacao: () => {
//         return `Olá`;
//     }
// };

// console.log(pessoa.saudacao());

//--------------------- Segunda parte do código -------------------

const pessoa = {
  nome: 'Tamara',
  sobreNome: 'Simões',

  saudacao: (callback) => {
    return callback();
  },
};

const saudacaoFormal = () => {
  return `Olá, tudo bem com você?`;
};

const saudacaoAmorosa = () => {
  return `Olá, meu amor, tudo bem com você?`;
};

const saudacaoMalHumorada = () => {
    return `Oi.`
  }

console.log(pessoa.saudacao(saudacaoAmorosa));

//--------------------- Terceira parte do código -------------------




//--------------------- Exercício 1 Course - Resolução comentada -------------------

// Crie uma função que retorne um objeto no formato { nomeCompleto, email } 
// representando uma nova pessoa contratada. Passe sua função como parâmetro 
// da HOF newEmployees para criar cada pessoa contratada em seu respectivo id.
// A sua função deve receber como parâmetro o nome completo da pessoa funcionária 
// e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const newEmployees = () => {
    const employees = {
        id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};