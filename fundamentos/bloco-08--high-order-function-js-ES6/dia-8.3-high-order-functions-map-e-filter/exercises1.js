const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// Ex 1 

const formatedNames = books.map(book => `${book.name} - ${book.genre} - ${book.author.name}`)

// console.log(formatedNames);

// Ex 2

const nameAndAge = books.map(book =>({age: book.releaseYear - book.author.birthYear, author: book.author.name}))
nameAndAge.sort((a, b) => a.age - b.age);

// console.log(nameAndAge);

// Ex 3

const fantasyOrScienceFiction = books.filter(book => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')

// console.log(fantasyOrScienceFiction);

// Ex 4

const oldBooksOrdered = books.filter(book => 2022 - book.releaseYear > 60)
oldBooksOrdered.sort((a, b) => a.releaseYear - b.releaseYear);

// console.log(oldBooksOrdered);

// Ex 5

function fantasyOrScienceFictionAuthors(object){
  const fantasyOrScienceFictionAuthorsFilter = object.filter(book => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
  const authorName = fantasyOrScienceFictionAuthorsFilter.map(author => `${author.author.name}`)
  const authorNameSorted = authorName.sort()
  return authorNameSorted
}

// console.log(fantasyOrScienceFictionAuthors(books))

// Ex 6

function oldBooks(object){
  const oldBooksFilter = object.filter(book => 2022 - book.releaseYear > 60)
  const oldBooksName = oldBooksFilter.map(book => `${book.name}`)
  return oldBooksName
}

// console.log(oldBooks(books));

function authorWith3DotsOnName(object) {
  const authorWith3DotsOnNameFiltered = object.filter(book => book.author.name[1, 4, 7] === '.')
  // const authorWith3DotsOnNameReduced = object.reduce((acc, book) =>{
  //   if (acc[1, 4, 7] === '.'){return acc}else{return book.author.name}
  // }, '')
  // const authorWith3DotsOnNameBook = authorWith3DotsOnNameFiltered.map(book =>`${book.name}`)
  return `'${authorWith3DotsOnNameFiltered[0].name}'`;
}

// console.log(authorWith3DotsOnName(books));