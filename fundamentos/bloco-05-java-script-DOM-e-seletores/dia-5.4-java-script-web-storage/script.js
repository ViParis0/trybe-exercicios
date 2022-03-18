const btn1 = document.getElementById('1')
const btn2 = document.getElementById('2')
const btn3 = document.getElementById('3')
const btn4 = document.getElementById('4')
const paragrafo1 = document.getElementById('paragrafo1')
const paragrafo2 = document.getElementById('paragrafo2')
const classParagrafo1 = document.getElementsByClassName('paragrafo1')[0];


function selectPageStyle() {
    paragrafo1.classList = 'paragrafo1';
    paragrafo2.classList = 'paragrafo1';
}
function selectPageStyle2() {
    paragrafo1.classList = 'paragrafo2';
    paragrafo2.classList = 'paragrafo2';
}
function selectPageStyle3() {
    paragrafo1.classList = 'paragrafo3';
    paragrafo2.classList = 'paragrafo3';
}

btn1.addEventListener('click', selectPageStyle)
btn2.addEventListener('click', selectPageStyle2)
btn3.addEventListener('click', selectPageStyle3)

function salvarLayout() {
    localStorage.setItem('layout', JSON.stringify({layout1: selectPageStyle}))
}
btn4.addEventListener('click', salvarLayout)