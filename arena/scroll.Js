function getScrollPosition() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    let medias = document.querySelector('.medias');
    let media = document.querySelectorAll('.media-container .infos');
    let M = document.querySelectorAll('.media-container .center');
    if (scrollTop > 600) {
        medias.style.position = "fixed";
        medias.style.top = "0px";
        medias.style.right = "90px";
        medias.style.zIndex = "51";
        medias.style.width = "50%";
        medias.style.display = "flex";
        medias.style.columnGap = "0px";
        media.forEach(function(m) {
            m.style.display = "none";
        });
        M.forEach(function(m) {
            m.style.backgroundColor = "unset";
            m.style.gap = "10px";
            m.querySelector('.server-name').style.borderRadius = "50px"
        });
    } 
     if (scrollTop < 100) {
        medias.style.position = "relative";
        medias.style.top = "unset";
        medias.style.columnGap = "50px";
        medias.style.right = "unset";
        medias.style.zIndex = "1";
        medias.style.width = "75%";
        medias.style.display = "grid";
        media.forEach(function(m) {
            m.style.display = "flex";
        });
        M.forEach(function(m) {
            m.style.backgroundColor = "black";
            m.style.gap = "30px";

            m.querySelector('.server-name').style.borderRadius = "10px"
        });
    }
    // Perform actions based on the scroll position
}


// Call the function when the user scrolls
window.addEventListener('scroll', function() {
    getScrollPosition();
});