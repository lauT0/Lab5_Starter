// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const select = document.getElementById("voice-select");
  const button = document.querySelector("button");
  let text = document.querySelector("textarea");
  let voices = synth.getVoices();
  for (let i = 0; i < voices.length; i++){
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("value", voices[i].name);
    select.appendChild(option);
  }
  console.log(voices);
  select.addEventListener("change", (event)=>{
    let voice = event.target.value;
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === voice) {
        utterThis.voice = voices[i];
      }
    }
    console.log(voice);
  });

  button.addEventListener("click", () => {
    let phrase = new SpeechSynthesisUtterance(text.value);
    synth.speak(phrase);
  });

}