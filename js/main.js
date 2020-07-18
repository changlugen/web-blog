var cards = document.querySelectorAll(".card");
var box = document.querySelectorAll(".boxRight");
// console.log(cards);
var a = 0;
var b = 1;
var c = 2;
var d = 3;
var e = 4;
var f = 5;
var g = 6;

cards[a].style.transform = "translateX(0) scaleX(1) rotateY(0deg) translateZ(0px) scaleY(1)";
cards[b].style.transform = "translateX(-45%) scaleX(0.54) rotateY(45deg) translateZ(-150px) scaleY(0.95)";
cards[c].style.transform = "translateX(-60%) scaleX(0.51) rotateY(45deg) translateZ(-200px) scaleY(0.9)";
cards[d].style.transform = "translateX(-65%) scaleX(0.48) rotateY(45deg) translateZ(-300px) scaleY(0.85)";
cards[e].style.transform = "translateX(65%) scaleX(0.48) rotateY(-45deg) translateZ(-300px) scaleY(0.85)";
cards[f].style.transform = "translateX(60%) scaleX(0.51) rotateY(-45deg) translateZ(-200px) scaleY(0.9)";
cards[g].style.transform = "translateX(45%) scaleX(0.54) rotateY(-45deg) translateZ(-150px) scaleY(0.95)";
box[a].style.zIndex = "4";
box[b].style.zIndex = "3";
box[c].style.zIndex = "2";
box[d].style.zIndex = "1";
box[e].style.zIndex = "1";
box[f].style.zIndex = "2";
box[g].style.zIndex = "3";


var myVar = setInterval(function() {
    myTimer()
}, 3000);

function myTimer() {

    if (a < 6) {
        a++;
    } else {
        a = 0;
    }
    if (b < 6) {
        b++;
    } else {
        b = 0;
    }
    if (c < 6) {
        c++;
    } else {
        c = 0;
    }
    if (d < 6) {
        d++;
    } else {
        d = 0;
    }
    if (e < 6) {
        e++;
    } else {
        e = 0;
    }
    if (f < 6) {
        f++;
    } else {
        f = 0;
    }
    if (g < 6) {
        g++;
    } else {
        g = 0;
    }

    cards[a].style.transform = "translateX(0) scaleX(1) rotateY(0deg) translateZ(0px) scaleY(1)";
    cards[b].style.transform = "translateX(-45%) scaleX(0.54) rotateY(45deg) translateZ(-150px) scaleY(0.95)";
    cards[c].style.transform = "translateX(-60%) scaleX(0.51) rotateY(45deg) translateZ(-200px) scaleY(0.9)";
    cards[d].style.transform = "translateX(-65%) scaleX(0.48) rotateY(45deg) translateZ(-300px) scaleY(0.85)";
    cards[e].style.transform = "translateX(65%) scaleX(0.48) rotateY(-45deg) translateZ(-300px) scaleY(0.85)";
    cards[f].style.transform = "translateX(60%) scaleX(0.51) rotateY(-45deg) translateZ(-200px) scaleY(0.9)";
    cards[g].style.transform = "translateX(45%) scaleX(0.54) rotateY(-45deg) translateZ(-150px) scaleY(0.95)";

    cards[a].style.opacity = "1";
    cards[b].style.opacity = "1";
    cards[c].style.opacity = "0.5";
    cards[d].style.opacity = "0";
    cards[e].style.opacity = "0";
    cards[f].style.opacity = "0.5";
    cards[g].style.opacity = "1";
    box[a].style.zIndex = "4";
    box[b].style.zIndex = "3";
    box[c].style.zIndex = "2";
    box[d].style.zIndex = "1";
    box[e].style.zIndex = "1";
    box[f].style.zIndex = "2";
    box[g].style.zIndex = "3";
}