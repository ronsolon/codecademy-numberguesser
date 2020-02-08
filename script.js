let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (to, from) => Math.abs(to - from); // project extensions

const compareGuesses = (humanGuess, compGuess, target) => {
    if (humanGuess < 0 || humanGuess > 9) {
        // alerts the user but does not stop the game
        window.alert('For a greater chance of winning, guess between 0-9!');
    }
    
    // one may also directly get the absolute difference within this function
    let human = getAbsoluteDistance(humanGuess, target);
    let comp = getAbsoluteDistance(compGuess, target);

    return human <= comp;
}

const updateScore = (winner) => {
    switch (winner) {
        case 'human':
            humanScore++;
            break;
        case 'computer':
            computerScore++;
            break;
        default:
            break;
    }

    /* one may also use if-else here:
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
    */
}

const advanceRound = () => currentRoundNumber++;

