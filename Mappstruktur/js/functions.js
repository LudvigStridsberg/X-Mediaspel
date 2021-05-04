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
        // let STATE = {currentUser, currentPhase, coordinatesTarget};
        // STATE.key = value;
        // STATE.otherKey = othervalue;
        let user = getResource.user;
        console.table(user);
        // let thisUser = getResource.user.find(user => user.id === currentUser);
        STATE.currentUser = user;
        STATE.currentPhase = user.storyPhase;
        STATE.coordinatesTarget = phases[STATE.currentPhase].targetLocation;
        //Fattas lägga in dialogue i STATE, men finns empty string för att kunna köra över
        
    });
}

// Uppdatera spelarens state i databasen, borde kalla setState i slutet
// Ska kallas från dialog-funktionen och från varje spel-script
function patchState(patchObj) {
    let {key, value} = patchObj;
    switch(key) {
        case "introDialogue":

            break;
        case "completedGame":

            break;
        case "outroDialogue":

            // Call setState
            break;
    }
}
// function findUser(allUsers, id){

//     let currentUser = allUsers.find(user => user.id === id);

//     return currentUser;

// }
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