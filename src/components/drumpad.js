import React from "react";

class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pressed: false };
        this.playSound = this.playSound.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleKeyUnPress = this.handleKeyUnPress.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);
        document.addEventListener("keyup", this.handleKeyUnPress);
        document
            .getElementById(this.props.keyTrigger)
            .closest("div")
            .addEventListener("mousedown", this.handleMouseDown);
        document
            .getElementById(this.props.keyTrigger)
            .closest("div")
            .addEventListener("mouseup", this.handleMouseUp);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress);
        document.removeEventListener("keyup", this.handleKeyUnPress);
        document
            .getElementById(this.props.keyTrigger)
            .closest("div")
            .removeEventListener("mousedown", this.handleMouseDown);
        document
            .getElementById(this.props.keyTrigger)
            .closest("div")
            .removeEventListener("mouseup", this.handleMouseUp);
    }

    handleKeyPress(e) {
        if (e.keyCode === this.props.keyCode) {
            this.playSound();
            this.setState({ pressed: true });
        }
    }
    handleKeyUnPress(e) {
        if (e.keyCode === this.props.keyCode) {
            this.setState({ pressed: false });
        }
    }

    handleMouseDown(e) {
        this.setState({ pressed: true });
    }

    handleMouseUp(e) {
        this.setState({ pressed: false });
    }

    playSound() {
        const drumKeys = ["Q", "W", "E"];
        if (drumKeys.indexOf(this.props.keyTrigger) >= 0) {
            drumKeys.forEach((i) => {
                document.getElementById(i).pause();
            });
        }

        const sound = document.getElementById(this.props.keyTrigger);
        sound.volume = this.props.volume;
        sound.currentTime = 0;
        sound.play();

        this.props.displayHandler(this.props.clipId);
        setTimeout(() => this.props.clearDisplay(), 500);
    }

    render() {
        return (
            <div
                className={this.state.pressed ? "drum-pad pressed" : "drum-pad"}
                onClick={this.playSound}
                id={this.props.clipId}
            >
                {this.props.keyTrigger}
                <audio
                    className="clip"
                    id={this.props.keyTrigger}
                    src={this.props.clip}
                />
            </div>
        );
    }
}

export default DrumPad;