// function play(){
//     // hidden the home screen
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
 
//     // show the playground 

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }
function continueGame(){
    // step 1: generate a random alphabet
    const alphabet = getARondomAlphabet();
    console.log('your random alphabet :',alphabet);

    // set random alphabet for the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color 
    setBackgroundColorById(alphabet);
    
}


function play(){

    hiddenElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}