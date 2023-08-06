let UI = function(type) {
    fetch(`uis/${type}.html`)
    .then(response => response.text())
    .then(text => {
        document.body.innerHTML = text;
    })
    .catch(error => {
        console.error('Error loading text file:', error);
    });
}

let check_ui_display = function() {
    let status = localStorage.getItem('display');
    document.querySelector(`.view-${status}`).style.backgroundColor = "rgba(255,255,255,0.1)"
};
let ManageDisplay = function() {
    let status = localStorage.getItem('display');
    if (status==="grid") {
        localStorage.setItem('display',"line");
    } else {
        localStorage.setItem('display',"grid");
    }
    Search(search_input);
}