// function play(){
//     // hidden the home screen
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // show the playground 

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function handlerKeyboardKeyUoEvent(event) {
    const playerPressed = event.key;
//  stop the game if pressed Esc
if(playerPressed === 'Escape'){
    gameOver();
}

    // get  the expeted to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expetedAlphabet = currentAlphabet.toLowerCase();
    //check match or not
    if (playerPressed === expetedAlphabet) {
        console.log('you get a point');
        // update score 
        const currentScore = getTextElementValueById('current-score');
        const updateScore = currentScore + 1;
        setTextElementValueById('current-score', updateScore);

        removeBackgroundColorById(expetedAlphabet);
        continueGame();
        // ---------------------------------- system 1
        // 1.get the score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);

        // //2.new the score 
        // const newScore = currentScore + 1;
        // // 3. show the updated score
        // currentScoreElement.innerText = newScore;

        // start a new round
        // removeBackgroundColorById(expetedAlphabet);
        // continueGame();
    }
    else {
        console.log('you missed and you lost a life');
        const currentLife = getTextElementValueById('current-life');
        const updateLife = currentLife - 1;
        setTextElementValueById('current-life', updateLife);

        if (updateLife === 0) {
            gameOver();
        }
        // -------------------------------------------
        //  system number 1 
        // stap 1: get the current numbers
        // const currentlifeElement  = document.getElementById('current-life');
        // const currentLifeText = currentlifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // console.log(currentLife);

        // // 2 reduce the life number
        // const newLife = currentLife - 1;

        // // 3. display the updated life count
        // currentlifeElement.innerText = newLife; 
    }
}
// capture keyboard key press
document.addEventListener('keyup', handlerKeyboardKeyUoEvent)

function continueGame() {
    // step 1: generate a random alphabet
    const alphabet = getARondomAlphabet();
    // console.log('your random alphabet :',alphabet);

    // set random alphabet for the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color 
    setBackgroundColorById(alphabet)
}

function play() {
    // hide everything show only the playground
    hiddenElementById('home-screen');
    hiddenElementById('final-score')
    showElementById('play-ground');

    //  reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0)
    continueGame();
}

function gameOver() {
    hiddenElementById('play-ground');
    showElementById('final-score')

    //  update final score
    // get the final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score',lastScore);

    // clear the last selected alphabet helight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}