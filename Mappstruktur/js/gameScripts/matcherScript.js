console.log('game started');

const matcherSTATE = {
    score: 0,
    moves: 5
}

const grid = document.getElementById('grid');
const modal = document.getElementById('modal');
const modal2 = document.getElementById('modal2');
const tryAgain = document.getElementById('tryAgain');
const help = document.getElementById('help');
const close = document.getElementById('close');
const clue = document.getElementById('clue');
const thanks = document.getElementById('thanks');
const scoreDisplay = document.getElementById('scoreDisplay');
const scoreDisplayModal = document.getElementById('scoreDisplay-modal');
const scoreDisplayModal2 = document.getElementById('scoreDisplay-modal2');
const moveDisplay = document.getElementById('moveDisplay');
moveDisplay.innerHTML = matcherSTATE.moves;

const width = 5;
const squares = [];

const zodiacSigns = [
    '../../media/illustrations/zodiac-signs/cancer.png',
    '../../media/illustrations/zodiac-signs/leo.png',
    '../../media/illustrations/zodiac-signs/pisces.png',
    '../../media/illustrations/zodiac-signs/sagittarius.png',
    '../../media/illustrations/zodiac-signs/taurus.png'
];

// Create board
function createBoard() {
    for (let i = 0; i < width*width; i++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        let randomSign = Math.floor(Math.random() * zodiacSigns.length);
        square.style.backgroundImage = `url(${zodiacSigns[randomSign]})`;
        square.setAttribute('id', i);
        grid.append(square);
        squares.push(square);
    }
}
createBoard();

let haveWon = false;

function chechForWin(){
    // Function som kollar om spelaren får 15p innan movesen är slut
    if (matcherSTATE.score >= 15 && !haveWon){
        console.log('you win');
        // Om poängen är samma eller högre än 15 kommer en modal med text att spelaren klarat det
        modal2.style.display = 'flex';

        // Patch STATE and start outro-dialogue
        patchState("currentUser", "completedGame", true);
        dialogueInit("outro");

        // Reset the game-button
        let gameBtn = document.getElementById("interactiveBtn");
        gameBtn.classList.remove("important");
        haveWon = true;
        //return true;
    } 
}

function checkForLoose(){
    //window.setInterval(function(){
        // Function som kollar när moves är slut
        if (matcherSTATE.moves <= 0){
            console.log('you loose');
            modal.style.display = 'flex';
        }
    //}, 2000);
}


// Klickevent som tömmer den klickade boxen & drar bort 1 på hur många moves som är kvar
squares.forEach(square => square.addEventListener('click', removeWhenClicked));
function removeWhenClicked(){
    // Kolla om det blev en match
    checkRowFor3();
    checkColumnFor3();
    checkRowFor4();
    checkColumnFor4();

    // Lägga minus på drag
    matcherSTATE.moves -= 1;
    moveDisplay.innerHTML = matcherSTATE.moves;

    // Kolla om poängen är >= 15
    //chechForWin();
    if (chechForWin()){
        // Kolla om drag <= 0
        chechForWin()
        
    } else {
        checkForLoose();
    }
   

    // Ta bort bilden från det klickade blocket
    this.style.backgroundImage = '';
}

// Om spelaren klickar på tryAgain
tryAgain.addEventListener('click', function(){
    restartGame();
});

function restartGame() {
    console.log('game restarted');
    modal.style.display = 'none';
    matcherSTATE.score = 0;
    scoreDisplay.innerHTML = matcherSTATE.score;

    matcherSTATE.moves = 5;
    moveDisplay.innerHTML = matcherSTATE.moves;
}


