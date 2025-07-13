const popups = [
  { img: "media/Group-of-mangoes-DITT-owned-1669748633.jpg", sound: "media/mango-kid.mp3" },
  { img: "media/Anonymous-Flag-of-the-state-of-Ohio-1974856329.png", sound: "media/down-in-ohio.mp3" },
  { img: "media/tenor-673196112.gif", sound: "media/kitty-cat-dance-made-with-Voicemod.mp3" },
  { img: "media/meme-1887068684.gif", sound: "media/tue-feb-04-2020-audiotrimmer.mp3" },
  { img: "media/P7Ykax-1124871301.jpg", sound: "media/troll-laugh.mp3" },
  { img: "media/trollface_PNG17-1603605187.png", sound: "media/oh-no-no-no-no-laugh_sejx5Bk.mp3" },
  { img: "media/funny-skeleton-pictures-shzp2lnxkqpznef9-903084454.jpg", sound: "media/skeleton-roasting-minecraft-meme.mp3" },
  { img: "media/9756-1329287651.jpg", sound: "media/wow-doge.mp3" },
  { img: "media/b9f8533df8b9866-2722191087.gif", sound: "media/boing-sound.mp3" },
  { img: "media/banana-4131894077.gif", sound: "media/peanut_butter_jelly_time.mp3" },
  { img: "media/ur-mom-487031406.gif", sound: "media/vocaroo_s1zgeyzcwusq.mp3" },
  { img: "media/meme-memes-1964738259.gif", sound: "media/amogus1.mp3" },
  { img: "media/toothless-toothless-dancing-meme-gif-1876477232.gif", sound: "media/toothless-dancing-made-with-Voicemod.mp3" },
  { img: "media/holy_moly-210140420.jpg", sound: "media/holy-moly-made-with-Voicemod.mp3" },
  { img: "media/meme-985979463.gif", sound: "media/watching-it.mp3" },
  { img: "media/dog-cursed-1578987351.gif", sound: "media/vine-boom-sound-effect(chosic.com).mp3" }
  { img: "media/flag-of-usa-blue-3840x2160-9435-1282911726.jpg", sound: "media/star-spangeled-banner-earrape-made-with-Voicemod.mp3" }
];

const favicons = ["media/big_grin_by_rober_raik-d4cw3lk-765335673.png", "media/trollface_PNG17-1603605187.png"];
const titles = ["Why Did You Click That?", "Error 404: Brain Not Found", "LOLOLOLOLOLOLOLOLOLOLOL", "UR DOOMED", "Meltdown.exe Running", "This is Fine🔥", "💥SYSTEM FAILURE", "👹THE BUTTON WAS A MISTAKE", "🔥 Welcome to Popocalypse!", "💀💀💀💀💀"];

function launchPopup() {
  const item = popups[Math.floor(Math.random() * popups.length)];
  const w = 300, h = 300;
  const left = Math.floor(Math.random() * screen.width);
  const top = Math.floor(Math.random() * screen.height);

  const win = window.open("", "", `width=${w},height=${h},left=${left},top=${top}`);
  if (!win) return;

  win.document.body.innerHTML = `
    <body style="margin:0; background:black; display:flex; align-items:center; justify-content:center;">
      <img src="${item.img}" style="max-width:100%;">
      <audio autoplay loop src="${item.sound}"></audio>
    </body>
  `;

  let dx = Math.random() * 10 + 2;
  let dy = Math.random() * 10 + 2;

  const moveInterval = setInterval(() => {
    try {
      win.moveBy(dx, dy);
      if (win.screenX + w > screen.width || win.screenX < 0) dx = -dx;
      if (win.screenY + h > screen.height || win.screenY < 0) dy = -dy;
    } catch {
      clearInterval(moveInterval);
    }
  }, 40);

  const resizeInterval = setInterval(() => {
    try {
      let rw = Math.floor(Math.random() * 400 + 100);
      let rh = Math.floor(Math.random() * 400 + 100);
      win.resizeTo(rw, rh);
    } catch {
      clearInterval(resizeInterval);
    }
  }, 150);
}

document.getElementById("startChaos").addEventListener("click", () => {
  launchPopup();
  setInterval(launchPopup, 4000);
  setInterval(() => {
    document.title = titles[Math.floor(Math.random() * titles.length)];
    document.getElementById("favicon").href = favicons[Math.floor(Math.random() * favicons.length)];
  }, 2500);
});

function spawnExtraButtons() {
  const btn = document.createElement("button");
  btn.textContent = "UNLEASH CHAOS";
  btn.style.position = "absolute";
  btn.style.left = Math.random() * window.innerWidth + "px";
  btn.style.top = Math.random() * window.innerHeight + "px";
  btn.style.backgroundColor = "darkred";
  btn.style.color = "white";
  btn.onclick = () => launchPopup();
  document.body.appendChild(btn);
}

