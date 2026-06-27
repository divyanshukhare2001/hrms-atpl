const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

window.addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
});

let particles = [];

function init() {
  particles = Array.from({ length: 200 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6,
    r: Math.random() * 2
  }));
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let p of particles) {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(59,130,246,0.4)";
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

init();
draw();
 
 /* ── SLIDER ── */
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let cur = 0, timer;

function goTo(n) {
  slides[cur].classList.remove('active');
  dots[cur].classList.remove('active');
  cur = (n + slides.length) % slides.length;
  slides[cur].classList.add('active');
  dots[cur].classList.add('active');
}

function nextSlide() { goTo(cur + 1); }

timer = setInterval(nextSlide, 4200);

dots.forEach(d => d.addEventListener('click', () => {
  clearInterval(timer);
  goTo(+d.dataset.i);
  timer = setInterval(nextSlide, 4200);
}));

