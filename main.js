import './style.css'

const modalEl = document.getElementById('modal')
const modalCloseEl = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalTextEl = document.getElementById('modal-text')
const declineBtn = document.getElementById('decline-btn')
const modalChoiceContainer = document.getElementById('modal-choice-btns')


setTimeout(function(){
    modalEl.style.display = 'inline'
}, 1500)

modalCloseEl.addEventListener('click', ()=>{
  modal.style.display = 'none'
})

declineBtn.addEventListener('mouseover', ()=>{
  modalChoiceContainer.classList.toggle('reverse')
})

consentForm.addEventListener('submit', (e)=>{
  e.preventDefault()
  const consentFormData = new FormData(consentForm)
  let name = consentFormData.get('fullName')

  modalTextEl.innerHTML = `<div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div>`

    setTimeout(()=>{
      document.getElementById('uploadText').textContent = "Making the sale..."
      setTimeout(function(){
          document.getElementById('modal-inner').innerHTML = `
          <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
          <p>We just sold the rights to your eternal soul.</p>
          <div class="idiot-gif">
              <img src="images/pirate.gif">
          </div>
      `
      modalCloseEl.disabled = false;
      }, 1500)
    }, 1500)
})
