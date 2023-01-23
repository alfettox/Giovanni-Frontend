"use strict";

import Data from "./data"

const avatar = document.getElementById("avatar-image");
const name = document.getElementById("name")
const location = document.getElementById("location");
const iconHeart = document.getElementById("icon-heart");
const iconComment = document.getElementById("icon-comment");
const iconDm = document.getElementById("icon-dm")

fetch("data.js")
.then(response => response.text())
.then(data => {
  var data = JSON.parse(data);
  console.log(data);
  avatar.innerHTML = `<img src="${data.posts.avatar}"> ${data.posts.name} ${data.posts.location}`;
  name.innerHTML = "test";
});


iconHeart.addEventListener("click", (click) => {
    const likeCounterNumber = document.getElementById("like-counter").value;
    document.getElementById(like-counter).innerHTML = Number.paseInt(likeCounterNumber)+1;
})

let likeCounter =0;

function heart(){
    const likeCounterNumber = document.getElementById("like-counter").value;
    console.log(likeCounterNumber);
    document.getElementById(like-counter).innerHTML = Number.paseInt(likeCounterNumber)+1;
}
