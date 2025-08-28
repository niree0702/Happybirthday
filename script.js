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

