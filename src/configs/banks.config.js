
const BANKS = {
    A: [{
        keyCode: 81,
        keyTrigger: "Q",
        id: "Drums 1",
        url: "https://intro.novationmusic.com/packs/analogue-jewels/Drums1.wav",
    },
    {
        keyCode: 87,
        keyTrigger: "W",
        id: "Drums 2",
        url: "https://intro.novationmusic.com/packs/analogue-jewels/Drums2.wav",
    },
    {
        keyCode: 69,
        keyTrigger: "E",
        id: "Drums 3",
        url: "https://intro.novationmusic.com/packs/analogue-jewels/Drums3.wav",
    },
    {
        keyCode: 82,
        keyTrigger: "R",
        id: "FX 1",
        url: "https://intro.novationmusic.com/packs/analogue-jewels/B5.wav",
    },
    {
        keyCode: 65,
        keyTrigger: "A",
        id: "Synth bass 1",
        url: "https://intro.novationmusic.com/packs/analogue-jewels/B3.wav",
    },
    {
        keyCode: 83,
        keyTrigger: "S",
        id: "Synth bass 2",
        url: "https://intro.novationmusic.com/packs/analogue-jewels/B4.wav",
    },
    {
        keyCode: 68,
        keyTrigger: "D",
        id: "Synth bass 3",
        url: "https://intro.novationmusic.com/packs/analogue-jewels/B7.wav",
    },
    {
        keyCode: 70,
        keyTrigger: "F",
        id: "FX 2",
        url: "https://intro.novationmusic.com/packs/analogue-jewels/B6.wav",
    },
    {
        keyCode: 90,
        keyTrigger: "Z",
        id: "Vocal 1",
        url:
            "https://intro.novationmusic.com/packs/analogue-jewels/Freeze%206-Audio.wav",
    },
    {
        keyCode: 88,
        keyTrigger: "X",
        id: "Vocal 2",
        url:
            "https://intro.novationmusic.com/packs/analogue-jewels/Freeze%206-Audio-3.wav",
    },
    {
        keyCode: 67,
        keyTrigger: "C",
        id: "Vocal 3",
        url:
            "https://intro.novationmusic.com/packs/analogue-jewels/Freeze%206-Audio-1.wav",
    },
    {
        keyCode: 86,
        keyTrigger: "V",
        id: "Vocal 4",
        url:
            "https://intro.novationmusic.com/packs/analogue-jewels/Freeze%206-Audio-5.wav",
    }],
    B: [{
        keyCode: 81,
        keyTrigger: "Q",
        id: "Beats 1",
        url: "https://intro.novationmusic.com/packs/future-house-fusion/3%20Beats.wav",
    },
    {
        keyCode: 87,
        keyTrigger: "W",
        id: "Beats 2",
        url: "https://intro.novationmusic.com/packs/future-house-fusion/2%20Beats.wav",
    },
    {
        keyCode: 69,
        keyTrigger: "E",
        id: "Beats 3",
        url: "https://intro.novationmusic.com/packs/future-house-fusion/4%20Beats.wav",
    },
    {
        keyCode: 82,
        keyTrigger: "R",
        id: "One-shot FX 1",
        url: "https://intro.novationmusic.com/packs/future-house-fusion/3%20One%20shot%20(re).wav",
    },
    {
        keyCode: 65,
        keyTrigger: "A",
        id: "Warped synth bass 1",
        url: "https://intro.novationmusic.com/packs/future-house-fusion/warped%20synth2.wav",
    },
    {
        keyCode: 83,
        keyTrigger: "S",
        id: "Synth bass 2",
        url: "https://intro.novationmusic.com/packs/future-house-fusion/2%20Bass.wav",
    },
    {
        keyCode: 68,
        keyTrigger: "D",
        id: "Synth bass 3",
        url: "https://intro.novationmusic.com/packs/future-house-fusion/4%20Bass.wav",
    },
    {
        keyCode: 70,
        keyTrigger: "F",
        id: "One-shot FX 2",
        url: "https://intro.novationmusic.com/packs/future-house-fusion/3%20Oneshot%20(fx).wav",
    },
    {
        keyCode: 90,
        keyTrigger: "Z",
        id: "Vocal 1",
        url:
            "https://intro.novationmusic.com/packs/future-house-fusion/3%20Melodic%20A.wav",
    },
    {
        keyCode: 88,
        keyTrigger: "X",
        id: "Vocal 2",
        url:
            "https://intro.novationmusic.com/packs/future-house-fusion/2%20Melodic%20B.wav",
    },
    {
        keyCode: 67,
        keyTrigger: "C",
        id: "Melodic Extra",
        url:
            "https://intro.novationmusic.com/packs/future-house-fusion/4%20Melodic%20B.wav",
    },
    {
        keyCode: 86,
        keyTrigger: "V",
        id: "Melodic 2",
        url:
            "https://intro.novationmusic.com/packs/future-house-fusion/4%20Melodic%20A.wav",
    }],
    C: [{
        keyCode: 81,
        keyTrigger: "Q",
        id: "Drums 1",
        url: "https://intro.novationmusic.com/packs/high-roller/Drums3.wav",
    },
    {
        keyCode: 87,
        keyTrigger: "W",
        id: "Drums 2",
        url: "https://intro.novationmusic.com/packs/high-roller/Drums4.wav",
    },
    {
        keyCode: 69,
        keyTrigger: "E",
        id: "Drums 3",
        url: "https://intro.novationmusic.com/packs/high-roller/Drums5.wav",
    },
    {
        keyCode: 82,
        keyTrigger: "R",
        id: "Heater 1",
        url: "https://intro.novationmusic.com/packs/high-roller/D3.wav",
    },
    {
        keyCode: 65,
        keyTrigger: "A",
        id: "Synth 1",
        url: "https://intro.novationmusic.com/packs/high-roller/A1.wav",
    },
    {
        keyCode: 83,
        keyTrigger: "S",
        id: "Synth 2",
        url: "https://intro.novationmusic.com/packs/high-roller/A2.wav",
    },
    {
        keyCode: 68,
        keyTrigger: "D",
        id: "Synth 3",
        url: "https://intro.novationmusic.com/packs/high-roller/A7.wav",
    },
    {
        keyCode: 70,
        keyTrigger: "F",
        id: "Heater 2",
        url: "https://intro.novationmusic.com/packs/high-roller/D4.wav",
    },
    {
        keyCode: 90,
        keyTrigger: "Z",
        id: "Melody 1",
        url:
            "https://intro.novationmusic.com/packs/high-roller/C5.wav",
    },
    {
        keyCode: 88,
        keyTrigger: "X",
        id: "Melody 2",
        url:
            "https://intro.novationmusic.com/packs/high-roller/C6.wav",
    },
    {
        keyCode: 67,
        keyTrigger: "C",
        id: "Melody 3",
        url:
            "https://intro.novationmusic.com/packs/high-roller/D5.wav",
    },
    {
        keyCode: 86,
        keyTrigger: "V",
        id: "Melody 4",
        url:
            "https://intro.novationmusic.com/packs/high-roller/D6.wav",
    }]
}

export default BANKS;