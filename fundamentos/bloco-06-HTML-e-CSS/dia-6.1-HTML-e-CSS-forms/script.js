const selectBtn = document.getElementById('submit-button')
function preventDefaultBtn(event) {
    event.preventDefault()
}

selectBtn.addEventListener('click', preventDefaultBtn)



// document.getElementById('reload-btn').addEventListener('click', function (event) {
//     event.preventDefault()
//     document.location.reload(true)
// })

let picker = new Pikaday({ field: document.getElementById('datepicker') }); 