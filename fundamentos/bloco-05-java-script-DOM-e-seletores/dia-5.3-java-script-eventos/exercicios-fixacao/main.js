const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const selectTechElement = document.querySelector('.tech')



// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre? (Por causa da classe .tech)


// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.

// function addClassTech(li){
//     li.className = 'tech';
// }

// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// function addClassTech(li.addEventListener.target('click', event)) {
//   if (li == firstLi) {
//     firstLi.className = 'tech';
//     secondLi.className = '';
//     thirdLi.className = '';
//   }
//   else if (li == secondLi) {
//     firstLi.className = '';
//     secondLi.className = 'tech';
//     thirdLi.className = '';
//   }
//   else if (li == thirdLi) {
//     firstLi.className = '';
//     secondLi.className = '';
//     thirdLi.className = 'tech';    
//   }
// }


function addClassTech(event) {
  const techElementExistent = document.querySelector('.tech')
  techElementExistent.classList.remove('tech')
  event.target.classList.add('tech')
}

firstLi.addEventListener('click', addClassTech);
secondLi.addEventListener('click', addClassTech);
thirdLi.addEventListener('click', addClassTech);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';

function changeTechText() {
  const getClassTech = document.querySelector('.tech')
  getClassTech.innerText = input.value 
  console.log(input.value)
}
input.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') 
  changeTechText(); 
})
 

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

function redirectPage(){
  window.location.replace('https://stackoverflow.com/questions/503093/how-do-i-redirect-to-another-webpage')
}
myWebpage.addEventListener('dblclick', redirectPage)

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:

function changeMyWebColor(event){
  event.target.style.backgroundColor = 'red';
}
function revertColor(event){
  event.target.style.backgroundColor = '';
}
myWebpage.addEventListener('mouseover', changeMyWebColor)
myWebpage.addEventListener('mouseout', revertColor)


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

selectTechElement.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.