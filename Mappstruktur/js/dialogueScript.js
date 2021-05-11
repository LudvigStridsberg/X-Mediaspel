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

    let arrayChoice = "";
    if (STATE.currentUser.introDialogue == false) {
        arrayChoice = "intro";
    } else {
        arrayChoice = "outro";
    }

    changeText(arrayChoice);
});

function changeText(arrayChoice) {

    // Clear all dialogue-elements of previous data
    dialogueBox.classList.remove("none");
    indicator.classList.remove("more", "done");
    indicator.classList.add("none");
    characterName.innerHTML = "";
    text.innerHTML = "";
    let dialogueObj;
    let indicatorClass;

    //Prevent the user from trying to skip
    dialogueBox.style.pointerEvents = "none";

    // Get the new object from the correct array
    // dialogueObj = STATE.dialogue.outroB[dialogueIndex];
    dialogueObj = STATE.dialogue[arrayChoice][dialogueIndex];
    

    // If this is the last object in the array the indicator should get
    // the "done" class. Otherwise its the "more" class
    // if (dialogueIndex == STATE.dialogue.outroB.length - 1) {
    //     indicatorClass = "done";
    // } else {
    //     indicatorClass = "more";
    // }
    if (dialogueIndex == STATE.dialogue[arrayChoice].length - 1) {
        indicatorClass = "done";
    } else {
        indicatorClass = "more";
    }

    // If the object exists...
    if (dialogueObj != undefined) {
        // ...update all elements with the new data...
        characterName.innerHTML = dialogueObj.name;
        printText(dialogueObj.script, indicatorClass);
        image.src = "../../media/illustrations/characters/" + dialogueObj.image;
        //BUT, control if item has been handed!
        if(dialogueObj.items){
            //items exist
            itemHandler(dialogueObj.items);
        }
    } else {
        // ...otherwise we're out of dialogue, reset the page
        document.getElementById("dialogueWrapper").classList.remove("flexer");
        document.getElementById("dialogueWrapper").classList.add("none");
        document.getElementById("startBtn").classList.remove("none");
        dialogueIndex = -1;
        patchState("currentUser", `${arrayChoice}Dialogue`, true);
        if(arrayChoice == "outro" && STATE.currentUser.outroDialogue == true){
            phaseChanger();
        }
    }
}

function printText(string, indicatorClass) {

    // Create a indicator that will show when the current string is done
    let lastLetter = false;

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
        let id = setTimeout(printNext, 1);

        // If this function call printed the last letter...
        if (lastLetter) {

            //Re-enable the click-events
            dialogueBox.style.pointerEvents = "auto";

            // ... stop further timeout-calls...
            clearTimeout(id);

            // ...show the indicator and make it look like it's supposed to...
            indicator.classList.remove("none");
            indicator.classList.add(indicatorClass);
        }
    }

    // Print the first letter, which will call the next one, and so on
    printNext();
}

document.getElementById("startBtn").addEventListener("click", e=> {
    document.getElementById("dialogueWrapper").classList.remove("none");
    document.getElementById("dialogueWrapper").classList.add("flexer");
    document.getElementById("startBtn").classList.add("none");
    dialogueBox.click();
});
