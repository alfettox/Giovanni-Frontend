function uploadFile(){
    let formData = new FormData();
    formData.append("data", fileUpload.files[0]);
    fetch('http://localhost:8080/upload', {
        method: 'POST',
        body: formData
    }).then(response => response.text()).then(txt => alert(txt));
}