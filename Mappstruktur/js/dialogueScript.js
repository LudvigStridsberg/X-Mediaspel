"use strict";

const image = document.getElementById("characterImg");
const characterName = document.getElementById("characterName");
const dialogueBox = document.getElementById("dialogueBox");
const text = document.querySelector("#dialogueBox > p");
const indicator = document.getElementById("indicator");

// Initialized to -1 since we perform a click when pressing the button, which also raises the number
let dialogueIndex = -1;

dialogueBox.addEventListener("click", e => {
    dialogueIndex++;
    changeText();
});

function changeText(theArray) {

    // Clear all dialogue-elements of previous data
    dialogueBox.classList.remove("hidden");
    indicator.classList.remove("more", "done");
    indicator.classList.add("hidden");
    characterName.innerHTML = "";
    text.innerHTML = "";
    let dialogueObj

    //Prevent the user from trying to skip
    dialogueBox.style.pointerEvents = "none";

    // Get the new object from the correct array
    if (theArray == "intro") {
        dialogueObj = STATE.dialogue.intro[dialogueIndex];
    } else if (theArray == "outro") {
        dialogueObj = STATE.dialogue.outro[dialogueIndex];
    }

    // If the object exists...
    if (dialogueObj != undefined) {
        // ...update all elements with the new data...
        characterName.innerHTML = dialogueObj.name;
        printText(dialogueObj.script, dialogueObj.indicator);
        image.src = "images/" + dialogueObj.image + ".png";
    } else {
        // ...otherwise we're out of dialogue, reset the page
        document.getElementById("dialogueWrapper").classList.remove("flexer");
        document.getElementById("dialogueWrapper").classList.add("hidden");
        document.getElementById("startBtn").classList.remove("hidden");
        dialogueIndex = -1;
    }
}

function printText(string, textIndicator) {

    // Create a indicator that will show when the current string is done
    let lastLetter = false;

    // Start playing the speaking-sound
    dialogueSound.play();

    // Reset the letter-index
    let letterIndex = 0; 
    
    let printNext = function() {

        // If the current letter isn't the last one...
        if (letterIndex < string.length) {

            // ...add the current one to the paragraph...
            text.innerHTML += string[letterIndex];
            letterIndex++;
        } else {

            // ... otherwise we are all out of letters
            lastLetter = true;
        }

        // Set a ID for the timeout, so that we can close it when we are out of letters
        // Each letter-print prepares the next one
        let id = setTimeout(printNext, 50);

        // If this function call printed the last letter...
        if (lastLetter) {

            //Re-enable the click-events
            dialogueBox.style.pointerEvents = "auto";

            // ... stop further timeout-calls...
            clearTimeout(id);

            // ...show the indicator and make it look like it's supposed to...
            indicator.classList.remove("hidden");
            indicator.classList.add(textIndicator);

            // ...stop the speaking-sound since no more letters are showing up
            dialogueSound.pause();
        }
    }

    // Print the first letter, which will call the next one, and so on
    printNext();
}

document.getElementById("startBtn").addEventListener("click", e=> {
    document.getElementById("dialogueWrapper").classList.remove("hidden");
    document.getElementById("dialogueWrapper").classList.add("flexer");
    document.getElementById("startBtn").classList.add("hidden");
    dialogueBox.click();
});
