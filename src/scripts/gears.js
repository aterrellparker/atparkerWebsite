//Make the DIV element draggagle:
window.onload = function () {
    dragGear(document.getElementById("gear"));
}
function dragGear(element) {
    var mouseDeltaX = 0, mouseDeltaY = 0, mouseInitialX = 0, mouseInitialY = 0;
    if (!element) {
        return;
    }
    element.onmousedown = dragMouseDown;

    function updateSpeed() {
        element.style.animationDuration = Math.random() * 15 + "s";
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        mouseInitialX = e.clientX;
        mouseInitialY = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
        
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        mouseDeltaX = mouseInitialX - e.clientX;
        mouseDeltaY = mouseInitialY - e.clientY;
        mouseInitialX = e.clientX;
        mouseInitialY = e.clientY;
        // set the element's new position:
        element.style.top = (element.offsetTop - mouseDeltaY) + "px";
        element.style.left = (element.offsetLeft - mouseDeltaX) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
        updateSpeed();
    }
}

