import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  let audio = props.phonetic.audio;

  function playAudio() {
    const audioSound = new Audio(audio);
    audioSound.play();
  }

  return (
    <div className="Phonetic">
      <li class="fas fa-volume-up" onClick={playAudio}></li>
      <span className="text"> {props.phonetic.text}</span>
    </div>
  );
}
