import React from "react";
import DrumPad from "./drumpad.js";

function PadBank({ currentPadBank, displayHandler, clearDisplay, volume }) {

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

    return (<div className="drum-pads" >{pads}</div>)
}


export default PadBank;