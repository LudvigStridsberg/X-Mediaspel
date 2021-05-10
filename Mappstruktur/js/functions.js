"use strict";

function setState() {
    const getReq = new Request("../functional_php/api.php");
    fetch(getReq)
    .then(getResp => {
        if(!getResp.ok) {
            throw Error(getResp.status);
        }
        return getResp.json();
    })
    .then(getResource => {
        // STATE = {currentUser:{}, currentPhase, coordinatesTarget};
        // STATE.key = value;
        // STATE.otherKey = othervalue;
        let user = getResource.user;
        console.table("rsrc currentUser", user);
        // let thisUser = getResource.user.find(user => user.id === currentUser);
        STATE.currentUser = user;
        STATE.currentPhase = user.storyPhase;
        STATE.coordinatesTarget = phases[STATE.currentPhase].targetLocation;
        STATE.dialogue = phases[STATE.currentPhase].dialogue;
        //Fattas lägga in dialogue i STATE, men finns empty string för att kunna köra över
        displayLocations();
    });
}

// Uppdatera spelarens state i databasen, borde kalla setState i slutet
// Ska kallas från dialog-funktionen och från varje spel-script
// Call setState
function patchState(key1, key2, value) {

    // Update the local State
    // let {key, value} = patchObj;
    STATE[key1][key2] = value;
    
    // Update the State on the database
    const patchReq = new Request("../functional_php/api.php",
        {
            method: "PATCH",
            body: JSON.stringify(STATE.currentUser),
            headers: {"Content-type": "application/json; charset=UTF-8"},
        }
    );
    return fetch(patchReq)
        .then(patchResp => {
            if(!patchResp) {
                throw Error(patchResp.status);
            }
            return patchResp.json();
        })
        .then(patchResource => {
            console.log("API respons", patchResource);

            // This has to be set here as this has to happen after the state
            // in the database has been updated
            setState();
        })
        .catch(e => {
            console.log(e);
        });
}
/*
   Elementen kommer att vara laddade, här kommer vi göra de synliga genom att
   byta från en klass med display: none till en annan med t.ex display:flex etc.
   Vi måste också göra så att den int som indikerar vilket objekt i arrayen som
   kommer näst blir 0.
*/
function dialogueInit(dialogueType) {
    let dWrapper = document.getElementById("dialogueWrapper");
    dialogueTemp = STATE.dialogue[dialogueType];
    // Use toggle?
    dWrapper.classList.remove("hidden");
    dWrapper.classList.add("flexer");
    dialogueBox.click();
}

// Elementen kommer att vara laddade, här kommer vi göra de synliga genom att
// byta från en klass med display: none till en annan med t.ex display:flex etc.
function gameInit() {

}

// Ska gömma eller visa olika föremål i spelarens inventory. Bildelementen är
// alltid där, vi måste byta mellan display: none och display: block/inline/whatever
function itemHandler() {

}

function phaseChanger() {
    // 1 Uppdateta phase-nummer via patchState
    if(STATE.currentUser.introDialogue && STATE.currentUser.completedGame && STATE.currentUser.outroDialogue){
        
        STATE.currentUser.introDialogue = false;
        STATE.currentUser.completedGame = false;
        STATE.currentUser.outroDialogue = false;
    }
    let phaseIndex = STATE.currentPhase;
    patchState("currentUser", "storyPhase", phaseIndex + 1);
    // 1.1, kontrollera spel stadierna intro, completedGame och outro
    // 2 Få koordinaterna från phase-objektet, lägg i state
    // 3 Uppdatera script-taggar och php-includes
    displayLocations();
}

function importantBtn(theButton) {
    theButton.classlist.add("important");

    setTimeout(function() {
        theButton.classlist.remove("important");
    }, 5000);
}

function displayLocations() {
    let locationArray = document.querySelectorAll(".locationPoint");

    locationArray.forEach(location => {
        let idNumber = location.id.substring(location.id.length - 1, location.id.length);

        if(location.id.length > 9) {
            idNumber = location.id.substring(location.id.length - 2, location.id.length);
        }

        if (idNumber < STATE.currentPhase) {
            location.classList.toggle('hidden');
        }

        location.addEventListener("click", function() {
            const sumNotif = document.getElementById("summaryNotif");
            const sumText = document.getElementById("summaryText");

            if (sumNotif.classList.contains("notifAnimationIn")) {
                sumNotif.classList.add("notifAnimationOut");
            }
            sumNotif.classList.add("notifAnimationIn");
            
            if(location.classList.contains("markedSpot")) {
                console.log("It contains it");
                this.classList.replace("markedSpot", "");
                sumNotif.classList.add("notifAnimationOut");
            } else {
                // locationArray.forEach(locationSpot => {
                //     locationSpot.classList.remove("markedSpot");
                // });

                setTimeout(function() {
                    sumNotif.classList.remove("notifAnimationOut");
                    sumNotif.classList.add("notifAnimationIn");
                }, 500);
            }
            this.classList.add("markedSpot");
            // if(sumNotif.classList.contains("notifAnimationIn")) {
            //     sumNotif.classList.remove("notifAnimationIn");
            //     sumNotif.classList.add("notifAnimationOut");
            // }

            //sumNotif.classList.replace("notifAnimationIn", "notifAnimationOut");
            
            // sumText.innerHTML = summaries[idNumber];
        });
    });
}