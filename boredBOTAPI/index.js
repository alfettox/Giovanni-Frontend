/**
Challenge: 

- Start building out the BoredBot Skeleton however you'd like. 
    That will include:
    - A title for the app ("BoredBot" might be a good start 😉)
    - A placeholder element that will be populated with the random 
      idea we get from the API // id idea
    - A button to click for triggering the GET request to the Bored API. 
      (Don't worry about implementing the button quite yet)  //action-button
*/
const hereDisplay = document.getElementById("idea");

const url ="https://apis.scrimba.com/bored/api/activity"
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         document.getElementById("activity-name").textContent = data.activity
//     })
function fetchFn(){
fetch(url).then(response => response.json()).then(data => {
    console.log(data);
    hereDisplay.innerHTML= `ACTIVITY: ${data.activity}, \n
                            TYPE: ${data.type},\n
                            PARTICIPANTS:${data.participants},\n
                            PRICE:${data.price},\n
                            LINK:${data.link},\n
                            KEY ACCESSIBILITY:  ${data.activity};`
})
}

const btn = document.getElementById("action-button")

btn.addEventListener('click', fetchFn)