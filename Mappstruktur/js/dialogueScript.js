"use strict";

const image = document.getElementById("characterImg");
const characterName = document.getElementById("characterName");
const dialogueBox = document.getElementById("dialogueBox");
const text = document.querySelector("#dialogueBox > p");
const indicator = document.getElementById("indicator");
const hTextfield = document.querySelector(".histTextfield");

// Initialized to -1 since we perform a click when pressing the button, which also raises the number
let dialogueIndex = 10;
let endgameChoice = "";

dialogueBox.addEventListener("click", e => {
    dialogueIndex++;
    
    let arrayChoice = endgameChoice;
    if (STATE.currentUser.introDialogue == false) {
        arrayChoice = "intro";
    } else if (!STATE.currentUser.completedGame) {
        console.log("gick in här");
        arrayChoice = "intro";
    } else if(arrayChoice == "outroA"){
        arrayChoice = "outroA";
    } else if(arrayChoice == "outroB") {
        arrayChoice = "outroB";
    } 
    else {
        arrayChoice = "outro";
    }
    console.log(arrayChoice, endgameChoice);

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
    if (dialogueIndex == STATE.dialogue[arrayChoice].length - 1) {
        indicatorClass = "done";
    } else {
        indicatorClass = "more";
    }

    // If the object exists...
    if (dialogueObj != undefined) {

        let dialogueString = document.createElement("p");
        dialogueString.innerText = `${dialogueObj.name}: ${dialogueObj.script}`;
        hTextfield.appendChild(dialogueString);

        // ...update all elements with the new data...
        printText(dialogueObj.script, indicatorClass);

        /*
         Check the name. If it is BSK the name-sign should be hidden.
         If it is either that or Jag the character image's source should
         be empty.png. If it is neither the name-sign should be displayed
         and the appropiate picture shown. 
        */
        if (dialogueObj.name == "BSK") {
            characterName.classList.add("none");
        } else {
            characterName.classList.remove("none");
            characterName.innerHTML = dialogueObj.name;
        }
        image.src = "../../media/illustrations/characters/" + dialogueObj.image;

        // BUT, control if item has been handed!
        if (dialogueObj.items) {

            //items exist
            itemHandler(dialogueObj.items);
            patchState("currentUser", "inventory", dialogueObj.items);

            const inventoryBtn = document.getElementById("inventoryBtn");
            inventoryBtn.classList.add("important");
            setTimeout(() => {
                inventoryBtn.classList.remove("important");
            }, 3000);
        }
    } else {
        // ...otherwise we're out of dialogue, reset the page
        dialogueEnder(arrayChoice);
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
    dialogueInit();
});

function dialogueEnder(arrayChoice) {

    const dWrapper = document.getElementById("dialogueWrapper");
    const overlay = document.getElementById("overlayStandby");

    patchState("currentUser", `${arrayChoice}Dialogue`, true);

    dialogueIndex = -1;

    if (!phases[STATE.currentPhase].game) {
        patchState("currentUser", "completedGame", true);
        dialogueInit();
    } else {
        dWrapper.classList.remove("flexer");
        dWrapper.classList.add("none");
        overlay.classList.remove("none");

        let gameBtn = document.getElementById("interactiveBtn");

        if (arrayChoice != "outro") {
            gameBtn.classList.add("important");
        }

        gameInit(phases[STATE.currentPhase].game);
    }

    document.getElementById("startBtn").classList.remove("none");

    if (arrayChoice == "outro"){
        phaseChanger();
    }
}