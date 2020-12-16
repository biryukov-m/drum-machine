import React, { useState, useEffect } from "react";

function DrumPad({ clip, clipId, keyCode, keyTrigger, displayHandler, clearDisplay, volume }) {
    const [pressed, setPressed] = useState(false);

    const playSound = () => {
        const drumKeys = ["Q", "W", "E"];
        if (drumKeys.indexOf(keyTrigger) >= 0) {
            drumKeys.forEach((drumKey) => {
                document.getElementById(drumKey).pause();
            });
        }

        const sound = document.getElementById(keyTrigger);
        sound.volume = volume;
        sound.currentTime = 0;
        sound.play();

        displayHandler(clipId);
        setTimeout(() => clearDisplay(), 500);
    }

    const handleKeyPress = (event) => {
        if (event.keyCode === keyCode) {
            playSound();
            setPressed(true);
        }
    }

    const handleKeyUnPress = (event) => {
        if (event.keyCode === keyCode) {
            setPressed(false);
        }
    }

    useEffect(() => {
        const drumPadDiv = document.getElementById(keyTrigger).closest("div");
        document.addEventListener("keydown", handleKeyPress);
        document.addEventListener("keyup", handleKeyUnPress);
        drumPadDiv.addEventListener("mousedown", () => { setPressed(true) });
        drumPadDiv.addEventListener("mouseup", () => { setPressed(false) });
        drumPadDiv.addEventListener("mouseleave", () => { setPressed(false) });

        return (() => {
            document.addEventListener("keydown", handleKeyPress);
            document.addEventListener("keyup", handleKeyUnPress);
            drumPadDiv.addEventListener("mousedown", () => { setPressed(true) });
            drumPadDiv.addEventListener("mouseup", () => { setPressed(false) });
            drumPadDiv.addEventListener("mouseleave", () => { setPressed(false) });
        });

    });


    return (
        <div
            className={`drum-pad ${pressed ? 'pressed' : ''}`}
            onClick={playSound}
            id={clipId}
        >

            <audio
                className="clip"
                id={keyTrigger}
                src={clip}
            />
            {keyTrigger}
            <div className="progress-bar" id="progress-bar" />
        </div>
    )
};


export default DrumPad;