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
// 🚪 Door animation after page load
window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.classList.add("opened");
  }, 1500); // wait 1.5s then swing open
});

// 🎶 Play music (button in music section)
function playMusic() {
  const song = document.getElementById("birthdaySong");
  song.play();
  alert("🎶 Music is playing!");
}

// 🎥 Autoplay video after doors open (optional)
window.addEventListener("load", () => {
  setTimeout(() => {
    const video = document.querySelector("video");
    if (video) {
      // Uncomment if you want autoplay muted first
      // video.muted = true;
      // video.play();

      // Or just keep controls for manual play
      console.log("Video ready with controls.");
    }
  }, 3000);
});
// 🚪 Door animation after page load
window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.classList.add("opened");
  }, 1500); 
});

// 🎶 Play music (button in music section)
function playMusic() {
  const song = document.getElementById("birthdaySong");
  song.play();
  alert("🎶 Music is playing!");
}

// 🎥 Prepare videos (manual play recommended)
window.addEventListener("load", () => {
  setTimeout(() => {
    const videos = document.querySelectorAll("video");
    videos.forEach((video, i) => {
      console.log(`Video ${i+1} ready with controls.`);
      // If you want autoplay muted:
      // video.muted = true;
      // video.play();
    });
  }, 3000);
});
// 🚪 Door animation
window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.classList.add("opened");

    // 🎊 Trigger confetti
    launchConfetti();

    // Smooth scroll to first wish section
    document.querySelector(".wish").scrollIntoView({ behavior: "smooth" });
  }, 1500);
});

// 🎶 Play music
function playMusic() {
  const song = document.getElementById("birthdaySong");
  song.play();
  alert("🎶 Music is playing!");
}

// 🎊 Confetti Animation
function launchConfetti() {
  const confetti = document.getElementById("confetti");
  for (let i = 0; i < 100; i++) {
    let span = document.createElement("span");
    span.className = "confetti-piece";
    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDelay = Math.random() * 3 + "s";
    confetti.appendChild(span);
  }
}
window.addEventListener("load", () => {
  const doorSound = new Audio("door-creak.mp3"); // put your door sound file
  setTimeout(() => {
    document.body.classList.add("opened");
    doorSound.play();
    launchConfetti();
    document.querySelector(".wish").scrollIntoView({ behavior: "smooth" });
  }, 1500);
});





