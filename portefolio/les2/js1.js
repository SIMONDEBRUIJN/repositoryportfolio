"use strict";
var i;
for (i = 0; i < 8; i += 1) {

    var blok = document.createElement("div");
    document.body.appendChild(blok);
    if (i % 2 === 0) {
        blok.className = "zwart";
    } else {
        blok.className = "wit";
    }
}

    