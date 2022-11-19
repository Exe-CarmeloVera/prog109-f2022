

function cleanDots (event) {
    var divs = document.getElementsByTagName("div");
    for (var index = divs.length - 1; index >= 0; index--) {
        divs[index].parentNode.removeChild(divs[index]);
    }

    // Let us stop the propagation of events.  The stopPropagation method on the event object to prevent handlers “further up” from receiving the event. 
    
    event.stopPropagation();
}

function ignoreClicks(event){
    event.stopPropagation();
}

function addDot(event) {
    var dot = document.createElement("div");
    let radius = document.getElementById("radius").value;
    dot.className = "dot";
    dot.style.left = (event.pageX - radius) + "px";
    dot.style.top = (event.pageY - radius) + "px";
    dot.style.background = document.getElementById("color").value;
    dot.style.width = (radius * 2) + "px";
    dot.style.height = (radius * 2) + "px";
    document.body.appendChild(dot);
}


var  mybutton = document.querySelector("button");

//This section cleans the screen
mybutton.addEventListener("click", cleanDots);

document.getElementById("color").addEventListener("click", ignoreClicks);

document.getElementById("radius").addEventListener("click", ignoreClicks);

//This will add the event "Click" to the document (page). So anytime the user click, a new dot is going to be added.
document.addEventListener("click", addDot);