"use strict";

const image = document.getElementById("characterImg");
const characterName = document.getElementById("characterName");
const dialogueBox = document.getElementById("dialogueBox");
const text = document.querySelector("#dialogueBox > p");
const indicator = document.getElementById("indicator");

// Initialized to -1 since we perform a click when pressing the button, which also raises the number
let dialogueIndex = 5;

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
    dialogueBox.classList.remove("hidden");
    indicator.classList.remove("more", "done");
    indicator.classList.add("hidden");
    characterName.innerHTML = "";
    text.innerHTML = "";
    let dialogueObj;
    let indicatorClass;

    //Prevent the user from trying to skip
    dialogueBox.style.pointerEvents = "none";

    // Get the new object from the correct array
    dialogueObj = STATE.dialogue[arrayChoice][dialogueIndex];
    
    // If this is the last object in the array the indicator should get
    // the "done" class. Otherwise its the "more" class
    if (dialogueIndex == STATE.dialogue[arrayChoice].length - 1) {
        indicatorClass = "done";
    } else {
        indicatorClass = "more";
    }

    // If the object exists...
    if (dialogueObj != undefined) {
        // ...update all elements with the new data...
        //!FORTSÄTT HÄR NÄR phaseChanger() är bekräftat
        if(dialogueObj.hasOwnProperty("items")){
            console.log("has items");
            itemHandler(dialogueObj.items);
        }
        characterName.innerHTML = dialogueObj.name;
        printText(dialogueObj.script, indicatorClass);
        image.src = "images/" + dialogueObj.image + ".png";
    } else {
        // ...otherwise we're out of dialogue, reset the page
        document.getElementById("dialogueWrapper").classList.remove("flexer");
        document.getElementById("dialogueWrapper").classList.add("hidden");
        document.getElementById("startBtn").classList.remove("hidden");
        dialogueIndex = -1;
        patchState("currentUser", `${arrayChoice}Dialogue`, true);
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
        let id = setTimeout(printNext, 10);

        // If this function call printed the last letter...
        if (lastLetter) {

            //Re-enable the click-events
            dialogueBox.style.pointerEvents = "auto";

            // ... stop further timeout-calls...
            clearTimeout(id);

            // ...show the indicator and make it look like it's supposed to...
            indicator.classList.remove("hidden");
            indicator.classList.add(indicatorClass);
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
