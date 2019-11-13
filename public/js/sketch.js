let mySpeech;

function setup() {
    createCanvas(400, 100);
    background(0);
    mySpeech = new p5.Speech();
    mySpeech.onLoad = voiceReady;

    mySpeech.started(startSpeaking);
    mySpeech.ended(endSpeaking);

    function startSpeaking() {
        background(0, 255, 0);
    }

    function endSpeaking() {
        background(0);
    }

    function voiceReady() {}
}

function mousePressed() {
    mySpeech.setVoice('Google US English');
    mySpeech.speak('We’re treated as these disposable people, like we don’t matter, but there wouldn’t be a club without us. They make so much money off of our backs, and they always act like we’re nothing.');

    // let voice = mySpeech.voices;
    // let myVoice = random(voice);
    // console.log(myVoice.name);
    // mySpeech.setVoice(myVoice.name);
    // mySpeech.speak('strip club');

    // for (let i = 0; i < voices.length; i++) {
    //     let myVoice = voices[i];
    //     console.log(myVoice);
    //     mySpeech.setVoice(myVoice.name);
    //     mySpeech.speak('strip club');
    // }

    // Tessa, Google US English, Fred, Sin-ji, Victoria, Alex
}