var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-25%";
        var x = document.querySelectorAll('[id ^= "hideable"]');
        x.forEach(element => hideElements(element));
    }
    prevScrollpos = currentScrollPos;
}
function toggle() {
    var x = document.querySelectorAll('[id ^= "hideable"]');
    x.forEach(element => {
        if (element.style.display === "flex") {
            hideElements(element);
        } else {
            showElements(element);
        }
    })
}
function hideElements(element) {
    element.style.display = "none";
}
function showElements(element) {
    element.style.display = "flex";
}