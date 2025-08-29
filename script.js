// 🎵 Play Music
function playMusic() {
  const song = document.getElementById("birthdaySong");
  song.play();
}

// 🎇 Fade-in animation when scrolling
const faders = document.querySelectorAll(".fade");
window.addEventListener("scroll", () => {
  faders.forEach(fade => {
    const rect = fade.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      fade.classList.add("visible");
    }
  });
});
// 🚪 Door animation after page load
window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.classList.add("opened");
  }, 1500); // wait 1.5s then swing open
});


