import React from "react";
import DrumPad from "./drumpad.js";

function PadBank(props) {

    let padBank;
    padBank = props.currentPadBank.map((drumObj, i, padBankArr) => {
        return (
            <DrumPad
                clip={padBankArr[i].url}
                clipId={padBankArr[i].id}
                keyCode={padBankArr[i].keyCode}
                keyTrigger={padBankArr[i].keyTrigger}
                displayHandler={props.displayHandler}
                clearDisplay={props.clearDisplay}
                volume={props.volume}
            />
        );
    });

    return (<div id="drum-pads" >{padBank}</div>)
}


export default PadBank;