// Drop candies down to empty blocks
function moveDown() {
    for ( i = 0; i < 20; i++ ) {
        // i + width = den som ligger under
        if (squares[i + width].style.backgroundImage === '') {
            // Om den är tom ska den få den färg som ligger i blocket över
            squares[i + width].style.backgroundImage = squares[i].style.backgroundImage;
            squares[i].style.backgroundImage = '';

            const firstRow = [0, 1, 2, 3, 4];
            const isFirstRow = firstRow.includes(i);
            if ( isFirstRow && squares[i].style.backgroundImage === '' ) {
                let randomSign = Math.floor(Math.random() * zodiacSigns.length);
                squares[i].style.backgroundImage = `url(${zodiacSigns[randomSign]})`;
            }
        }
    }
}

// Checking for matches ___________________________________________________________________________________________





// Three -------------------------------------------------------------
// rows
function checkRowFor3(){
    for (i = 0; i < 23; i++) {
        let rowOfThree = [i, i+1, i+2];
        let decidedSign = squares[i].style.backgroundImage;
        const isBlank = squares[i].style.backgroundImage === '';

        const notValid = [3, 4, 8, 9, 13, 14, 18, 19, 23, 24];
        if (notValid.includes(i)) continue;

        if ( rowOfThree.every(index => squares[index].style.backgroundImage === decidedSign && !isBlank )) {

            window.setInterval(function(){
                chechForWin();
            }, 2000);

            matcherSTATE.score += 3;
            scoreDisplay.innerHTML = matcherSTATE.score;

            rowOfThree.forEach(index => {
                squares[index].style.backgroundImage = '';
            })

        }
    }
}


// Checking for matches
// columns
function checkColumnFor3(){
    for (i = 0; i < 15; i++) {
        let columnOfThree = [i, i+width, i+width*2];
        let decidedSign = squares[i].style.backgroundImage;
        const isBlank = squares[i].style.backgroundImage === '';

        if ( columnOfThree.every(index => squares[index].style.backgroundImage === decidedSign && !isBlank )) {

            window.setInterval(function(){
                chechForWin();
            }, 2000);

            matcherSTATE.score += 3;
            scoreDisplay.innerHTML = matcherSTATE.score;

            columnOfThree.forEach(index => {
                squares[index].style.backgroundImage = '';
            })
        }
    }
}


// Four ------------------------------------------------------
// rows
function checkRowFor4(){
    for (i = 0; i < 21; i++) {
        let rowOfFour = [i, i+1, i+2, i+3];
        let decidedSign = squares[i].style.backgroundImage;
        const isBlank = squares[i].style.backgroundImage === '';

        const notValid = [2, 3, 4, 7, 8, 9, 12, 13, 14, 17, 18, 19, 22, 23, 24];
        if (notValid.includes(i)) continue;

        if ( rowOfFour.every(index => squares[index].style.backgroundImage === decidedSign && !isBlank )) {

            window.setInterval(function(){
                chechForWin();
            }, 2000);

            matcherSTATE.score += 4;
            scoreDisplay.innerHTML = matcherSTATE.score;

            rowOfFour.forEach(index => {
                squares[index].style.backgroundImage = '';
            })
        }
    }
}


// Checking for matches
// columns
function checkColumnFor4(){
    for (i = 0; i < 10; i++) {
        let columnOfFour = [i, i+width, i+width*2, i+width*3];
        let decidedSign = squares[i].style.backgroundImage;
        const isBlank = squares[i].style.backgroundImage === '';

        if ( columnOfFour.every(index => squares[index].style.backgroundImage === decidedSign && !isBlank )) {

            window.setInterval(function(){
                chechForWin();
            }, 2000);

            matcherSTATE.score += 4;
            scoreDisplay.innerHTML = matcherSTATE.score;

            columnOfFour.forEach(index => {
                squares[index].style.backgroundImage = '';
            })
        }
    }
}


// För att få checkRowFor3 att köras hela tiden
window.setInterval(function(){
    // Flyttar ner blocken
    moveDown();
    // Kollar om det finns tomma block
    checkRowFor4();
    checkColumnFor4();
    checkRowFor3();
    checkColumnFor3();
}, 100);