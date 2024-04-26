
//gameboard factory 
const gameBoard = ( function() {

    const rows = 3;
    const columns = 3;
    const board = [];

    //creates a 2d array of rows filled with columns. 
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(Cell());
             
        }
    };
 

    const getBoard = board;
      //fills board array with values from cell function, either a '0' or their player token
    const printBoard = () => {
      const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
      return boardWithCellValues
      
    };

  
      //drops a player token based on their selection
    const dropToken = (pick, player) => { 
      let pickI = parseInt(pick);
      console.log(`dropToken function has found ${pickI}`);
      switch (pickI){
      case 1:
        board[0][0].addToken(player);
        break;
      case 2:
        board [0][1].addToken(player);
        break;
      case 3:
        board [0][2].addToken(player);
        break;
      case 4:
        board[1][0].addToken(player);
        break;
      case 5:
        board [1][1].addToken(player);
        break;
      case 6:
        board [1][2].addToken(player);
        break;
      case 7:
        board[2][0].addToken(player);
        break;
      case 8:
        board [2][1].addToken(player);
        break;
      case 9:
        board [2][2].addToken(player);
        break; 
        
      };}


  
    return {getBoard,printBoard,dropToken};
}) 
();

function Cell(){
  let value = 0;

  //get the value of the players token
  const addToken = (player) => {
      value = player;
  };
  //retrieve the current value of the cell through closure
  const getValue = () => value;

  return { addToken, getValue };
};



//logs board just to check 
console.log(gameBoard.printBoard())



//controller to play the game
const playGame = ( function(){
  //turn number, gets added to after every turn
  let turns = 0;


    //array to hold player information, also color for their tokens <@:)
    const players = [
        {
          name: "Player One",
          token: "X",
          color: "red",
          score: 0
        },
        {
          name: "Player Two",
          token: "O",
          color: "blue",
          score: 0
        }
      
      ];
        //calls drop token function, also logs it to keep an eye on things. 
    const playerMove = (player,pick) => {
           
            console.log(`${player.name} did it! Their ${player.token} was dropped!`);
            gameBoard.dropToken(pick, player.token);
            turns += 1;
            checkWin(getActivePlayer());

    };
    //check win function, called after each pick. 
    const checkWin = (player) => {
      // horizontal winners 
      console.log("checkWin is happening now :)")
      if (
        gameBoard.printBoard()[0][0] === (player.token) && gameBoard.printBoard()[0][1] === (player.token)
        && gameBoard.printBoard() [0][2] === (player.token))
        {winnerDiv.textContent = (`${player.name} has succeeded!`);
        dialog.showModal();}
      else if (
        gameBoard.printBoard()[1][0] === (player.token) && gameBoard.printBoard()[1][1] === (player.token)
        && gameBoard.printBoard() [1][2] === (player.token))
        {winnerDiv.textContent = (`${player.name} has succeeded!`);
        dialog.showModal();}
      else if (
        gameBoard.printBoard()[2][0] === (player.token) && gameBoard.printBoard()[2][1] === (player.token)
        && gameBoard.printBoard() [2][2] === (player.token))
        {winnerDiv.textContent = (`${player.name} has succeeded!`);
        dialog.showModal();}
      // vertical winners 
      else if (
        gameBoard.printBoard()[0][0] === (player.token) && gameBoard.printBoard()[1][0] === (player.token)
        && gameBoard.printBoard() [2][0] === (player.token))
        {winnerDiv.textContent = (`${player.name} has succeeded!`);
        dialog.showModal();}
      else if (
        gameBoard.printBoard()[0][1] === (player.token) && gameBoard.printBoard()[1][1] === (player.token)
        && gameBoard.printBoard() [2][1] === (player.token))
        {winnerDiv.textContent = (`${player.name} has succeeded!`);
        dialog.showModal();}
      else if (
        gameBoard.printBoard()[0][2] === (player.token) && gameBoard.printBoard()[1][2] === (player.token)
        && gameBoard.printBoard() [2][2] === (player.token))
        {winnerDiv.textContent = (`${player.name} has succeeded!`);
        dialog.showModal();}
        //diagonal winners 
      else if (
        gameBoard.printBoard()[0][0] === (player.token) && gameBoard.printBoard()[1][1] === (player.token)
        && gameBoard.printBoard() [2][2] === (player.token))
        {winnerDiv.textContent = (`${player.name} has succeeded!`);
        dialog.showModal();}
      else if (
        gameBoard.printBoard()[0][2] === (player.token) && gameBoard.printBoard()[1][1] === (player.token)
        && gameBoard.printBoard() [2][0] === (player.token))
        {winnerDiv.textContent = (`${player.name} has succeeded!`);
        dialog.showModal();}
        //checks if 9 turns have occured without a winner
      else if (turns === 9)
        {winnerDiv.textContent = ("It's a draw!");
      dialog.showModal();}
      //if no win yet, calls changePlayerTurn function and allows next player to pick a button. 
      else {
        changePlayerTurn();
        showPlayer(getActivePlayer());
        console.log(gameBoard.printBoard());
    


      }
    };
    //changes player based on who is current player, very pleased with this. 
    let activePlayer = players[0];
    
    const changePlayerTurn = () => {
      activePlayer = activePlayer  === players[0] ? players[1] : players [0];
    };

    const getActivePlayer = () => activePlayer;



    return {getActivePlayer,playerMove,players};

})();



