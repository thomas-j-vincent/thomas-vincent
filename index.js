import{updateBoxes} from "./functions.js";

document.getElementById("name2").innerText="Thomas Vincent";
document.getElementById("name3").innerText="Quantitative analyst";

const boxes = document.querySelectorAll(".flex");
const boxHeight = 150; // box height under .flex in css
const gap = (window.innerWidth * 0.15) - 5;
//const maxScroll = 500;

const spacing = boxHeight + gap;

let scrollPosition = 0;
const fadeDistance = 200;

let specifier;

boxes.forEach(box => {

    box.addEventListener("mouseenter", function() {
        box.classList.add("hovered");
        updateBoxes(scrollPosition, fadeDistance);
    });
    box.addEventListener("mouseleave", function() {
        box.classList.remove("hovered");
        updateBoxes(scrollPosition, fadeDistance);
    });
    box.addEventListener("click", function(){
    if (box.classList.contains("a")){
        specifier = "a";
    } else if (box.classList.contains("b")){
        specifier = "b";
    } else {specifier = "c";
    }

        window.location.href = `page.html?q=${encodeURIComponent(specifier)}`;
        updateBoxes(scrollPosition, fadeDistance);
        console.log(specifier)
    })
});


window.addEventListener("wheel", function(event) {
    event.preventDefault();
    
    scrollPosition += event.deltaY;

    updateBoxes(scrollPosition, fadeDistance);
}, {passive: false});

const menu = document.getElementById("menu");
const contact = document.getElementById("contact");
menu.addEventListener("click", function(){
    window.location.href = `menupage.html`;
});
contact.addEventListener("click", function(){
    window.location.href = `contactpage.html`
});

updateBoxes(scrollPosition, fadeDistance);
