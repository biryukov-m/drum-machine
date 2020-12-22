import React, { useState, useEffect } from "react";

function DrumPad({ clip, clipId, keyCode, keyTrigger, displayHandler, clearDisplay, volume }) {
    const [pressed, setPressed] = useState(false);

    const playSound = () => {
        const drumKeys = ["Q", "W", "E"];
        if (drumKeys.indexOf(keyTrigger) >= 0) {
            drumKeys.forEach((drumKey) => {
                document.getElementById(drumKey).currentTime = 0;
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

    let percent = 0;
    let timer;
    const advanceProgressBar = (duration, element) => {

        let progressBar = document.getElementById(`progress-bar-${keyTrigger}`);
        let increment = 10 / duration;
        percent = Math.min(increment * element.currentTime * 10, 100);
        let percent10 = percent.toFixed(2);
        progressBar.style.width = (percent > 99) ? 0 : `${percent10}%`;
        // debug
        console.log(`Running... ${duration} ${keyTrigger} ${percent}%`)
        startTimer(duration, element);
    };

    const startTimer = (duration, element) => {
        if (percent < 100) {
            timer = setTimeout(() => { advanceProgressBar(duration, element) }, 100);
        }
    }

    useEffect(() => {
        const drumPadDiv = document.getElementById(keyTrigger).closest("div");
        const audio = document.getElementById(keyTrigger);
        document.addEventListener("keydown", handleKeyPress);
        document.addEventListener("keyup", handleKeyUnPress);
        drumPadDiv.addEventListener("mousedown", () => { setPressed(true) });
        drumPadDiv.addEventListener("mouseup", () => { setPressed(false) });
        drumPadDiv.addEventListener("mouseleave", () => { setPressed(false) });
        audio.addEventListener("playing", (_event) => {
            let duration = _event.target.duration;
            advanceProgressBar(duration, audio);
        });
        audio.addEventListener("pause", (_event) => {
            clearTimeout(timer);
        });
        audio.addEventListener("ended", () => { clearTimeout(timer) });


        return (() => {
            document.removeEventListener("keydown", handleKeyPress);
            document.removeEventListener("keyup", handleKeyUnPress);
            drumPadDiv.removeEventListener("mousedown", () => { setPressed(true) });
            drumPadDiv.removeEventListener("mouseup", () => { setPressed(false) });
            drumPadDiv.removeEventListener("mouseleave", () => { setPressed(false) });
            audio.removeEventListener("playing", (_event) => {
                let duration = _event.target.duration;
                advanceProgressBar(duration, audio);
            });
            audio.removeEventListener("pause", (_event) => {
                clearTimeout(timer);
            });
            audio.removeEventListener("ended", () => { clearTimeout(timer) });
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
            <div className="progress-bar" id={`progress-bar-${keyTrigger}`} />
        </div>
    )
};


export default DrumPad;