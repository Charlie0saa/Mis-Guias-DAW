function init() {
    var divw1 = document.getElementById("titlew1");
    var divw2 = document.getElementById("titlew2");

    if (divw1 && divw1.addEventListener) {
        divw1.addEventListener("mousedown", function(event) {
            drag(this.parentNode, event);
        }, false);
    } else if (divw1 && divw1.attachEvent) {
        divw1.attachEvent("onmousedown", function(event) {
            drag(this.parentNode, event);
        });
    }

    if (divw2 && divw2.addEventListener) {
        divw2.addEventListener("mousedown", function(event) {
            drag(this.parentNode, event);
        }, false);
    } else if (divw2 && divw2.attachEvent) {
        divw2.attachEvent("onmousedown", function(event) {
            drag(this.parentNode, event);
        });
    }
}

if (window.addEventListener) {
    window.addEventListener("load", init, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", init);
}