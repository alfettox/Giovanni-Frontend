function ideaButtonFn() {
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
        .then(data => {
            console.log(data.activity)
            document.getElementById("new-idea").textContent = data.activity
        })
}

