const C = document.getElementById('C');
const D = document.getElementById('D');
const E = document.getElementById('E');
const F = document.getElementById('F');
const G = document.getElementById('G');
const A = document.getElementById('A');
const B = document.getElementById('B');

const sC = document.getElementById('sC');
const sD = document.getElementById('sD');
const sF = document.getElementById('sF');
const sG = document.getElementById('sG');
const sA = document.getElementById('sA');

const feedback = document.getElementById('feedback');
const feedbackText = document.getElementById('feedbackText');
const again = document.getElementById('again');

const dNote = new Audio('../../media/notes/d3.mp3');
const eNote = new Audio('../../media/notes/e3.mp3');
const fNote = new Audio('../../media/notes/f3.mp3');
const cNote = new Audio('../../media/notes/c3.mp3');
const gNote = new Audio('../../media/notes/g3.mp3');
const aNote = new Audio('../../media/notes/a3.mp3');
const bNote = new Audio('../../media/notes/b3.mp3');

const sCNote = new Audio('../../media/notes/cs3.mp3');
const sDNote = new Audio('../../media/notes/ds3.mp3');
const sFNote = new Audio('../../media/notes/fs3.mp3');
const sGNote = new Audio('../../media/notes/gs3.mp3');
const sANote = new Audio('../../media/notes/as3.mp3');

const correctArray = ['D', 'E', 'F', 'G', 'E', 'C', 'D'];

// The Lick: D, E, F, G, E, C, D

let playerArray = [];

function arrayCheck() {
    let result;
    if (playerArray.length == 7) {
        result = arrayLooper();
        if(result) {
            feedback.classList.remove('hidden');
            feedback.classList.add('good', 'visible');
            feedbackText.innerText = 'Good job!';
            patchState("currentUser", "completedGame", true);
            dialogueInit("outro");
            // gameDeactivation();
            let gameBtn = document.getElementById("interactiveBtn");
            gameBtn.classList.remove("important");
        } else {
            feedback.classList.remove('hidden');
            feedback.classList.add('bad', 'visible');
            feedbackText.innerText = 'Bad job!';
        }
    }
}

function arrayLooper() {
    let correctAnswers = 0;
    playerArray.forEach(function(e, i) {
        if(correctArray[i] == e) {
            correctAnswers++;
        } else {
            correctAnswers = 0;
        }
    });
    if(correctAnswers == correctArray.length) {
        return true;
    } else {
        return false;
    }
}

again.addEventListener('click', e => {
    feedback.classList.remove('good', 'bad', 'visible');
    feedback.classList.add('hidden');
    feedbackText.innerText = '';
    playerArray = [];
});

C.addEventListener('click', e => {
    playerArray.push('C');
    cNote.play();
    console.log(playerArray);
    arrayCheck();
});

D.addEventListener('click', e => {
    playerArray.push('D');
    dNote.play();
    console.log(playerArray);
    arrayCheck();
});

E.addEventListener('click', e => {
    playerArray.push('E');
    eNote.play();
    console.log(playerArray);
    arrayCheck();
});

F.addEventListener('click', e => {
    playerArray.push('F');
    fNote.play();
    console.log(playerArray);
    arrayCheck();
});

G.addEventListener('click', e => {
    playerArray.push('G');
    gNote.play();
    console.log(playerArray);
    arrayCheck();
});

A.addEventListener('click', e => {
    playerArray.push('A');
    aNote.play();
    console.log(playerArray);
    arrayCheck();
});

B.addEventListener('click', e => {
    playerArray.push('B');
    bNote.play();
    console.log(playerArray);
    arrayCheck();
});

sC.addEventListener('click', e => {
    playerArray.push('sC');
    sCNote.play();
    console.log(playerArray);
    arrayCheck();
});

sD.addEventListener('click', e => {
    playerArray.push('sD');
    sDNote.play();
    console.log(playerArray);
    arrayCheck();
});

sF.addEventListener('click', e => {
    playerArray.push('sF');
    sFNote.play();
    console.log(playerArray);
    arrayCheck();
});

sG.addEventListener('click', e => {
    playerArray.push('sG');
    sGNote.play();
    console.log(playerArray);
    arrayCheck();
});

sA.addEventListener('click', e => {
    playerArray.push('sA');
    sANote.play();
    console.log(playerArray);
    arrayCheck();
});
