// common 
function hideElementById(elementId){
  const element = document.getElementById(elementId)
  element.classList.add('hidden')
}

function showElementById(elementId){
  const element = document.getElementById(elementId)
  element.classList.remove('hidden')
}

// id 
const container = document.querySelector('.contain');
const seats = document.querySelectorAll('.seat');
const count = document.getElementById('count');
const total = document.getElementById('total');
const place = document.getElementById('place');

let ticketPrice = place.value;

container.addEventListener('click', (e) => {
  if(e.target.classList.contains('seat') && !e.target.contains('booking')){
    console.log(e.target)
  }
})

function next(){
  hideElementById('first-page');
  showElementById('success-page');
}

function again(){
  hideElementById('success-page');
  showElementById('first-page');
}