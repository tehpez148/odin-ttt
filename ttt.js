

const gameBoard = ( function() {

    const rows = 3;
    const columns = 3;
    const board = [];

    //creates a 2d array of rows filled with columns. 
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i][j] = j;
             
        }
    };
 

    const getBoard = board;

   

    return {getBoard};
}) 
();





console.log(gameBoard.getBoard);

const playGame = ( function(){

    const boardForConsole = () => {
        let boardArray = Array.from({length: 10}, (_, i) => i + 1);
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


    
    const playRound = () => {
        console.log("Let's tic-tac-GO!");
        console.log("pick a number on the board, 1 to 9");
        
        
        let turn = true;
        if (turn = true) {
                playerMove(players[0]);
                turn = false;
              } else {
                console.log("boobs");
              }

    };                      





    return {boardForConsole, playRound};

})();

console.log(playGame.boardForConsole);

playGame.playRound();


