// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let selector = document.getElementById("horn-select");
  let audio = document.querySelector("audio");
  let image = document.querySelector("img");
  selector.addEventListener("change", (opt) => {
    let val = opt.target.value;
    if (val === "air-horn"){
      audio.src = "assets/audio/air-horn.mp3";
      image.src = "assets/images/air-horn.svg";
      image.alt = "air horn";
    }
    if (val === "car-horn"){
      audio.src = "assets/audio/car-horn.mp3";
      image.src = "assets/images/car-horn.svg";
      image.alt = "car horn";
    }
    if (val === "party-horn"){
      audio.src = "assets/audio/party-horn.mp3";
      image.src = "assets/images/party-horn.svg";
      image.alt = "party horn";
    }
  });

  let slider = document.getElementById("volume");
  let volImg = document.querySelector("#volume-controls>img");
  slider.addEventListener("input", (event) => {
    let val = Number(event.target.value);
    if (val == 0){
      volImg.src = "assets/icons/volume-level-0.svg";
      volImg.alt = "Volume level 0";
    }
    else if (val < 33){
      volImg.src = "assets/icons/volume-level-1.svg";
      volImg.alt = "Volume level 1";
    }
    else if (val < 67){
      volImg.src = "assets/icons/volume-level-2.svg";
      volImg.alt = "Volume level 2";
    }
    else {
      volImg.src = "assets/icons/volume-level-3.svg";
      volImg.alt = "Volume level 3";
    }
    audio.volume = val/100;
  })
  
  let button = document.querySelector("button");
  const confetti = new JSConfetti();
  button.addEventListener("click", playSound)
  function playSound (){
    if (selector.value !== "select"){
      audio.play();
    }
    if (selector.value === "party-horn"){
      confetti.addConfetti();
    }
  }
}