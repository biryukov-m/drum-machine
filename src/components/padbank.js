import React from "react";
import DrumPad from "./drumpad.js";

function PadBank(props) {

    const PADS = props.currentPadBank.map(
        (drumObj) => (
            <DrumPad
                clip={drumObj.url}
                clipId={drumObj.id}
                keyCode={drumObj.keyCode}
                keyTrigger={drumObj.keyTrigger}
                displayHandler={props.displayHandler}
                clearDisplay={props.clearDisplay}
                volume={props.volume}
            />
        )
    );

    return (<div id="drum-pads" >{PADS}</div>)
}


export default PadBank;