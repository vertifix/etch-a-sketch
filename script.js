const container = document.querySelector(".container");

userGridChoice = 34

const gridDimensions = userGridChoice * userGridChoice;
const gridSize = 600


function makeBox() {
  
  for (let i = 0; i < gridDimensions; i++) {
    
    const box = document.createElement("div");
    box.style.backgroundColor = "white";
    // box.innerText = i;
    box.style.width = gridSize/userGridChoice+"px";
    box.style.height = gridSize/userGridChoice+"px";
    box.className = "box";
    box.id = i;
    container.appendChild(box);
  };
};

makeBox();

const pen = document.querySelectorAll(".box");
let penColor = "green";

pen.forEach (box =>
  
  box.addEventListener ( "mouseenter", (e) => {
    e.target.style.backgroundColor = penColor;
  },
  false
  ));
  
  
function clearScreen() {

  pen.forEach (box => box.style.backgroundColor = "white");
}


const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener("click", clearScreen)
