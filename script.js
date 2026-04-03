const garden = document.getElementById("garden");

function createFlower(x, y, delay) {
  setTimeout(() => {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.innerText = "🌻";

    flower.style.left = x + "px";
    flower.style.top = y + "px";

    garden.appendChild(flower);
  }, delay);
}

function drawHeart() {
  let delay = 0;

  const positions = [
    [150,100],[180,80],[210,100],
    [130,130],[160,120],[190,120],[220,130],
    [140,160],[170,150],[200,150],[230,160],
    [160,190],[190,190],
    [175,220]
  ];

  positions.forEach(pos => {
    createFlower(pos[0], pos[1], delay);
    delay += 200;
  });
}

// 🔥 Esto hace que inicie automático
window.onload = () => {
  drawHeart();
};
