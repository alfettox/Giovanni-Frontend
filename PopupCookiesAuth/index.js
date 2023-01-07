const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const declineBtn = document.getElementById('decline-btn')
const modalChoiceBtns = document.getElementById('modal-choice-btns')

setTimeout(function () {
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function () {
    modal.style.display = 'none'
})

declineBtn.addEventListener('mouseenter', function () {

})

consentForm.addEventListener('submit', function (e) {
    e.preventDefault()

    const consentFormData = new FormData(consentForm)
    const fullName = consentFormData.get('fullName')

    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`

    setTimeout(function () {
        document.getElementById('upload-text').innerText = `
        Making the sale...`
    }, 200)


    setTimeout(function () {
        document.getElementById('modal-inner').innerHTML = `
        <div id="thanks-div">
            <h2>Thanks <span class="modal-display-name">${fullName}</span></h2>
            <p>Now we can contact you for marketing purposes</p>
            <img src="images/thanks.png" id="thanks">
            <cite>https://uxwing.com/thank-you-icon/</cite>
        </div>
    `
        modalCloseBtn.disabled = false
    }, 800)

}) 
