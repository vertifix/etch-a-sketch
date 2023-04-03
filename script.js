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
  }, false)
);
 
//  Draw Button

const drawButton = document.querySelector('.draw-button');
function useDrawButton() {
  penColor = "black";
}

drawButton.addEventListener("click", useDrawButton);


// clear screen button

const clearButton = document.querySelector('.clear-button');
function clearScreen() {

  pen.forEach (box => box.style.backgroundColor = "white");
}

clearButton.addEventListener("click", clearScreen)

// erase button

const eraseButton = document.querySelector('.erase-button');
function useEraseButton() {
  penColor = "white";
}

eraseButton.addEventListener("click", useEraseButton);

// rainbow button

const rainbowButton = document.querySelector('.rainbow-button');

function useRainbowButton() {

}