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

    const toggleMouse = () => {
        setPressed(!pressed);
    }


    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        document.addEventListener("keyup", handleKeyUnPress);
        document
            .getElementById(keyTrigger)
            .closest("div")
            .addEventListener("mousedown", toggleMouse);
        document
            .getElementById(keyTrigger)
            .closest("div")
            .addEventListener("mouseup", toggleMouse);

        return (() => {
            document.removeEventListener("keydown", handleKeyPress);
            document.removeEventListener("keyup", handleKeyUnPress);
            document
                .getElementById(keyTrigger)
                .closest("div")
                .removeEventListener("mousedown", toggleMouse);
            document
                .getElementById(keyTrigger)
                .closest("div")
                .removeEventListener("mouseup", toggleMouse);
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
        </div>
    )
};


export default DrumPad;