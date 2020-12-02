import React from "react";
import Slider from "@material-ui/core/slider";


function Volume(props) {
    const volumeHandler = (event, value) => {
        props.setVolume(value);
        props.displayHandler(`Volume: ${Math.round(value * 100)}%`);
    }

    return (
        <div className="volume" id="volume-slider">
            <label htmlFor="volume">Volume</label>
            <Slider onChange={volumeHandler}
                id="volume"
                min={0}
                max={1}
                step={0.05}
                value={props.volume} aria-labelledby="continuous-slider" />
        </div>)
}

export default Volume;

