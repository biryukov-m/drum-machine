import React from "react";
import DrumPad from "./drumpad.js";

function PadBank({ currentPadBank, displayHandler, clearDisplay, volume }) {

    const pads = currentPadBank.map(
        (drumObj) => (
            <DrumPad
                clip={drumObj.url}
                clipId={drumObj.id}
                keyCode={drumObj.keyCode}
                keyTrigger={drumObj.keyTrigger}
                displayHandler={displayHandler}
                clearDisplay={clearDisplay}
                volume={volume}
            />
        )
    );

    return (<div className="drum-pads" >{pads}</div>)
}


export default PadBank;