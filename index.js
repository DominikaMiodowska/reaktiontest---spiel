"use strict";

window.addEventListener("load", function() {

    setTimeout(function() {
        document.body.style.backgroundColor = "grey";
        let start = Date.now();

        document.body.addEventListener("click", function() {
            let end = Date.now();
            let difference = end - start;
            alert("Du hast " + (difference / 1000) + " Sekunden benoetigt!");
            document.location.reload();
        }, false);

    }, 2500 + Math.random() * 5000)
});