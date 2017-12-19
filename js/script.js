//Class 1:
// Fork and clone the repo and set up your project workspace and link files
// Write HTML for your project
//Class 2:  
// Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
// Practice using console.log() and debugger to debug your code
// Create your document ready function. 
// Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
// Display the user choice to the output screen
//Class 3:  
// Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
// Display the computer choice to the output screen
// Compare the user choice and the computer choice to determine who won. 
// Display the user winner to the output screen 
// Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
var userChoice = "";
var computerChoice = "";
var winner = "";
var game = ["Rock", "Paper", "Scissors"];

$(document).ready(function() {

                console.log(game);
                $("#button").click(function() {
                                userChoice = $("#input1").val();
                                console.log(userChoice);
                                $("#user-choice").append(userChoice);
                                computerChoice = game[Math.floor(Math.random() * 3)];
                                console.log(computerChoice);

                                if (userChoice === computerChoice) {

                                        console.log("Tie!");

                                }
                                else if (userChoice === "Rock" && computerChoice === "Scissors"){

                                        console.log("User Wins!");

                        }
                        else if (userChoice === "Rock" && computerChoice === "Paper"){

                                console.log("Computer Wins!")

                }
                else if (userChoice === "Paper" && computerChoice === "Rock"){

                        console.log("User Wins!")

        }
        else if (userChoice === "Paper" && computerChoice === "Scissors"){

                console.log("Computer Wins!")

}
else if (userChoice === "Scissors" && computerChoice === "Paper"){

        console.log("User Wins!")

}
else if (userChoice === "Scissors" && computerChoice === "Rock"){

        console.log("Computer Wins")
});
});

//FUNCTIONS



// DOCUMENT READY FUNCTION
