//document.getElementById("a").innerText = "Menu2";
const button = document.getElementById("b");
document.getElementById("name2").innerText="Thomas Vincent";
document.getElementById("name3").innerText="Quantitative anlayst";
button.addEventListener('click', function() {
    window.location.href = "index.html";
});

console.log(5 + 6);

const boxes = document.querySelectorAll(".flex");

const boxHeight = 150; // box height under .flex in css
const gap = 100;
//const maxScroll = 500;

const spacing = boxHeight + gap;

let scrollPosition = 0;

function updateBoxes() {
    boxes.forEach((box, index) => {

        const cycleHeight = boxes.length * spacing;

        const position = 
        ((index * spacing - scrollPosition + boxHeight) % cycleHeight + cycleHeight) % cycleHeight - boxHeight;

        if (position < 0) {
            box.style.color = `red`;
            // this was meconsole.log(box, "touching");
        }
        else{
            box.style.color = `black`;
        }
        if (position < -boxHeight) {
            const newPosition = position + boxes.length * spacing;
            box.style.transform = `translateY(${newPosition}px)`;
            // this was meconsole.log(box, "cycled");
        } else{
            box.style.transform = `translateY(${position}px)`;
        }
        //console.log("pos2", position)
    });
}

updateBoxes();

window.addEventListener("wheel", function(event) {
    event.preventDefault();
    
    scrollPosition += event.deltaY;
    //console.log(event.deltaY)

   // scrollPosition = Math.max(
     //   0,
       // Math.min(this.scrollPosition, maxScroll)
   // );

    updateBoxes();
}, {passive: false});

