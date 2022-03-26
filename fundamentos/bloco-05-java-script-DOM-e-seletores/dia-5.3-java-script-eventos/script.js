function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// primeiro passo recuperar a lista 

const ulDays = document.getElementById('days')

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const divConteinerBtn = document.querySelector('.buttons-container');

const selectHolidayCls = document.querySelectorAll('.holiday');

function createMonthDays(array) {
  for (let i = 0; i < array.length; i += 1) {

    let day = array[i];

    let createDezDaysList = document.createElement('li');
    createDezDaysList.innerText = day;
    createDezDaysList.classList = 'day';

    if (day == 24 || day == 25 || day == 31) {
      createDezDaysList.classList = 'day holiday'
    }
    if (day == 4 || day == 11 || day == 18 || day == 25) {
      createDezDaysList.classList = 'day friday'
    }
    if (day == 25) {
      createDezDaysList.classList = 'day friday holiday'
    }
    ulDays.appendChild(createDezDaysList)
  }
}
createMonthDays(dezDaysList)

function createHolidaysBtn() {
  let createButton = document.createElement('button');
  createButton.innerHTML = 'Feriados';
  createButton.id = 'btn-holiday'
  createButton.type = 'submit'
  createButton.name = 'formBtn'

  divConteinerBtn.appendChild(createButton);
}
createHolidaysBtn()

const selectBtn = document.getElementById('btn-holiday');

selectBtn.addEventListener('click', changeHolidaysColor)

let isCalledOnce = false;
let FridayIsCalledOnce = false;

function changeHolidaysColor() {
  
  const selectAllHolidays = document.querySelectorAll('.holiday');
  if (isCalledOnce == false) {
    for (let i = 0; i < selectAllHolidays.length; i += 1) {
      selectAllHolidays[i].style.backgroundColor = 'darkred';
    }    
    isCalledOnce = true;
  }
  else {    
    for (let i = 0; i < selectAllHolidays.length; i += 1) {
      selectAllHolidays[i].style.backgroundColor = '';
    }
    isCalledOnce = false;
  }
}

function createFridayBtn() {
  let createButton = document.createElement('button');
  createButton.innerHTML = 'Sexta-feira';
  createButton.id = 'btn-friday'
  createButton.type = 'submit'
  createButton.name = 'formBtn'

  divConteinerBtn.appendChild(createButton);
}
createFridayBtn()

function changeFridaysText() {  
  const selectAllFridays = document.querySelectorAll('.friday');
  if (FridayIsCalledOnce == false) {
    for (let i = 0; i < selectAllFridays.length; i += 1) {
      selectAllFridays[i].innerText = 'Sexta-feira';
    }    
    FridayIsCalledOnce = true;
  } 
  else {
    for (let i = 0; i < selectAllFridays.length; i += 1) {
      selectAllFridays[i].innerText = '';
    }
    
    FridayIsCalledOnce = false;
  }
}
document.getElementById('btn-friday').addEventListener('click', changeFridaysText)










