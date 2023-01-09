import { catsData } from '/scripts/data.js'

const addBtn = document.getElementById('add-button')
const cardDetails = document.getElementById('card-details')
const payBtn = document.getElementById('pay-button')
const closeButton = document.getElementById('close-button');
const listEl = document.getElementByID('list-element');

addBtn.addEventListener('click', renderCat)
payBtn.addEvenetListener('click', pay)
memeModalCloseBtn.addEventListener('click', closeModal)

function renderList(){           /* render images */ 
    listEl.innerHTML =  `
    <div class="food-div">
    <div class="food-icon">
        <img src="${""}" alt="food">
    </div>
    <div class="food-element">
        <h3 class="food-title">Title</h3>
        <h5 class="food-description">a ipsa perferendis voluptates nulla rem. La blabla </h5>
        <h4 class="food-price">price</h4>
    </div>
    <div button class="food-button">
        <button class="add-button">+</button>
    </div>
</div>
        `
    listEl.style.display = 'flex'
}

function render(meals){ /*render the array of emotions */
        
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
            type="radio"
            id="${emotion}"
            value="${emotion}"
            name="emotions"
            >
        </div>`
    }
    listEl.innerHTML = radioItems;
}


function closeModal(){
    cardDetails.style.display = 'none'    /* close the image */
}
closeButton.addEventListener('click', function closeModal(){
    cardDetails.style.display = 'none';
    render();
});

