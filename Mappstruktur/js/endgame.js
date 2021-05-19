"use strict";

function endgame() {
    let gkBtn = document.createElement("button");
    let adelBtn = document.createElement("button");
    let oldBtns = document.querySelectorAll("#mainBtnNav > a");
    let parent = document.getElementById("mainBtnNav");

    let countdown = document.createElement("p");
    countdown.id = "countdown";
    
    gkBtn.innerText = "Portmästaren";
    adelBtn.innerText = "Ädeln";

    oldBtns.forEach(button => {
        button.classList.add("none");
    });

    adelBtn.addEventListener("click", function() {
        endgameChoice = "outroB";
        patchState("currentUser", "completedGame", true);
        setTimeout(() => {
            dialogueInit();
        }, 2000);
    });
    
    gkBtn.addEventListener("click", function() {
        endgameChoice = "outroA";
        patchState("currentUser", "completedGame", true);
        setTimeout(() => {
            dialogueInit();
        }, 2000);
    });

    parent.appendChild(gkBtn);
    parent.appendChild(countdown);
    parent.appendChild(adelBtn);

    countdown.classList.add("important");
    var timeleft = 15;
    var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        // document.getElementById("countdown").classList.add("none");
        // gkBtn.click();
        // gkBtn.classList.add("none");
        // adelBtn.classList.add("none");
    } else {
        document.getElementById("countdown").innerHTML = timeleft;
    }
    timeleft -= 1;
    }, 1000);
}
