let img = document.getElementById("body")

window.addEventListener("scroll", function(){
    var value = window.scrollY;
    body.style.top = value * 0.15 + "px";
})