function spawnFloatingSkull() {
  const skull = document.createElement("div");
  skull.textContent = "💀";
  skull.style.position = "fixed";
  skull.style.left = Math.random() * window.innerWidth + "px";
  skull.style.top = Math.random() * window.innerHeight + "px";
  skull.style.fontSize = "3em";
  skull.style.animation = "floatSkull 5s ease-out";
  document.body.appendChild(skull);

  setTimeout(() => skull.remove(), 5000);}

const style = document.createElement("style");
style.textContent = `
@keyframes floatSkull {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-100px); opacity: 0; }
}`;
document.head.appendChild(style);

setInterval(spawnFloatingSkull, 1000);

function startRainbowFlash() {
  const colors = [
    "red", "orange", "yellow", "green", "blue", "indigo", "violet",
    "magenta", "cyan", "lime", "pink", "white", "black"
  ];
  let index = 0;

  setInterval(() => {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
  }, 80);
}

function spawnVirusWarning() {
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.backgroundColor = "black";
  overlay.style.color = "lime";
  overlay.style.fontFamily = "monospace";
  overlay.style.fontSize = "2em";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.zIndex = 9999;
  overlay.textContent = "💀 SYSTEM INFECTED 💀\nPress ESC to activate self-destruct protocol...";
  document.body.appendChild(overlay);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      overlay.textContent = "☠️ INITIATING SELF-DESTRUCT ☠️";
      setTimeout(() => overlay.remove(), 3000);
    }
  });
}

let popupWindows = [];
function launchPopup() {
  const win = window.open("", "", "width=300,height=300");
  if (win) popupWindows.push(win);
}
const closeAllBtn = document.createElement("button");
closeAllBtn.textContent = "CLOSE EVERYTHING";
closeAllBtn.style.position = "fixed";
closeAllBtn.style.top = "20px";
closeAllBtn.style.right = "20px";
closeAllBtn.style.padding = "15px 25px";
closeAllBtn.style.fontSize = "1.5em";
closeAllBtn.style.backgroundColor = "black";
closeAllBtn.style.color = "red";
closeAllBtn.style.border = "3px solid red";
closeAllBtn.style.zIndex = "9999";
closeAllBtn.onclick = () => {
  popupWindows.forEach(win => {
    try { win.close(); } catch {}
  });
  popupWindows = [];
  document.title = "💀 ALL CLOSED";
  document.body.style.backgroundColor = "black";

  const splash = document.createElement("div");
  splash.textContent = "CHAOS DESTROYED";
  splash.style.position = "fixed";
  splash.style.top = "0";
  splash.style.left = "0";
  splash.style.width = "100vw";
  splash.style.height = "100vh";
  splash.style.background = "black";
  splash.style.color = "red";
  splash.style.fontSize = "5em";
  splash.style.display = "flex";
  splash.style.alignItems = "center";
  splash.style.justifyContent = "center";
  splash.style.zIndex = "9999";
  splash.style.fontFamily = "Impact, sans-serif";
  splash.style.textShadow = "0 0 20px crimson";
  document.body.appendChild(splash);
};
document.body.appendChild(closeAllBtn);

document.querySelectorAll("*").forEach(el => {
  if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
    el.textContent = el.textContent.split("").reverse().join("");
  }
});

document.querySelectorAll("*").forEach(el => {
  el.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;
});

document.querySelectorAll("*").forEach(el => {
  el.style.fontSize = `${Math.floor(Math.random() * 40) + 10}px`;
});

function spawnExplosion() {
  const explosion = document.createElement("div");
  explosion.style.position = "fixed";
  explosion.style.left = Math.random() * window.innerWidth + "px";
  explosion.style.top = Math.random() * window.innerHeight + "px";
  explosion.style.width = "100px";
  explosion.style.height = "100px";
  explosion.style.borderRadius = "50%";
  explosion.style.background = "radial-gradient(circle, red 0%, orange 40%, yellow 60%, transparent 100%)";
  explosion.style.boxShadow = "0 0 40px crimson";
  explosion.style.animation = "boom 0.5s ease-out";
  explosion.style.zIndex = 9999;
  document.body.appendChild(explosion);

  setTimeout(() => explosion.remove(), 600);
}

const style = document.createElement("style");
style.textContent = `
@keyframes boom {
  0% { transform: scale(0); opacity: 1; }
  80% { transform: scale(2); opacity: 1; }
  100% { transform: scale(2.5); opacity: 0; }
}`;
document.head.appendChild(style);

setInterval(spawnExplosion, 1000);

document.getElementById("startChaos").addEventListener("click", () => {
  launchPopup();
  startRainbowFlash();
  flingTextGravity();
  setInterval(launchPopup, 4000);
  setInterval(() => {100
    document.title = titles[Math.floor(Math.random() * titles.length)];
    document.getElementById("favicon").href = favicons[Math.floor(Math.random() * favicons.length)];
  }, 2500);
});