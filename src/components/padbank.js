import React from "react";
import DrumPad from "./drumpad.js";

function PadBank(props) {

    let padBank;
    padBank = props.currentPadBank.map((drumObj) => {
        return (
            <DrumPad
                clip={drumObj.url}
                clipId={drumObj.id}
                keyCode={drumObj.keyCode}
                keyTrigger={drumObj.keyTrigger}
                displayHandler={props.displayHandler}
                clearDisplay={props.clearDisplay}
                volume={props.volume}
            />
        );
    });

    return (<div id="drum-pads" >{padBank}</div>)
}


export default PadBank;