const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const charset = "アイウエオサシスセソカキクケコユヨ01@#$%&*";
let fontSize = 11;

let columns = Math.floor(canvas.width / fontSize);


const layers = [
  { speed: 1, color: "rgba(150,0,30,0.25)", blur: 6 },  // back-back 
  { speed: 2, color: "rgba(255,0,60,0.6)", blur: 4 },   // back neon 
  { speed: 2.5, color: "rgba(0,255,255,0.4)", blur: 2 },  // mid 
  { speed: 3, color: "rgba(150,255,255,0.9)", blur: 0 } // front less bright
];

const drops = layers.map(() =>
  Array(columns).fill(1)
);

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  layers.forEach((layer, i) => {
    ctx.font = fontSize + "px monospace";
    ctx.fillStyle = layer.color;
    ctx.shadowBlur = layer.blur;
    ctx.shadowColor = layer.color;

    drops[i].forEach((y, x) => {
      const char = charset[Math.floor(Math.random() * charset.length)];

      if (i === layers.length - 1 && Math.random() > 0.5) return;

      ctx.fillText(char, x * fontSize, y * fontSize);

      if (y * fontSize > canvas.height && Math.random() > 0.98) {
        drops[i][x] = 0;
      }
      drops[i][x] += layer.speed;
    });
  });

  glitch();
}

function glitch() {
  if (Math.random() > 0.99) {
    const x = Math.random() * canvas.width;
    const w = 80 + Math.random() * 120;
    const y = Math.random() * canvas.height;
    const h = 10;

    ctx.fillStyle = "rgba(0,255,255,0.15)";
    ctx.fillRect(x, y, w, h);
  }
}

setInterval(draw, 40);

window.addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  columns = Math.floor(canvas.width / fontSize);
  layers.forEach((_, i) => {
    drops[i] = Array(columns).fill(1);
  });
});


document.addEventListener('DOMContentLoaded', function () {

  const skillItems = document.querySelectorAll('.skill-item');


  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
 
        const skillBar = entry.target.querySelector('.skill-bar');

        skillBar.style.width = '0%';

        const targetWidth = skillBar.getAttribute('style').match(/width:\s*(\d+)%/)[1];

        setTimeout(() => {
          skillBar.style.width = targetWidth + '%';
        }, 100);
      }
    });
  }, {
    threshold: 0.5 
  });

 
  skillItems.forEach(item => {
    observer.observe(item);
  });

});








