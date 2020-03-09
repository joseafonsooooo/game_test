var toon = document.getElementById("toon-canvas");
var body = document.getElementById("bodybody");

body.onmousemove = function(){
    var y = event.clientY;
    var x = event.clientX;
    
    var yTuned = y * 0.5;

    toon.style.transform = "translateY(" + yTuned + "px)";
};



