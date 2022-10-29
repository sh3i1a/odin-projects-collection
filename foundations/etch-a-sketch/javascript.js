function grid(size) {
  const box = document.querySelector(".box");
  while (box.firstChild) {
    box.removeChild(box.lastChild);
  }
  for (let i = 0; i < size; i++) {
    const rows = document.createElement("div");
    rows.classList.add("rows");
    box.appendChild(rows);
    for (let i = 0; i < size; i++) {
      const cubes = document.createElement("div");
      cubes.classList.add("cubes");
      rows.appendChild(cubes);
    }
  }
}

function sizeChoice() {
  const size = document.querySelectorAll("input[name=size]");
  size.forEach((size) => {
    size.addEventListener("click", () => {
      grid(size.value);
    });
  });
}

function solid() {
  const cubes = document.querySelectorAll(".cubes");
  cubes.forEach((cube) => {
    cube.addEventListener("mouseover", () => {
      cube.setAttribute("style", "background : #bbadff");
    });
  });
}

function rainbow() {
  const cubes = document.querySelectorAll(".cubes");
  cubes.forEach((cube) => {
    let randColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase();
    cube.addEventListener("mouseover", () => {
      cube.setAttribute("style", `background : #${randColor}`);
    });
  });
}

function clearGrid() {
  const cubes = document.querySelectorAll(".cubes");
  cubes.forEach((cube) => {
    cube.setAttribute("style", "background : white");
  });
}

function colorInput(input) {
  if (input == "Solid") {
    solid();
  } else if (input == "Clear") {
    clearGrid();
  } else if (input == "Rainbow") {
    rainbow();
  }
}

function draw() {
  const colors = document.querySelectorAll("input[name=color]");
  colors.forEach((color) => {
    color.addEventListener("click", () => {
      colorInput(color.value);
    });
  });
}

grid(16);
solid();

sizeChoice();
draw();
