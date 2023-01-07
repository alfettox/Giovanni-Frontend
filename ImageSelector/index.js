import { catsData } from '/data.js'

const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById('animated')
const memeModalInner = document.getElementById('meme-modal-inner')
const memeModal = document.getElementById('meme-modal')
const memeModalCloseBtn = document.getElementById('meme-modal-close-btn')

emotionRadios.addEventListener('change', highlightCheckedOption)
getImageBtn.addEventListener('click', renderCat)
memeModalCloseBtn.addEventListener('click', closeModal)

function closeModal(){
    memeModal.style.display = 'none'    /* close the image */
}

function highlightCheckedOption(e){     /* higlight the selection */
    const radios = document.getElementsByClassName('radio')
    for (let radio of radios){
        radio.classList.remove('highlight') /*remove the previous higlight */
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function getMatchingCatsArray(){     
    if(document.querySelector('input[type="radio"]:checked')){ /* if checked */
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        const isGif = gifsOnlyOption.checked
        const matchingCatsArray = catsData.filter(function(cat){
            if(isGif){
                return cat.emotionTags.includes(selectedEmotion) && cat.isGif
            }
            else{
                return cat.emotionTags.includes(selectedEmotion)
            }            
        })
        return matchingCatsArray 
    }  
}

function getSingleCatObject(){  /* call a random cat*/
    const catsArray = getMatchingCatsArray()
        const randomNumber = Math.floor(Math.random() * catsArray.length)
        return catsArray[randomNumber]
}

function renderCat(){           /* render images */ 
    const catObject = getSingleCatObject()
    memeModalInner.innerHTML =  `
        <img 
        class="cat-img" 
        src="./images/${catObject.image}"
        alt="${catObject.alt}"
        >
        `
    memeModal.style.display = 'flex'
}

function getEmotionsArray(cats){ /* get the array of emotions read the emotions avoiding duplicates */
    const emotionsArray = []    
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            if (!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}

function renderEmotionsRadios(cats){ /*render the array of emotions */
        
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
    emotionRadios.innerHTML = radioItems;
}

renderEmotionsRadios(catsData) /* call the render function */ 




