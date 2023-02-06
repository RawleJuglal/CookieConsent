import './style.css'

const modalEl = document.getElementById('modal')
const modalCloseEl = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')

setTimeout(function(){
    modalEl.style.display = 'inline'
}, 1500)

modalCloseEl.addEventListener('click', ()=>{
  modal.style.display = 'none'
})

consentForm.addEventListener('submit', (e)=>{
  e.preventDefault()
  console.log('form submitted')
})