playGame.playRound;


//selects all buttons in play grid 
const buttons = document.querySelectorAll(".griddies");


//cheeky function that does alot, takes player selection and put it into game logic, adds player token/color to board, 
//disables that "position" on the board.
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    let obj = document.activeElement;
    console.log (`You clicked button ${obj.id}`);
    let pick = parseInt(obj.id);
    obj.textContent = playGame.getActivePlayer().token;
    obj.style.color = playGame.getActivePlayer().color;
    obj.disabled = true;
    playGame.playerMove(playGame.getActivePlayer(),pick);
  
  })
});

//takes current active player and appends it to appropriate div, called to begin with to populate DOM
const displayPlayer = document.getElementById('turn');
let startingPlayer = document.createElement('p');
startingPlayer.textContent = playGame.getActivePlayer().name;
displayPlayer.appendChild(startingPlayer);

//changes active player div as needed 
function showPlayer (player){
  let oldPlayer = displayPlayer.querySelector('p');
  oldPlayer.remove();

  let currentPlayer = document.createElement('p');
  currentPlayer.textContent = player.name;
  displayPlayer.appendChild(currentPlayer);
};

//reloads the whole page. 
const reloadBut = document.getElementById('reset');
reloadBut.addEventListener('click', () => {
  location.reload();
});

//adds the result of checkWinner function to a dialog box
const dialog = document.querySelector('dialog');
const winnerDiv = document.createElement('p');
dialog.appendChild(winnerDiv);
//adds a reset button to the winner dialog box
const dialogReleodButton = document.querySelector("dialog button");
dialogReleodButton.addEventListener('click', () => {
  location.reload();
});

//two dialog boxes to changes the names of both players, player1 or player 2. 
//calls show player function to update if needed. 
const dialog1 = document.getElementById("name1form");
const showdialog1 = document.getElementById("player1name");

showdialog1.addEventListener("click", () =>{
  dialog1.showModal();
});

const new1name = document.getElementById("name1form-submit");
new1name.addEventListener("click", () =>{
  let newName = document.getElementById("one-name").value;
  playGame.players[0].name = newName;
  showPlayer(playGame.getActivePlayer());
});

const dialog2 = document.getElementById("name2form");
const showdialog2 = document.getElementById("player2name");

showdialog2.addEventListener("click", () =>{
  dialog2.showModal();
});

const new2name = document.getElementById("name2form-submit");
new2name.addEventListener("click", () =>{
  let newName = document.getElementById("two-name").value;
  playGame.players[1].name = newName;
  showPlayer(playGame.getActivePlayer());
});
