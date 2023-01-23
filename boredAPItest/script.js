
const url = "https://www.boredapi.com/api/activity"
window.onload = function() {
    var timeoutId;
    var valueLabel = document.getElementById("price-slider-value");
    var slider = document.getElementById("price-slider");
    slider.oninput = function() {
      valueLabel.innerHTML = this.value;
      valueLabel.style.opacity = 1;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function() {
        valueLabel.style.opacity = 0;
      }, 2000);
    }
    slider.onmouseup = function() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function() {
          valueLabel.style.opacity = 0;
        }, 2000);
    }
  }

  slider.addEventListener('input', function() {
    valueLabel.innerHTML = this.value;
    valueLabel.style.opacity = 1;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function() {
      valueLabel.style.opacity = 0;
    }, 2000);
});
slider.addEventListener('mouseup', function() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function() {
        valueLabel.style.opacity = 0;
      }, 2000);
});

fetch(url)
    .then(response => response.json())
    .then(data => {

        console.log(data)
        document.getElementById("idea").innerHTML = ` <strong>${data.activity}</strong>,
                                                             ${data.type} 
                                                             ${data.participants} <i class="ri-user-3-line"></i>
                                                             ${data.price} <i class="ri-wallet-3-line"></i>
                                                             <img src="https://api.unsplash.com/search/photos?page=1&query=office" />`;

    }
    )
