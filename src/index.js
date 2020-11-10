import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import PadBank from "./components/padbank.js";

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 1,
      currentPadBank: bankOne,
      display: " ",
    };
    this.volumeHandler = this.volumeHandler.bind(this);
    this.displayHandler = this.displayHandler.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
  }

  displayHandler(input) {
    this.setState({ display: input });
  }

  clearDisplay() {
    this.setState({ display: "  " });
  }

  volumeHandler(e) {
    this.setState({
      volume: e.target.value,
    });
    this.displayHandler("Volume: " + Math.round(e.target.value * 100) + "%");
  }

  render() {
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
                {this.state.display}
              </span>
            </div>
            <span id="model">Covid202</span>
          </div>
          <div id="main-block">
            <div id="side">
              <div className="volume">
                <label htmlFor="volume">Volume</label>
                <input
                  onChange={this.volumeHandler}
                  id="volume"
                  min="0"
                  max="1"
                  step="0.05"
                  type="range"
                  value={this.state.volume}
                ></input>
              </div>
              <div className="indicators">1 2 3</div>
            </div>

            <PadBank
              currentPadBank={this.state.currentPadBank}
              displayHandler={this.displayHandler}
              clearDisplay={this.clearDisplay}
              volume={this.state.volume}
            />

          </div>

          <div id="footer"></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();