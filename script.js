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


function generateComputerchoice() {  // this function generates random computer selection and returns it back to calling module
    // initialise array with valid selection values
    let selectionValues = ["rock","paper","scissor"];

    //generate random value between 0, 1 , 2
    let i = Math.floor(Math.random() *3);

    //select from valid values

    let computerSelection = selectionValues[i];

    //return selection

    return computerSelection;
}




function capturePlayerchoice(){  // this function prompts user to provide valid selection and returns it back to calling module
    // capture player choice
    let playerChoice = prompt("Enter choice");
    // Convert the user text to lowercase
    let lowercaseChoice = playerChoice.toLowerCase();
    
    //Check for valid user selection
    if ((lowercaseChoice !== "rock")&& (lowercaseChoice !== "paper") && (lowercaseChoice !== "scissor")) {
        console.log("Invalid Choice. Please select - rock, paper or scissor"); // display invalid selection message back to player
        return capturePlayerchoice(); //Promt user for valid selection
    } 
    
    return lowercaseChoice; //retrun player selection 
    

}

function determineWinner(computerSelection,lowercaseChoice){   // this function determines the winner by comparing the computer selection with that of player selections

    let declareWinner;                                  // holds value to winner and returns back to calling module
    

    if (computerSelection == "rock" ) {                 // Determine the winner when computer selection is rock with that of player selection and increment win count
        if (lowercaseChoice == "paper") {
            declareWinner = "You Win! Paper beats Rock";
            playerWincount++;
            
        }
            else if (lowercaseChoice == "scissor")  {       
            declareWinner = "Computer wins, Rock beats scissor";
            computerWincount++;
            
        } else {
            declareWinner = "It's a tie";
            /*playerWincount++;
            computerWincount++;*/
        }

    } else if (computerSelection == "paper") {             // Determine the winner when computer selection is paper with that of player selection and increment win count
        if (lowercaseChoice == "scissor") {
            declareWinner = "You Win! Scissor beats Paper";
            playerWincount++;
        }else if (lowercaseChoice == "rock") {
            declareWinner = "Computer wins, Paper beats Rock";
            computerWincount++;
        }else {
            declareWinner = "It's a tie";
            /*playerWincount++;
            computerWincount++;*/
        }
            
            


    } else if (computerSelection == "scissor") {           // Determine the winner when computer selection is scissor with that of player selection and increment win count
        if (lowercaseChoice == "rock") {
            declareWinner = "You Win! Rock beats Scissor";
            playerWincount++;
        }else if (lowercaseChoice == "paper") {
            declareWinner = "Computer wins, Scissor beats paper";
            computerWincount++;
        }else {
            declareWinner = "It's a tie";
            /*playerWincount++;
            computerWincount++;*/
        }

    } 

    return declareWinner;    //Return the winner to calling module 
}

function game(){
    let computerSelection = generateComputerchoice();  //Generate computer selection
    console.log(computerSelection);
    let lowercaseChoice = capturePlayerchoice();       //Capture Player selection
    console.log(lowercaseChoice);
    
    console.log(determineWinner(computerSelection, lowercaseChoice));  //Determine the winner
}

let playerWincount=0;                 // variable to hold player win counts
let computerWincount=0;               // variable to hold Computer win counts
for (i=0;i<5;i++){                    // Iterate the game 5 times 
    game();
}


function declareWinner (){
    if (playerWincount > computerWincount){            // most of wins of the 5 , will be the winner of the game!
        console.log("Player wins the game");
    } else if(computerWincount>playerWincount){
        console.log("Computer wins the game");
    } else console.log("Its's a tie");
    
}

console.log(playerWincount);
console.log(computerWincount);