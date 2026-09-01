document.onkeydown = keyHit;
var thisPic = 0;

function keyHit(evt) {
    var myPix = new Array(
        "img/lion.jpg",
        "img/tigger.jpg",
        "img/puma.jpg",
        "img/leopard.jpg",
        "img/lince.jpg"
    );
    var imgCt = myPix.length - 1;

    // 37 y 39 son los códigos ascii de las teclas del cursor (flecha izquierda y derecha)
    var ltArrow = 37;
    var rtArrow = 39;

    // Manejo del objeto para controlar los eventos del teclado sin importar el navegador
    var thisKey = (evt) ? evt.which : window.event.keyCode;

    if (thisKey == ltArrow) {
        chgSlide(-1, myPix, imgCt);
    } else if (thisKey == rtArrow) {
        chgSlide(1, myPix, imgCt);
    }
}

function chgSlide(direction, myPix, imgCt) {
    thisPic = thisPic + direction;
    
    if (thisPic > imgCt) {
        thisPic = 0;
    }
    if (thisPic < 0) {
        thisPic = imgCt;
    }
    
    document.getElementById("myPicture").src = myPix[thisPic];
}