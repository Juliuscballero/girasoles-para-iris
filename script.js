const title = document.getElementById("title");
const story = document.getElementById("story");
const garden = document.getElementById("garden");
const animals = document.getElementById("animals");

// 🌷 flores
function createFlower(x, y, delay) {
  setTimeout(() => {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.innerText = "🌷";
    flower.style.left = x + "px";
    flower.style.top = y + "px";
    garden.appendChild(flower);
  }, delay);
}

// 🐾 animales
function addAnimal(emoji, x, y, delay) {
  setTimeout(() => {
    const a = document.createElement("div");
    a.className = "animal";
    a.innerText = emoji;
    a.style.left = x + "px";
    a.style.top = y + "px";
    animals.appendChild(a);
  }, delay);
}

// ✍️ escribir texto tipo máquina
function typeText(text, speed = 50) {
  story.innerHTML = "";
  let i = 0;
  const interval = setInterval(() => {
    story.innerHTML += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

// 💛 secuencia completa
function startExperience() {

  title.innerText = "Para Iris 💛";

  // 🌷 flores tipo corazón
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
    delay += 150;
  });

  // 📝 historia
  setTimeout(() => {
    typeText("No es solo un detalle… es todo lo que siento por ti.");
  }, 2000);

  setTimeout(() => {
    typeText("Cada mes contigo es algo que no quiero perder.");
  }, 6000);

  setTimeout(() => {
    typeText("Así como estos tulipanes… quiero construir algo bonito contigo.");
  }, 10000);

  // 🐾 animales (detalles personales)
  addAnimal("🐱", 50, 400, 12000);
  addAnimal("🐶", 250, 420, 13000);
  addAnimal("🐢", 150, 450, 14000);
  addAnimal("🐟", 80, 500, 15000);
  addAnimal("🐟", 220, 520, 15500);

  // 💥 final
  setTimeout(() => {
    typeText("Y si algún día dudas… aquí estoy. Contigo. 💛");
  }, 18000);
}

// 🚀 automático
window.onload = startExperience;
