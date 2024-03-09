const yesBtn = document.getElementById("yes");

const noBtn = document.getElementById("no");

const yayText = document.getElementById("yay");

const yayText1 = document.getElementById("yay1");

const can1 = document.getElementById("can1");

const can = document.getElementById("can");

const next = document.getElementById("next");

noBtn.addEventListener("click", () => {
  noBtn.style.display = "none";
});

yesBtn.addEventListener("click", () => {
  yayText.style.display = "block";

  yayText1.style.display = "block";

  can.style.display = "none";

  can1.style.display = "none";
});

yesBtn.addEventListener("click", () => {
  next.style.display = "block"

});
