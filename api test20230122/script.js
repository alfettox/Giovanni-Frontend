const addition = "";
for(let i=0; i<10; i++){
fetch("https://picsum.photos/v2/list?page=2&limit=100")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const randomNumber = Math.floor(Math.random()*100+1);
        console.log(data[randomNumber].url);
        document.getElementById("images-grid").innerHTML  +=
            `<div class="card"> <h4>${data[randomNumber].author}<h4>
                <img id="random-image" src="${data[randomNumber].download_url}"/>
                <button id="btn">Download</button>
             </div>`
        }
    )
}
