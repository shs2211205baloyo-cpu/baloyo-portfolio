const MOTORCYLCEPARTS_NAME = "Motorcycleparts";
let hireClicked = false;


function buildGreeting(name) {
    return `Thanks for reaching out to ${MOTORCYLCEPARTS_NAME}, ${name}!`;
}


const hireBtn = document.getElementById("hire-btn");
const hireOutput = document.getElementById("hire-output");

heading.addEventListener("click", function () {
    heading.style.color = "red";
    console.log("Heading was clicked.")
});

toggleButton.addEventListener("click", function () {
    isOff = !isOff;

    if (isOff) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "white"
        body.style.color = "black";
    }
})




