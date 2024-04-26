

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

    const printBoard = () => {
      const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
      return boardWithCellValues
      
    };

  

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




console.log(gameBoard.printBoard())




const playGame = ( function(){

    let boardForChecks = [1,2,3,4,5,6,7,8,9];


    const players = [
        {
          name: "Player one",
          token: "X"
        },
        {
          name: "Player two",
          token: "O"
        }
      ];
        
    const playerMove = (player,pick) => {
        //let bArray = boardForChecks;
            //while (bArray.includes(parseInt(pick)) === false) {
           
            console.log(`${player.name} did it! Their ${player.token} was dropped!`);
            //delete bArray[(pick - 1)];
            gameBoard.dropToken(pick, player.token);
            checkWin(getActivePlayer());

    };
    const checkWin = (player) => {
      // horizontal winners 
      console.log("checkWin is happening now :)")
      if (
        gameBoard.printBoard()[0][0] === (player.token) && gameBoard.printBoard()[0][1] === (player.token)
        && gameBoard.printBoard() [0][2])
        {winnerDiv.textContent = (`${player.name} has succeeded!`);
        dialog.showModal();}
      else if (
        gameBoard.printBoard()[1][0] === (player.token) && gameBoard.printBoard()[1][1] === (player.token)
        && gameBoard.printBoard() [1][2])
        {winnerDiv.textContent = (`${player.name} has succeeded!`);
        dialog.showModal();}
      else if (
        gameBoard.printBoard()[2][0] === (player.token) && gameBoard.printBoard()[2][1] === (player.token)
        && gameBoard.printBoard() [2][2])
        {winnerDiv.textContent = (`${player.name} has succeeded!`);
        dialog.showModal();}
      // vertical winners 
      else if (
        gameBoard.printBoard()[0][0] === (player.token) && gameBoard.printBoard()[1][0] === (player.token)
        && gameBoard.printBoard() [2][0])
        {winnerDiv.textContent = (`${player.name} has succeeded!`);
        dialog.showModal();}
      else if (
        gameBoard.printBoard()[0][1] === (player.token) && gameBoard.printBoard()[1][1] === (player.token)
        && gameBoard.printBoard() [2][1])
        {winnerDiv.textContent = (`${player.name} has succeeded!`);
        dialog.showModal();}
      else if (
        gameBoard.printBoard()[0][2] === (player.token) && gameBoard.printBoard()[1][2] === (player.token)
        && gameBoard.printBoard() [2][2])
        {winnerDiv.textContent = (`${player.name} has succeeded!`);
        dialog.showModal();}
        //diagonal winners 
      else if (
        gameBoard.printBoard()[0][0] === (player.token) && gameBoard.printBoard()[1][1] === (player.token)
        && gameBoard.printBoard() [2][2])
        {winnerDiv.textContent = (`${player.name} has succeeded!`);
        dialog.showModal();}
      else if (
        gameBoard.printBoard()[0][2] === (player.token) && gameBoard.printBoard()[1][1] === (player.token)
        && gameBoard.printBoard() [2][0])
        {winnerDiv.textContent = (`${player.name} has succeeded!`);
        dialog.showModal();}
      else if (boardForChecks.length === 0)
      {winnerDiv.textContent = ("It's a draw!")}
      //if no win yet, calls changePlayerTurn function and allows next player to pick a button. 
      else {
        changePlayerTurn();
        showPlayer(getActivePlayer());
        console.log(gameBoard.printBoard());
    


      }
    };

    let activePlayer = players[0];
    
    const changePlayerTurn = () => {
      activePlayer = activePlayer  === players[0] ? players[1] : players [0];
  
    }

    const getActivePlayer = () => activePlayer;
    
    /*const playRound = () => {

        playerMove(getActivePlayer(),);

        checkWin(getActivePlayer());

        return;
      };                      

*/



    return {getActivePlayer,playerMove};

})();



playGame.playRound;



const buttons = document.querySelectorAll(".griddies");

buttons.forEach(function(button) {
  button.addEventListener("hover", function(){
    let symbol = playGame.getActivePlayer().token;
    let symbolP = document.createElement('p');
    symbolP.textContent = symbol;
    button.appendChild(symbolP);
  

  })

});


buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    let obj = document.activeElement;
    console.log (`You clicked button ${obj.id}`);
    let pick = parseInt(obj.id);
    obj.textContent = playGame.getActivePlayer().token;
    playGame.playerMove(playGame.getActivePlayer(),pick);
   
    
  })
});


const displayPlayer = document.getElementById('turn');
let startingPlayer = document.createElement('p');
startingPlayer.textContent = playGame.getActivePlayer().name;
displayPlayer.appendChild(startingPlayer);

function showPlayer (player){
  let oldPlayer = displayPlayer.querySelector('p');
  oldPlayer.remove();

  let currentPlayer = document.createElement('p');
  currentPlayer.textContent = player.name;
  displayPlayer.appendChild(currentPlayer);
};


const reloadBut = document.getElementById('reset');
reloadBut.addEventListener('click', () => {
  location.reload();
});

const dialog = document.querySelector('dialog');
const winnerDiv = document.createElement('p');
dialog.appendChild(winnerDiv);

const dialogReleadButton = document.querySelector("dialog button");
dialogReleadButton.addEventListener('click', () => {
  location.reload();
});