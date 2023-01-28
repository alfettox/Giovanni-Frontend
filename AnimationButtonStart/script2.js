let moved =false;

const btnEl = document.getElementById("btn");

const parent = document.getElementById("parent");
const childEl = document.getElementById("child");

function exec(){
    if(moved ===false){
        console.log("move forward");
        $('.child').addClass('move');
        $('.child').removeClass('moveBack');
        moved = true;
    }
    else if(moved ===true){
        console.log("moveback");
        $('.child').removeClass('move');
        $('.child').addClass('moveBack');
        moved = false;
    }

}
