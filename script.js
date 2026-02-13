function showLove() {
  document.getElementById("loveMsg").innerHTML =
    "Forever yours ❤️ Happy Valentine’s Day Gulabo 💕";
}

// Floating Hearts
const hearts = document.querySelector('.hearts');
for (let i = 0; i < 30; i++) {
  let heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 5) + "s";
  hearts.appendChild(heart);
}

function startMusic() {
  const music = document.getElementById("bgMusic");
  music.volume = 0.4;
  music.play();

  document.getElementById("musicOverlay").style.display = "none";
}

function showLove() {
  document.getElementById("loveMsg").innerHTML =
    "Forever yours ❤️ Happy Valentine’s Day Gulabo 💕";
}

const letterText = `
Dear Gulabo,

From the moment you came into my life, everything felt warmer, brighter,
and more meaningful. You are not just someone I love — you are someone
who makes my heart feel at home.

Your smile has the power to calm my storms, and your presence makes even
ordinary days feel special. On this Valentine’s Day, I just want you to
know how deeply grateful I am for you.

You are my favorite person, my safe place, and my most beautiful blessing.
`;

let index = 0;
function typeLetter() {
  if (index < letterText.length) {
    document.getElementById("typedLetter").innerHTML +=
      letterText.charAt(index) === "\n" ? "<br>" : letterText.charAt(index);
    index++;
    setTimeout(typeLetter, 40);
  }
}

// start typing when page loads
window.addEventListener("load", typeLetter);

const valentineDate = new Date("February 14, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = valentineDate - now;

  if (diff > 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("timer").innerHTML =
      `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    document.getElementById("timer").innerHTML = "It’s Valentine’s Day ❤️";
  }
}, 1000);


