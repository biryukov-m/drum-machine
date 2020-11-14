import React from "react";


function Volume(props) {
    function volumeHandler(e) {
        props.setVolume(e.target.value);
        props.displayHandler("Volume: " + Math.round(e.target.value * 100) + "%");
    }

    return (
        <div className="volume" id="volume-slider">
            <label htmlFor="volume">Volume</label>
            <input
                onChange={volumeHandler}
                id="volume"
                min="0"
                max="1"
                step="0.05"
                type="range"
                value={props.volume}
            ></input>
        </div>)
}

export default Volume;

