import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import PadBank from "./components/padbank.js";
import Volume from "./components/volume.js";

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://intro.novationmusic.com/packs/analogue-jewels/Drums1.wav",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://intro.novationmusic.com/packs/analogue-jewels/Drums2.wav",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://intro.novationmusic.com/packs/analogue-jewels/Drums3.wav",
  },
  {
    keyCode: 82,
    keyTrigger: "R",
    id: "Heater-3",
    url: "https://intro.novationmusic.com/packs/analogue-jewels/B5.wav",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://intro.novationmusic.com/packs/analogue-jewels/B3.wav",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://intro.novationmusic.com/packs/analogue-jewels/B4.wav",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://intro.novationmusic.com/packs/analogue-jewels/B7.wav",
  },
  {
    keyCode: 70,
    keyTrigger: "F",
    id: "Open-HH",
    url: "https://intro.novationmusic.com/packs/analogue-jewels/B6.wav",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url:
      "https://intro.novationmusic.com/packs/analogue-jewels/Freeze%206-Audio.wav",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url:
      "https://intro.novationmusic.com/packs/analogue-jewels/Freeze%206-Audio-3.wav",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url:
      "https://intro.novationmusic.com/packs/analogue-jewels/Freeze%206-Audio-1.wav",
  },
  {
    keyCode: 86,
    keyTrigger: "V",
    id: "Closed-HH",
    url:
      "https://intro.novationmusic.com/packs/analogue-jewels/Freeze%206-Audio-5.wav",
  },
];

function App() {
  const [currentPadBank, setCurrentPadBank] = useState(bankOne);
  const [display, setDisplay] = useState(' ');
  const [volume, setVolume] = useState(1);
  if (false) {
    setCurrentPadBank(bankOne);
  }
  function displayHandler(input) {
    setDisplay(input);
  }

  function clearDisplay() {
    setDisplay(' ');
  }

  return (
    <div className="machine-wrapper">
      <div id="drum-machine">
        <div id="header">
          <div id="logo">
            <span className="top">Biryukov</span>
            <span className="bottom">Professional</span>
          </div>
          <div id="display-wrapper">
            <span id="display" className="animate__animated animate__fadeIn">
              {display}
            </span>
          </div>
          <span id="model">Flex 2000</span>
        </div>
        <div id="main-block">
          <div id="side">
            <Volume
              displayHandler={displayHandler}
              volume={volume}
              setVolume={setVolume}
            />
            <div className="indicators">1 2 3</div>
          </div>
          <PadBank
            currentPadBank={currentPadBank}
            displayHandler={displayHandler}
            clearDisplay={clearDisplay}
            volume={volume}
          />
        </div>
        <div id="footer"></div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();