let tileSize = 100;
let blockSize = 15;

let tile = document.createElement("div");
tile.style.position = "relative";
tile.style.width = `${tileSize}px`;
tile.style.height = `${tileSize}px`;
tile.style.backgroundColor = "#000";

let colors = ["pink", "red", "blue", "purple", "orange"];

colors.forEach((color, i) => {
  let numberOfSquares = 4 * Number(i + 1);

  if (numberOfSquares === 4) {
    let tile1 = document.createElement("div");
    tile1.classList.add("tile");
    tile1.style.backgroundColor = colors[i];
    tile1.style.top = `${tileSize / 2 - (blockSize + blockSize / 3)}px`;
    tile1.style.left = `${tileSize / 2 - blockSize / 2}px`;
    tile.appendChild(tile1);

    let tile2 = document.createElement("div");
    tile2.classList.add("tile");
    tile2.style.backgroundColor = colors[i];
    tile2.style.top = `${tileSize / 2 - blockSize / 2}px`;
    tile2.style.left = `${tileSize / 2 - (blockSize + blockSize / 3)}px`;
    tile.appendChild(tile2);

    let tile3 = document.createElement("div");
    tile3.classList.add("tile");
    tile3.style.backgroundColor = colors[i];
    tile3.style.bottom = `${tileSize / 2 - (blockSize + blockSize / 3)}px`;
    tile3.style.left = `${tileSize / 2 - blockSize / 2}px`;
    tile.appendChild(tile3);

    let tile4 = document.createElement("div");
    tile4.classList.add("tile");
    tile4.style.backgroundColor = colors[i];
    tile4.style.top = `${tileSize / 2 - blockSize / 2}px`;
    tile4.style.right = `${tileSize / 2 - (blockSize + blockSize / 3)}px`;
    tile.appendChild(tile4);
  }
});

document.body.appendChild(tile);
