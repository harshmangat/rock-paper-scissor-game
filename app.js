let userScore = 0;
let computerScore = 0;
let items = ["rock", "paper", "scissor"];

// const Start = confirm('Ready to play?');
// Start && startGame();


let displayItem = {
  rock: "🗻",
  paper: "📃",
  scissor: "✂️",
}


let resultDisplay = {
  computerwins: "💻 Computer Wins!!",
  userwins: "🥳 You're Winner🥳",
  start: "Please,Select One Item.🤡",
  tie: "🙅 It's a tie",
}


let userSelect;
let computerSelect;

let newUserScore = document.querySelector(".userscore");
let newCompScore = document.querySelector(".compscore");

const selectRock = document.querySelector(".rock");
const selectPaper = document.querySelector(".paper");
const selectScissor =  document.querySelector(".scissor");


let result = document.querySelector(".result");
let playBtn = document.querySelector("#play");
let userImg = document.querySelector("#userImage");
let compImg = document.querySelector(".compImage");


newUserScore.textContent = userScore;
newCompScore.textContent = computerScore;
result.textContent = resultDisplay.start;
selectRock.textContent = displayItem.rock;
selectPaper.textContent = displayItem.paper;
selectScissor.textContent = displayItem.scissor;

const elements = (shouldDisable)=>{
  selectRock.disabled = shouldDisable;
  selectPaper.disabled = shouldDisable;
  selectScissor.disabled = shouldDisable;
}
elements(true);



playBtn.addEventListener("click", ()=>{
  result.textContent = resultDisplay.start;
  
    computerSelect = Math.floor(Math.random() * items.length);
    elements(false);
   
});

selectRock.addEventListener("click", ()=>{
  userSelect = 0;
  endResult()
});
selectPaper.addEventListener("click", ()=>{
  userSelect = 1;
  endResult()
});
selectScissor.addEventListener("click",()=>{
  userSelect = 2;
  endResult()
});


// function computerChoice() {
//   let random = Math.trunc(Math.random() * items.length);
//   return items[random];
// }


// function startGame() {
//   const computerSelect = computerChoice();
//   const userSelect = prompt("Select one item : rock, paper, scissor");
  
//   if(!items.includes(userSelect) ||
//   (userSelect === undefined)) {
//   alert('Please choose a valid item');
//     return startGame();
//  } 
  
//   console.log(game(userSelect, computerSelect));
  
//   const shouldContinue = confirm('Do you want to replay?');
//   shouldContinue && startGame();
// }




function endResult(){
function game() {
  // console.log(`User Select ${userSelect} Computer Select ${computerSelect}`)

   const userWins = 
  (userSelect === 0 && computerSelect === 2) || 
  (userSelect === 2 && computerSelect === 1) || 
  (userSelect === 1 && computerSelect === 0);
  
  if(userWins) {
    result.textContent = resultDisplay.userwins;
    newUserScore.textContent = ++userScore;
    return;
  }
  
  const computerWins = 
  (userSelect === 2 && computerSelect === 0) || 
  (userSelect === 1 && computerSelect === 2) ||
  (userSelect === 0 && computerSelect === 1);
  
  if(computerWins) {
    result.textContent = resultDisplay.computerwins;
    newCompScore.textContent = ++computerScore;
    return;
  }

   
  
  return result.textContent = resultDisplay.tie;
} 

game()
  userImg.innerHTML = displayItem[items[userSelect]];
  compImg.innerHTML = displayItem[items[computerSelect]];
  elements(true);
  
  // playBtn.innerHTML = "reset";


}




