import key from "./OMDBKey.js"
let addRemove="add";

let moviesArr = [];
const htmlBlock = document.getElementById("htmlBlock");
const searchButton = document.getElementById("input-field")

console.log(key);

let url = `http://img.omdbapi.com/?apikey=[49d80c0e]&`

searchButton.addEventListener('click', () => {
    fetch("http://img.omdbapi.com/?apikey=49d80c0e").then(resp => resp.json(resp)).then(data => {
        console.log(data);
        htmlBlock = `
            <div>
            <div class="movie-image">
                <img src=${data}
            </div>
            <div>
                <h3>${data.title}
                    <span>
                    <img src="../images/star.png"> ${data.rating}
                    </span>
                </h3>
                <h6>
                    <span>${data.duration}</span>
                    <span>${data.genre}</span>
                    <span><img src="../images/minus.png">${addRemove} </span>
                    
                </h6>
                <p>${data.description}</p>
                <div>
            </div>
            `
    })
})

fetch('http://img.omdbapi.com/?apikey=[${49d80c0e}]&`')
.then(resp=>resp.json()).then(data=>{console.log(data)})