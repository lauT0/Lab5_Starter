// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const select = document.getElementById("voice-select");
  const button = document.querySelector("button");
  let image = document.querySelector("img");
  let text = document.querySelector("textarea");
  let voices = [];
  let voice;

  window.onload = function populate() {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++){
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("value", voices[i].name);
      select.appendChild(option);
    }
    console.log(voices);
  }
  //synth.addEventListener("voiceschanged", populate);
  
  select.addEventListener("change", (event)=>{
    voice = event.target.value;
  });

  button.addEventListener("click", () => {
    let phrase = new SpeechSynthesisUtterance(text.value);
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === voice) {
        phrase.voice = voices[i];
      }
    }
    console.log(voice);
    synth.speak(phrase);
  });

  function talking() {
    if(synth.speaking === true){
      image.src = "assets/images/smiling-open.png";
    }
    else {
      image.src = "assets/images/smiling.png";
    }
  };

  setInterval(talking, 1);

}