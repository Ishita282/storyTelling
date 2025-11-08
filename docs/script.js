const storyText = document.getElementById("story-text");
const choices = document.getElementById("choices");
const background = document.getElementById("background");
const music = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");

let musicPlaying = false;

const story = {
  start: {
    text: "You wake up in a mysterious forest. The air is thick with mist, and two paths lie ahead.",
    image: "images/forest.jpg",
    options: [
      { text: "Take the left path", next: "leftPath" },
      { text: "Take the right path", next: "rightPath" }
    ]
  },
  leftPath: {
    text: "You follow the left path and find an old castle in ruins. A faint light flickers inside.",
    image: "images/castle.jpg",
    options: [
      { text: "Enter the castle", next: "castle" },
      { text: "Return to the forest", next: "start" }
    ]
  },
  rightPath: {
    text: "You take the right path and encounter a sleeping dragon guarding a treasure chest.",
    image: "images/dragon.jpg",
    options: [
      { text: "Try to sneak past", next: "sneak" },
      { text: "Attack the dragon", next: "fight" }
    ]
  },
  castle: {
    text: "Inside the castle, you find a mysterious book glowing on a pedestal. The story continues...",
    image: "images/castle.jpg",
    options: [{ text: "Restart", next: "start" }]
  },
  sneak: {
    text: "You successfully sneak past the dragon and open the chest — inside is a map of the world!",
    image: "images/dragon.jpg",
    options: [{ text: "Restart", next: "start" }]
  },
  fight: {
    text: "The dragon awakens! You fight bravely, but the flames engulf you. Your adventure ends here.",
    image: "images/dragon.jpg",
    options: [{ text: "Try again", next: "start" }]
  }
};

// Function to show scenes dynamically
function showScene(scene) {
  const currentScene = story[scene];
  storyText.textContent = currentScene.text;
  choices.innerHTML = "";

  // Change background image
  background.style.opacity = 0;
  setTimeout(() => {
    background.style.backgroundImage = `url(${currentScene.image})`;
    background.style.opacity = 1;
  }, 500);

  // Add buttons for choices
  currentScene.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.addEventListener("click", () => showScene(option.next));
    choices.appendChild(button);
  });
}

// Music control
musicToggle.addEventListener("click", () => {
  if (musicPlaying) {
    music.pause();
    musicPlaying = false;
    musicToggle.textContent = "🔇 Play Music";
  } else {
    music.play();
    musicPlaying = true;
    musicToggle.textContent = "🔊 Pause Music";
  }
});

// Start story
showScene("start");
