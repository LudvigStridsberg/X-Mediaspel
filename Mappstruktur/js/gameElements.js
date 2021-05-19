const pianoString = 
'<link rel="stylesheet" href="../../css/pianoStyle.css">' +
'<div id="keyboard">' +
    '<div id="pianoWrapper">' +
        '<div class="whiteKey" id="C"></div>' +
        '<div class="blackKey" id="sC"></div>' +
        '<div class="whiteKey" id="D"></div>' +
        '<div class="blackKey" id="sD"></div>' +
        '<div class="whiteKey" id="E"></div>' +
        '<div class="whiteKey" id="F"></div>' +
        '<div class="blackKey" id="sF"></div>' +
        '<div class="whiteKey" id="G"></div>' +
        '<div class="blackKey" id="sG"></div>' +
        '<div class="whiteKey" id="A"></div>' +
        '<div class="blackKey" id="sA"></div>' +
        '<div class="whiteKey" id="B"></div>' +
        '<div class="hidden" id="feedback">' +
            '<p id="feedbackText"></p>' +
            '<button id="again">Försök igen</button>' +
            '<p>Not-ljud av</p>' +
            '<a href="https://freesound.org/people/ion_/">ion_</a>' +
        '</div>' +
    '</div>' +
'</div>';

const matcherString =     
'<link rel="stylesheet" href="../../css/matcherStyle.css">' +
'<div id="matcherWrapper">' +
    '<div class="flexer" id="panel">' +
        '<div class="flexer" id="move-board">' +
            '<p>Försök kvar:&nbsp</p>' +
            '<span id="moveDisplay"></span>' +
        '</div>' +
        '<div class="flexer" id="score-board">' +
            '<p>Samlade:&nbsp</p>' +
            '<span id="scoreDisplay"></span>' +
            '<p>&nbspav 15</p>' +
        '</div>' +
    '</div>' +
    '<div id="grid" class="gridSize"></div>' +
    '<div id="modal" class="gridSize">' +
        '<div>Åh nej...</div>' +
        '<div id="score-board-modal">' +
            '<div>Du sorterade för få stjärntecken... Kan du inte testa igen?</div>' +
            '<div id="scoreDisplay-modal"></div>' +
        '</div>' +
        '<button id="tryAgain">Jo, klart!</button>' +
    '</div>' +
    '<div id="modal2" class="gridSize">' +
        '<div class="flexer" id="score-board-modal2">' +
            '<div id="thanks">Wow, du klarade det! Tack från djupet av mitt hjärta!</div>' +
        '</div>' +
    '</div>' +
'</div>';

const questString =
'<link rel="stylesheet" href="../../css/interactive.css">' +
'<div id="interWrapper">' +
    '<div id="interLogo"></div>' +
    '<form id="questAnswer" action="" method="POST">' +
        '<div id="questTitle">' +
            '<p></p>' +
        '</div>' +
        '<p id="questFeedback" class="none"></p>' +
        '<input id="questGuess" type="text" name="questOne" placeholder="Svar...">' +
        '<button id="questSubmit">Svara</button>' +
    '</form>' +
'</div>';