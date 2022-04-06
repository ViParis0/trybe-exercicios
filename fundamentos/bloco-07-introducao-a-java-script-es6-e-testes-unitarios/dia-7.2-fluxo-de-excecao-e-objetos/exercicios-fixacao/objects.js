const quadrinho1 = {
    collection: 'Tio Patinhas',
    title: 'O Tesouro dos Dez Avatares',
};

// 1. Acessar os valores - notações

// console.log(quadrinho1.collection)
// console.log(quadrinho1['title'])

// 2. Acrescentar uma nova entrada

// quadrinho1.author = 'Don Rosa';
// console.log(quadrinho1)

// 3. Object.keys - Chaves

// const array = Object.keys(quadrinho1)
// console.log(array);

// 4. Object.keys - Abrir a mente

// array.push('teste');
// console.log(array.includes('title'));

// 5. Object.values - Valores

// const valores = Object.values(quadrinho1);

// 6. Object.entries - Entradas

// const entradas = Object.entries(quadrinho1)
// console.log(entradas);

// 7. Object.assign - Copia de objetos diferentes - quadrinho2 e authorObject

const quadrinho2 = {
  collection: 'Sherlock Holmes',
  title: 'O cão dos Baskervilles'
};

const authorObject = {author: 'Sir Doyle'}

const copia = Object.assign(quadrinho2, authorObject)
// console.log(copia);

// 8. Object.assign - Clonar objetos

const clone = Object.assign({}, quadrinho2)
// console.log(clone);

// 9. Object.assign - Alterar os objetos clonados

quadrinho2.year = 1998;
clone.year = 1990;
// console.log(quadrinho2);
// console.log(clone);

// 10. Object.assign - Copiar objetos com a mesma chave

const quadrinho3 = Object.assign(quadrinho2, clone)
// console.log(quadrinho3);

// 11. ATENÇÃO: o primeiro parâmetro é sempre alterado e a referência continua a mesma!

console.table(quadrinho2);
quadrinho3['novo'] = 'referência';
console.table(quadrinho2);