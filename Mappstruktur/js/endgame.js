"use strict";

function endgame() {
    const gkBtn = document.createElement("button");
    const adelBtn = document.createElement("button");
    const oldBtns = document.querySelectorAll("#mainBtnNav > a");
    const parent = document.getElementById("mainBtnNav");
    const icon = document.querySelector("#overlayStandby > img:nth-of-type(1)");
    const imgElement = document.querySelector("#overlayStandby > img:nth-of-type(2)");
    const textOverlay = document.querySelector(".textlayer");

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

    // Append the elements
    parent.appendChild(gkBtn);
    parent.appendChild(countdown);
    parent.appendChild(adelBtn);

    // Change the style of the elements in #overlayStandby
    imgElement.src = "../../media/illustrations/endgame.png";
    imgElement.style.opacity = 1;

    icon.classList.add("none");

    // Change the text in textlayer
    textOverlay.classList.add("important");
    textOverlay.style.zIndex = 1;
    document.querySelector(".textlayer > h2").innerText = "Vem ska få stenarna?";
    document.querySelector(".textlayer > p").innerText = "";
    // Change the style of the wrapper #mainBtnNav
    parent.style.bottom = "17px";

    var timeleft = 15;
    var downloadTimer = setInterval(function(){

    // Changes the color of the countdown element in steps from green->yellow->red, 0 == removes counter.   
        if(timeleft <= 15) {
            document.getElementById("countdown").style.color = "#5FBC7C";
        } if(timeleft <= 10) {
            document.getElementById("countdown").style.color = "#E7C55F";
        } if(timeleft <= 5) {
            document.getElementById("countdown").style.color = "#dd3f3f";
        } if(timeleft <= 0){
            clearInterval(downloadTimer);
            document.getElementById("countdown").classList.add("none");
            gkBtn.click();
            parent.classList.remove("flexer");
            parent.classList.add("none");
        } else {
            document.getElementById("countdown").innerHTML = timeleft;
        }
        timeleft -= 1;
    }, 1000);
}
