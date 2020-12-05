import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import Volume from "./components/Volume.js";
import DrumPad from "./components/DrumPad.js";
import Header from "./components/Header.js";
import BANKS from "./configs/banks.config.js";


function App() {
  const [currentPadBank, setCurrentPadBank] = useState(BANKS.A);
  const [display, setDisplay] = useState();
  const [volume, setVolume] = useState(1);

  const displayHandler = (input) => {
    setDisplay(input);
  }

  const clearDisplay = () => {
    setDisplay();
  }

  const setBank = (letter = 'A') => {
    setCurrentPadBank(BANKS[letter]);
    setDisplay(`Bank ${letter}`);
  }

  const pads = currentPadBank.map(
    ({ url, id, keyCode, keyTrigger }) => (
      <DrumPad
        clip={url}
        clipId={id}
        keyCode={keyCode}
        keyTrigger={keyTrigger}
        displayHandler={displayHandler}
        clearDisplay={clearDisplay}
        volume={volume}
      />
    )
  );

  return (
    <div className="machine-wrapper">
      <div className="drum-machine">
        <Header display={display} />
        <div className="main-block">
          <div className="side">
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
                <div onClick={() => setBank('A')} className={`button A ${currentPadBank === BANKS.A ? 'active' : ''}`}></div>
                <label className="selector-label">B</label>
                <div onClick={() => setBank('B')} className={`button B ${currentPadBank === BANKS.B ? 'active' : ''}`}></div>
                <label className="selector-label">C</label>
                <div onClick={() => setBank('C')} className={`button C ${currentPadBank === BANKS.C ? 'active' : ''}`}></div>
              </div>
            </div>
          </div>
          <div className="drum-pads" >{pads}</div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();