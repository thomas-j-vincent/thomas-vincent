//document.getElementById("a").innerText = "Menu2";
console.log(window.innerWidth)
console.log((0.6* window.innerWidth))
console.log((0.6* window.innerWidth)- (150*4)/5)

console.log(5 + 6);


const boxes = document.querySelectorAll(".flex");
const boxHeight = 150; // box height under .flex in css
const gap = (window.innerWidth * 0.15) - 5;
//const maxScroll = 500;

const spacing = boxHeight + gap;

let scrollPosition = 0;
let specifier;

boxes.forEach(box => {

    box.addEventListener("mouseenter", function() {
        box.classList.add("hovered");
        updateBoxes();
    });
    box.addEventListener("mouseleave", function() {
        box.classList.remove("hovered");
        updateBoxes();
    });
    box.addEventListener("click", function(){
    if (box.classList.contains("a")){
        specifier = "a";
    } else if (box.classList.contains("b")){
        specifier = "b";
    } else {specifier = "c";
    }

        window.location.href = `page.html?q=${encodeURIComponent(specifier)}`;
        updateBoxes();
        console.log(specifier)
    })
});

function updateBoxes() {
    boxes.forEach((box, index) => {

        const rect = box.getBoundingClientRect();
        const fadeDistance = 200;

        const cycleHeight = boxes.length * spacing;

        const position = 
        ((index * spacing - scrollPosition + boxHeight) % cycleHeight + cycleHeight) % cycleHeight - boxHeight;

       // if (position < 0) {
        //    box.style.color = `#b6b6b6`;
            //box.style.opacity = 
            //`0.5`;
            // this was meconsole.log(box, "touching");
        //}
        //else{
          //  box.style.color = `black`;
           // box.style.opacity = 
           // `1`;
        //}

        let newPosition;
        let opacity = 1

        if (position < -boxHeight) {
            newPosition = position + boxes.length * spacing;
           // box.style.transform = `translateY(${newPosition}px)`;
            // this was meconsole.log(box, "cycled");
        } else{
            newPosition = position;
           // box.style.transform = `translateY(${position}px)`;
        }

        if(newPosition < 0) {
            opacity = Math.max(
                0,(newPosition + boxHeight)/ boxHeight
            );
        }
        const bottomPosition = position + boxHeight;
        if (bottomPosition > window.innerHeight) {
            opacity = Math.min(
                opacity, Math.max(0, (window.innerHeight - position) / boxHeight)
            );
        }

            box.style.opacity = opacity;

        if(box.classList.contains("hovered")) {
            box.style.transform = 
            `translateY(${newPosition}px) scale(1.0667)`;
        } else {
            box.style.transform = 
                `translateY(${newPosition}px)`;
        };
        //console.log("pos2", position)
    });
}

updateBoxes();

window.addEventListener("wheel", function(event) {
    event.preventDefault();
    
    scrollPosition += event.deltaY;

    updateBoxes();
}, {passive: false});

const menu = document.getElementById("menu");
const contact = document.getElementById("contact");
menu.addEventListener("click", function(){
    window.location.href = `menupage.html`;
});
contact.addEventListener("click", function(){
    window.location.href = `contactpage.html`
});




