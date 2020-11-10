import React from "react";
import DrumPad from "./drumpad.js";

class PadBank extends React.Component {

    render() {
        let padBank;
        padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
            return (
                <DrumPad
                    clip={padBankArr[i].url}
                    clipId={padBankArr[i].id}
                    keyCode={padBankArr[i].keyCode}
                    keyTrigger={padBankArr[i].keyTrigger}
                    displayHandler={this.props.displayHandler}
                    clearDisplay={this.props.clearDisplay}
                    volume={this.props.volume}
                />
            );
        });
        return <div id="drum-pads">{padBank}</div>;
    }
}

export default PadBank;