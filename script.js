var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

if (menuIcon) {
    menuIcon.onclick = function() {
        sidebar.classList.toggle("small-sidebar");
        container.classList.toggle("large-container");
    }
}

document.addEventListener("click", function (e) {
    const link = e.target.closest(".timestamp-link");
    if (!link) return;

    e.preventDefault();
    
    const video = document.getElementById("myVideo");
    if (!video) return;

    const seconds = Number(link.getAttribute("data-time"));
    
    video.currentTime = seconds;
    video.play();
});