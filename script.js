console.log("Hello");

// 1. Generate and assign random selection to computer for rock paper and scissor
// 2. Capture player valid input selection
// 3. Compare computer selection with that of player selection
//  3a. Rock - Scissor = Rock wins
//  3a. Rock - Paper   = Paper wins
//  3a. Rock - Rock    = tie
//  3a. Scissor - Scissor = tie
//  3a. Scissor - Paper = Scissor wins
//  3a. Paper - Paper = tie


function generateComputerchoice() {
    // initialise array with valid selection values
    let selectionValues = ["rock","paper","scissor"];

    //generate random value between 0, 1 , 2
    let i = Math.floor(Math.random() *3);

    //select from valid values

    let computerSelection = selectionValues[i];

    //return selection


    return computerSelection;
}




function capturePlayerchoice(){
    let playerChoice = prompt("Enter choice");
    let lowercaseChoice = playerChoice.toLowerCase();

    if ((lowercaseChoice !== "rock")&& (lowercaseChoice !== "paper") && (lowercaseChoice !== "scissor")) {
        console.log("Invalid Choice. Please select - rock, paper or scissor");
        return capturePlayerchoice();
    } 
    
    return lowercaseChoice;
    

}

function determineWinner(computerSelection,lowercaseChoice){

    let declareWinner;

    if (computerSelection == "rock" ) {
        if (lowercaseChoice == "paper") {
            declareWinner = "Player 1 wins";
            
        }
            else if (lowercaseChoice == "scissor")  {
            declareWinner = "Computer wins";
            
        } else declareWinner = "its a tie";

    } else if (computerSelection == "paper") {
        if (lowercaseChoice == "scissor") 
            declareWinner = "Player 1 wins";
            else if (lowercaseChoice == "rock") 
            declareWinner = "Computer wins";
            else declareWinner = "its a tie";


    } else if (computerSelection == "scissor") {
        if (lowercaseChoice == "rock") 
            declareWinner = "Player 1 wins";
            else if (lowercaseChoice == "paper") 
            declareWinner = "Computer wins";
            else declareWinner = "its a tie";

    } 

    return declareWinner;
}

let computerSelection = generateComputerchoice();
console.log(computerSelection);
let lowercaseChoice = capturePlayerchoice();
console.log(lowercaseChoice);
console.log(determineWinner(computerSelection, lowercaseChoice));