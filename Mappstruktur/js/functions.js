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
        // let {key, value} = getResource;
        // STATE.key = value;
        // STATE.otherKey = othervalue;
    });
}

// Uppdatera spelarens state i databasen, borde kalla setState i slutet
// Ska kallas från dialog-funktionen och från varje spel-script
// Call setState
function patchState(patchObj) {

    // Update the local State
    let {key, value} = patchObj;
    STATE[key] = value;
    
    // Update the State on the database
    const patchReq = new Request("../functional_php/api.php",
        {
            method: "PATCH",
            body: JSON.stringify(STATE),
            headers: {"Content-type": "application/json; charset=UTF-8"},
        }
    );
    return fetch(patchReq)
        .then(patchResp => {
            if(!fetchResp) {
                throw Error(fetchResp.status);
            }
            return patchResp.json;
        })
        .then(patchResource => {
            console.log(patchResource);

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
    switch(dialogueType) {
        case "intro":

            break;
        case "outro":

            break;
    }
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
    // 2 Få koordinaterna från phase-objektet, lägg i state
    // 3 Uppdatera script-taggar och php-includes
}

function importantBtn(theButton) {
    theButton.classlist.add("important");

    setTimeout(function() {
        theButton.classlist.remove("important");
    }, 5000);
}

// ---------------------------------------------------
    /*let {key, value} = patchObj;
    switch(key) {
        case "introDialogue":
            STATE.introDialogue = value;
            break;
        case "completedGame":
            STATE.completedGame = value;
            break;
        case "outroDialogue":
            STATE.outroDialogue = value;
            break;
        case "inventory":
            STATE.inventory = value;
            break;
        case "hasPlayed":
            STATE.hasPlayed = value;
    }*/