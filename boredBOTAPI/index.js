const hereDisplay = document.getElementById("idea");
const url ="https://apis.scrimba.com/bored/api/activity";
const btn = document.getElementById("action-button");

function fetchFn(){
fetch(url).then(response => response.json()).then(data => {
    console.log(data);
    hereDisplay.textContent = `ACTIVITY: ${data.activity},\n
                            TYPE: ${data.type},\n
                            PARTICIPANTS:${data.participants},\n
                            PRICE:${data.price},\n
                            LINK:${data.link},\n
                            KEY ACCESSIBILITY:  ${data.activity};`
})
}

btn.addEventListener('click', fetchFn);

