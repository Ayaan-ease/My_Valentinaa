const text = document.getElementById("text");
const gif = document.getElementById("gif");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const inbox = document.getElementById("inbox");
const submitAnswer = document.getElementById("submitAnswer");
const answer = document.getElementById("answer");

/* ---------------- GIF LINKS ---------------- */
/* Use DIRECT .gif links here only! */
const noResponses = [
  { text: "Are you sure?", gif: "https://tenor.com/nwEVbmWpvQv.gif" },
  { text: "Don't do this to me!!", gif: "https://tenor.com/dDW7sB0YZhV.gif" },
  { text: "Yaar itne nakhre!!!", gif: "https://tenor.com/edX4ARdm6wr.gif" }
];

const yesValentine = { 
  text: "I knew it, you can't live without me💖", 
  gif: "https://tenor.com/jPvrBK1P04c.gif" 
};

const holdHandNo = { 
  text: "Are you really sure? 💔", 
  gif: "https://tenor.com/lLT8Mm6u0xO.gif" 
};

const finalYes = { 
  text: "Come here… 🥹🤍", 
  gif: "https://tenor.com/bUlkl.gif" 
};

let noCount = 0;
let stage = 1;

/* ---------------- NO BUTTON ---------------- */
noBtn.addEventListener("mouseover", () => {
  if (stage === 1) {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  }
});

noBtn.addEventListener("click", () => {
  if (stage === 1) {
    if (noCount < noResponses.length) {
      text.innerText = noResponses[noCount].text;
      gif.src = noResponses[noCount].gif;
      noCount++;
    }
  } else if (stage === 2) {
    text.innerText = holdHandNo.text;
    gif.src = holdHandNo.gif;
  }
});

/* ---------------- YES BUTTON ---------------- */
yesBtn.addEventListener("click", () => {
  if (stage === 1) {
    text.innerText = yesValentine.text;
    gif.src = yesValentine.gif;
    stage = 2;

    // hide old buttons and show inbox after 2s
    setTimeout(() => {
      yesBtn.style.display = "none";
      noBtn.style.display = "none";
      inbox.classList.remove("hidden");
    }, 2000);

  }
});

/* ---------------- SUBMIT INBOX ---------------- */
submitAnswer.addEventListener("click", () => {
  const val = answer.value.toLowerCase();
  if (val.includes("yes") || val.includes("haan") || val.includes("ok")) {
    inbox.classList.add("hidden");
    text.innerText = finalYes.text;
    gif.src = finalYes.gif;
  } else {
    inbox.classList.add("hidden");
    text.innerText = holdHandNo.text;
    gif.src = holdHandNo.gif;
  }
});
