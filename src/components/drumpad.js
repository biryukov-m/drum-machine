import React, { useState, useEffect } from "react";

function DrumPad(props) {
    const [pressed, setPressed] = useState(false);

    const playSound = () => {
        const drumKeys = ["Q", "W", "E"];
        if (drumKeys.indexOf(props.keyTrigger) >= 0) {
            drumKeys.forEach((drumKey) => {
                document.getElementById(drumKey).pause();
            });
        }

        const sound = document.getElementById(props.keyTrigger);
        sound.volume = props.volume;
        sound.currentTime = 0;
        sound.play();

        props.displayHandler(props.clipId);
        setTimeout(() => props.clearDisplay(), 500);
    }

    const handleKeyPress = (event) => {
        if (event.keyCode === props.keyCode) {
            playSound();
            setPressed(true);
        }
    }

    const handleKeyUnPress = (event) => {
        if (event.keyCode === props.keyCode) {
            setPressed(false);
        }
    }

    const handleMouseDown = () => {
        setPressed(true);
    }

    const handleMouseUp = () => {
        setPressed(false);
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        document.addEventListener("keyup", handleKeyUnPress);
        document
            .getElementById(props.keyTrigger)
            .closest("div")
            .addEventListener("mousedown", handleMouseDown);
        document
            .getElementById(props.keyTrigger)
            .closest("div")
            .addEventListener("mouseup", handleMouseUp);

        return (() => {
            document.removeEventListener("keydown", handleKeyPress);
            document.removeEventListener("keyup", handleKeyUnPress);
            document
                .getElementById(props.keyTrigger)
                .closest("div")
                .removeEventListener("mousedown", handleMouseDown);
            document
                .getElementById(props.keyTrigger)
                .closest("div")
                .removeEventListener("mouseup", handleMouseUp);
        });

    });


    return (
        <div
            className={`drum-pad ${pressed ? 'pressed' : ''}`}
            onClick={playSound}
            id={props.clipId}
        >
            {props.keyTrigger}
            <audio
                className="clip"
                id={props.keyTrigger}
                src={props.clip}
            />
        </div>
    )
};


export default DrumPad;