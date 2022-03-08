// #1

const a = 26
const b = 35

let adicao = (a + b)
console.log(adicao)

let subtracao = (a - b)

let multiplicacao = (a * b)

let divisao = (a / b)

let resto = (a % b)

// #2

const x = 97
const y = 45
const z = 66

let maior2 = null

if (x > y) {
    console.log('X é o maior')
}
else if (y > x)  {
    console.log('Y é o maior')
}

// #3

const x = 97
const y = 45
const z = 160

if (x > y && x > z) {
    console.log('X é o maior')
}
else if (y > x && y > z) {
    console.log('Y é o maior')
}
else {
    console.log('Z é o maior')
}

// #4

const x = 0

if (x > 0) {
    console.log('positive')
}
else if (x < 0 ) {
    console.log('negative')
}
else {
    console.log('zero')
}

// #5 

const a = 80
const b = 50
const c = 50

if (a + b + c === 180) {
    console.log('True')
}
else {
    console.log('Erro')
}

// #6

let nomeDaPeca = 'BIspo';
let nomeMinusculo = nomeDaPeca.toLowerCase();
const movimentoCavalo = 'L';
const movimentoBispo = 'diagonal'
const movimentoRei = 'Uma casa todos os lados'
const movimentoRainha = 'Qualquer casa, qualquer direção'
const movimentoPeao = 'Uma casa pra frente'
const movimentoTorre = 'Quantas casas quiser, em formato de +'


if (nomeMinusculo == 'cavalo') {
    console.log(movimentoCavalo)
}

else if (nomeMinusculo == 'bispo') {
    console.log(movimentoBispo)

}
else if (nomeMinusculo == 'rei') {
    console.log(movimentoRei)
}
else if (nomeMinusculo == 'rainha') {
    console.log(movimentoRainha)
}
else if (nomeMinusculo == 'peao') {
    console.log(movimentoPeao)
}
else if (movimentoTorre == 'torre') {
    console.log(movimentoTorre)
}
else {
    console.log('Erro')
}

// #7

let nota = 1050

if (nota >= 90 && nota <= 100) {
    console.log('A')
}
else if (nota >= 80 && nota < 90) {
    console.log('B')
}
else if (nota >= 70 && nota < 80) {
    console.log('C')
}
else if (nota >= 60 && nota < 70) {
    console.log('D')
}
else if (nota >= 50 && nota < 60) {
    console.log('E')
}
else if (nota >= 0 && nota < 50){
    console.log('F')
}   
else {
    console.log('Erro')
}

// #8
let numberx = 15
let numbery = 20
let numberz = 87

if (numberx % 2 || numbery % 2 || numberz % 2 == 0) {
    console.log('True')
}
else {
    console.log('false')
}

// #9

let numberx = 15
let numbery = 20
let numberz = 87

if (numberx % 2 || numbery % 2 || numberz % 2 !== 0) {
    console.log('True')
}
else {
    console.log('false')
}

// #10

const precoCusto = 20
const precoVenda = 15
const impostoSobreOCusto = 20 * precoCusto / 100
const custoTotal = precoCusto + impostoSobreOCusto

const lucro = precoVenda - custoTotal

const lucroMil = lucro * 1000

if (lucroMil > 0) {
    console.log(lucroMil)
}
else {
    console.log('Erro')
}

// #11 

let salarioBruto =1300;
let salarioLiquido = salarioBruto - (inss + ir)

let inss =null ;

if (salarioBruto >0 && salarioBruto <= 1556.94) {
    inss = 8%;
}

else if (salarioBruto >= 1556.95 && salarioBruto <= 2954.92) {
    inss = 9%; 
}

else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    inss = 11%; 
}


let inssReal = inss * salarioBruto / 100
console.log(inssReal)





