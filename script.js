const garden = document.getElementById("garden");

function createFlower(x, y) {
  const flower = document.createElement("div");
  flower.className = "flower";
  flower.innerText = "🌻";

  flower.style.left = x + "px";
  flower.style.top = y + "px";

  garden.appendChild(flower);
}

// Cuando tocas la pantalla
document.body.addEventListener("click", (e) => {
  createFlower(e.clientX, e.clientY);
});
