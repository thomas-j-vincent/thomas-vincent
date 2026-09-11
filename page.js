import{updateBoxes} from "./functions.js";
const boxes = document.querySelectorAll(".flex");
const boxHeight = 150; // box height under .flex in css
const gap = (window.innerWidth * 0.15) - 5;
//const maxScroll = 500;

const spacing = boxHeight + gap;

let scrollPosition = 0;
const fadeDistance = 400;
let specifier;

const maxScroll = boxes.length * spacing
const minScroll = -maxScroll;
console.log(maxScroll)
boxes.forEach(box => {

    box.addEventListener("mouseenter", function() {
        box.classList.add("hovered");
        console.log("hovered")
        //updateBoxes(scrollPosition, fadeDistance);
        console.log("lets test this")
        scrollOnly()
    });
    box.addEventListener("mouseleave", function() {
        box.classList.remove("hovered");
      //  updateBoxes(scrollPosition), fadeDistance;
        scrollOnly()
    });
    box.addEventListener("click", function(){
    if (box.classList.contains("a")){
        specifier = "a";
    } else if (box.classList.contains("b")){
        specifier = "b";
    } else {specifier = "c";
    }

        window.location.href = `page.html?q=${encodeURIComponent(specifier)}`;
    //    updateBoxes(scrollPosition, fadeDistance);
        scrollOnly()
        console.log(specifier)
    })
});


window.addEventListener("wheel", function(event) {
    event.preventDefault();
    
    scrollPosition = scrollPosition + event.deltaY;

    if (scrollPosition < maxScroll) and (scrollPosition > minScroll)
        {
        scrollOnly();
    } else {
        console.log("max scroll reached");
    }

  //  updateBoxes(scrollPosition, fadeDistance);
}, {passive: false});

function scrollOnly() {
    boxes.forEach((box, index) => {
        console.log(scrollPosition);
        box.style.transform = `translateY(${scrollPosition}px)`;
        //console.log(event.deltaY)
    });
}

//updateBoxes(scrollPosition, fadeDistance);
//loop for number of boxes
//get number of boxes or rows, put in an Array. 
//count each row/box. 
//count when they go off screen
//do not replace
// when  you scroll down replace them
//
