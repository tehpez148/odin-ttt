

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
      console.log(boardWithCellValues);
    };

    const dropToken = (playerMove) => { 
      ///use drop token value???


    }
   

    return {getBoard,printBoard};
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



console.log(gameBoard.getBoard);
gameBoard.printBoard();

const playGame = ( function(){

    const boardForConsole = () => {
        let boardArray = Array.from({length: 9}, (_, i) => i + 1);
        return boardArray;
    };


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
        let bArray = boardForConsole();
            while (bArray.includes(parseInt(pick)) === false) {
                pick = prompt("That's no bueno, try again. 1 to 9.")}
            console.log(`${player.name} did it! Their ${player.token} was dropped!`)

    };

    const checkWin = (player) => {
      if (
        gameBoard.getBoard[0][0] === (player.token) && gameBoard.getBoard[0][1] === (player.token) && gameBoard.getBoard [0][2])
        {alert(`${player.name} has succeeded!`);}
      else {
        changePlayerTurn();
        playRound(getActivePlayer);


      }
    };

    let activePlayer = players[0];
    
    const changePlayerTurn = () => {
      activePlayer = activePlayer  === players[0] ? players[1] : players [0];
  
    }

    const getActivePlayer = () => activePlayer;
    
    const playRound = () => {
        console.log("Let's tic-tac-GO!");
        console.log("pick a number on the board, 1 to 9");

        playerMove(getActivePlayer());

        checkWin(getActivePlayer());
      };                      





    return {boardForConsole, playRound};

})();


playGame.boardForConsole;

playGame.playRound();


