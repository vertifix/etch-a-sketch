const container = document.querySelector(".container");
gridSize = 16 * 16 + 16;


function makeBox() {
  
  for (let i = 0; i < gridSize; i++) {
    
    const box = document.createElement("div");
    box.style.backgroundColor = "red";
    box.innerText = i;
    box.style.width = "2em";
    box.style.height = "2em";
    box.className = "box";
    box.id = i;
    container.appendChild(box);
  };
};

makeBox();

const pen = document.querySelectorAll(".box");

pen.forEach (box =>

  box.addEventListener ( "mouseenter", (e) => {
    e.target.style.backgroundColor = "blue";
  },
  false
)
);


