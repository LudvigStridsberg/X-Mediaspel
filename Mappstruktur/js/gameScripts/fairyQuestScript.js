"use strict";

const questSubmit = document.getElementById("questSubmit");
const questGuess = document.getElementById("questGuess");
const questFeedback = document.getElementById("questFeedback");
const questTitle = document.querySelector("#questTitle > p");

questTitle.innerText = "\"De tar inte bara en men flera personer till inte bara ett men flera ställen men frågan är hur många av dem tar personer till ställen från stället som döptes efter kungen, eller kungen som döptes efter stället?\"";

questSubmit.addEventListener("click", e => {
    e.preventDefault();
    let guess = questGuess.value.toLowerCase();

    if (guess == "6" || guess == "sex") {
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