import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import PadBank from "./components/PadBank.js";
import Volume from "./components/Volume.js";
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

  return (
    <div className="machine-wrapper">
      <div className="drum-machine">
        <div className="header">
          <div className="logo">
            <span className="top">Biryukov</span>
            <span className="bottom">Professional</span>
          </div>
          <div className="display-wrapper">
            <span className="display">
              {display}
            </span>
          </div>
          <span className="model">Flex 2000</span>
        </div>
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
          <PadBank
            currentPadBank={currentPadBank}
            displayHandler={displayHandler}
            clearDisplay={clearDisplay}
            volume={volume}
          />
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();