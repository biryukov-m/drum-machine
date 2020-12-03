import React from "react";
import DrumPad from "./drumpad.js";

function PadBank(props) {

    const pads = props.currentPadBank.map(
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

    return (<div className="drum-pads" >{pads}</div>)
}


export default PadBank;