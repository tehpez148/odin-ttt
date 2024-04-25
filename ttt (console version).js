

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

    const playerMove = (player) => {
        let pick = prompt(`${player.name}, pick a number between 1 and 9`);
        let bArray = boardForChecks;
            while (bArray.includes(parseInt(pick)) === false) {
                pick = prompt("That's no bueno, try again. 1 to 9.")}
            console.log(`${player.name} did it! Their ${player.token} was dropped!`);
            delete bArray[(pick - 1)];
            gameBoard.dropToken(pick, player.token);

    };

    const checkWin = (player) => {
      // horizontal winners 
      console.log("checkWin is happening now :)")
      if (
        gameBoard.printBoard()[0][0] === (player.token) && gameBoard.printBoard()[0][1] === (player.token)
        && gameBoard.printBoard() [0][2])
        {alert(`${player.name} has succeeded!`);}
      else if (
        gameBoard.printBoard()[1][0] === (player.token) && gameBoard.printBoard()[1][1] === (player.token)
        && gameBoard.printBoard() [1][2])
        {alert(`${player.name} has succeeded!`);}
      else if (
        gameBoard.printBoard()[2][0] === (player.token) && gameBoard.printBoard()[2][1] === (player.token)
        && gameBoard.printBoard() [2][2])
        {alert(`${player.name} has succeeded!`);}
      // vertical winners 
      else if (
        gameBoard.printBoard()[0][0] === (player.token) && gameBoard.printBoard()[1][0] === (player.token)
        && gameBoard.printBoard() [2][0])
        {alert(`${player.name} has succeeded!`);}
      else if (
        gameBoard.printBoard()[0][1] === (player.token) && gameBoard.printBoard()[1][1] === (player.token)
        && gameBoard.printBoard() [2][1])
        {alert(`${player.name} has succeeded!`);}
      else if (
        gameBoard.printBoard()[0][2] === (player.token) && gameBoard.printBoard()[1][2] === (player.token)
        && gameBoard.printBoard() [2][2])
        {alert(`${player.name} has succeeded!`);}
        //diagonal winners 
      else if (
        gameBoard.printBoard()[0][0] === (player.token) && gameBoard.printBoard()[1][1] === (player.token)
        && gameBoard.printBoard() [2][2])
        {alert(`${player.name} has succeeded!`);}
      else if (
        gameBoard.printBoard()[0][2] === (player.token) && gameBoard.printBoard()[1][1] === (player.token)
        && gameBoard.printBoard() [2][0])
        {alert(`${player.name} has succeeded!`);}
      else if (boardForChecks.length === 0)
      {alert("It's a draw!")}
      //if no win yet, calls changePlayerTurn function and re-calls playRoud with a new active player 
      else {
        changePlayerTurn();
        playRound(getActivePlayer);
        console.log(gameBoard.printBoard());
    


      }
    };

    let activePlayer = players[0];
    
    const changePlayerTurn = () => {
      activePlayer = activePlayer  === players[0] ? players[1] : players [0];
  
    }

    const getActivePlayer = () => activePlayer;
    
    const playRound = () => {

        playerMove(getActivePlayer());

        checkWin(getActivePlayer());
      };                      





    return {playRound};

})();




playGame.playRound();

