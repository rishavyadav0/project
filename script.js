// script.js
const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");

noButton.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth * 0.8; // Random x position
  const y = Math.random() * window.innerHeight * 0.8; // Random y position

  // Animate the "No" button to a new position
  gsap.to(noButton, {
    x: x - noButton.offsetLeft,
    y: y - noButton.offsetTop,
    duration: 0.5,
  });
});

yesButton.addEventListener("click", () => {
  // Show a sweet alert or message
  alert("Yay! You said YES! ❤️ Gand mara!");
});
