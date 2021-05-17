"use strict";

const questSubmit = document.getElementById("questSubmit");
const questGuess = document.getElementById("questGuess");
const questFeedback = document.getElementById("questFeedback");
const questTitle = document.querySelector("#questTitle > p");

questTitle.innerText = "\"Berätta för mig vilket djur ssom är längsst ned, tyngd av de andra, omgedd av godtrogna rådjur ssom sspringer, ovetandess av vilken frihet de har givitss.\"";

questSubmit.addEventListener("click", e => {
    e.preventDefault();
    let guess = questGuess.value.toLowerCase();

    if (guess == "orm") {
        questFeedback.innerText = "Rätt svar! Gå tillbaka till dialogfönstret";
        patchState("currentUser", "completedGame", true);

        console.log(guess);
        dialogueInit("outro");

        let gameBtn = document.getElementById("interactiveBtn");
        gameBtn.classList.remove("important");
    } else {
        questFeedback.innerText = "Fel svar. Försök igen.";
        console.log(guess);
    }
});