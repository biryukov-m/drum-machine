import React from "react";
import Slider from "@material-ui/core/slider";


function Volume(props) {
    function volumeHandler(e, newValue) {
        props.setVolume(newValue);
        // props.displayHandler("Volume: " + Math.round(e.target.value * 100) + "%");
        props.displayHandler("Volume: " + Math.round(newValue * 100) + "%");
    }

    return (
        <div className="volume" id="volume-slider">
            <label htmlFor="volume">Volume</label>
            {/* <input
                onChange={volumeHandler}
                id="volume"
                min="0"
                max="1"
                step="0.05"
                type="range"
                value={props.volume}
            ></input> */}
            <Slider onChange={volumeHandler}
                id="volume"
                min={0}
                max={1}
                step={0.05}
                value={props.volume} aria-labelledby="continuous-slider" />
        </div>)
}

export default Volume;

