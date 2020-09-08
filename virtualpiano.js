let whiteKeys = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ"]
let blackKeys = ["KeyW", "KeyE", "KeyT", "KeyY", "KeyU"]


document.addEventListener("keydown", function (piano) {
    if (whiteKeys.includes(piano.code)) {
        let pianokey = new Audio("white_keys/" + piano.code.replace("Key", "") + ".mp3");
        pianokey.play();
        console.log("The '" + piano.code.replace("Key", "") + "' key is pressed");
    } else if (blackKeys.includes(piano.code)) {
        let pianokey = new Audio("black_keys/" + piano.code.replace("Key", "") + ".mp3");
        pianokey.play();
        console.log("The '" + piano.code.replace("key", "") + "' key is pressed");
    } else console.log("The '" + piano.code.replace("Key", "") + "' key is not on the piano");

});
