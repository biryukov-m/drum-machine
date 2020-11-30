import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import PadBank from "./components/padbank.js";
import Volume from "./components/volume.js";
import banks from "./components/banks.config.js";

function App() {
  const [currentPadBank, setCurrentPadBank] = useState(banks.A);
  const [display, setDisplay] = useState(' ');
  const [volume, setVolume] = useState(1);

  function displayHandler(input) {
    setDisplay(input);
  }

  function clearDisplay() {
    setDisplay(' ');
  }

  function setBank(letter = 'A') {
    let bank;
    switch (letter) {
      case 'A':
        bank = banks.A;
        break
      case 'B':
        bank = banks.B;
        break
      case 'C':
        bank = banks.C;
        break
      default:
        bank = banks.A;
    }
    setCurrentPadBank(bank);
    setDisplay('Bank ' + letter);
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

            <div className="bank">
              <hr className="left"></hr>
              <hr className="right"></hr>
              <div className="label-wrapper">
                <label>
                  Pad bank
                </label>
              </div>

              <div className="bank-selectors">
                <label className="selector-label">A</label>
                <div onClick={() => setBank('A')} className={currentPadBank === banks.A ? "button A active" : "button A"}></div>
                <label className="selector-label">B</label>
                <div onClick={() => setBank('B')} className={currentPadBank === banks.B ? "button B active" : "button B"}></div>
                <label className="selector-label">C</label>
                <div onClick={() => setBank('C')} className={currentPadBank === banks.C ? "button C active" : "button C"}></div>
              </div>
            </div>
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