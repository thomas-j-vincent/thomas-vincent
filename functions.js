const boxes = document.querySelectorAll(".flex");
const boxHeight = 150; // box height under .flex in css
const gap = (window.innerWidth * 0.15) - 5;

const spacing = boxHeight + gap;

export function updateBoxes(scrollPosition, fadeDistance) {
    boxes.forEach((box, index) => {

        const rect = box.getBoundingClientRect();

        const cycleHeight = boxes.length * spacing;

        const position = 
        ((index * spacing - scrollPosition + boxHeight) % cycleHeight + cycleHeight) % cycleHeight - boxHeight;

        let newPosition;
        let opacity = 1

        if (position < -boxHeight) {
            newPosition = position + boxes.length * spacing;
        } else{
            newPosition = position;
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
    });
}