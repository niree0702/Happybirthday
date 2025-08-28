function playMusic() {
  const song = document.getElementById("birthdaySong");
  song.play();
  alert("🎉 Enjoy the Birthday Song!");
}

// Confetti Effect 🎊
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

for (let i = 0; i < 150; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 10 + 5,
    color: "hsl(" + Math.random() * 360 + ", 100%, 50%)",
    tilt: Math.random() * 10 - 10
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(p => {
    ctx.beginPath();
    ctx.lineWidth = p.r / 2;
    ctx.strokeStyle = p.color;
    ctx.moveTo(p.x + p.tilt + p.r, p.y);
    ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r);
    ctx.stroke();
  });
  updateConfetti();
}

function updateConfetti() {
  confetti.forEach(p => {
    p.y += Math.cos(p.d) + 1 + p.r / 2;
    p.x += Math.sin(0.5);

    if (p.y > canvas.height) {
      p.x = Math.random() * canvas.width;
      p.y = -10;
    }
  });
}

setInterval(drawConfetti, 20);
function playMusic() {
  const song = document.getElementById("birthdaySong");
  song.play();
  alert("🎶 Enjoy the Birthday Song!");
}

function openDoor() {
  document.querySelector(".left-door").style.transform = "translateX(-100%)";
  document.querySelector(".right-door").style.transform = "translateX(100%)";
  
  // Hide the button after opening
  document.querySelector(".open-btn").style.display = "none";

  // Show content after doors open
  setTimeout(() => {
    document.getElementById("doorWrapper").style.display = "none";
    document.getElementById("birthdayContent").style.display = "block";

    // Animate wish popping down
    document.querySelector(".wish-text").style.opacity = "1";
  }, 2000);
}

