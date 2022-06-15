//tic-tac-toe
//Multiplayer mode

var board = [0,1,2,
    3,4,5,
    6,7,8]

const gameBoard = {
lastValue: lastValue = null,
rounds: roundCount = 0,
insert(value, index){
    if(value == "x" && board[index] != "x" && board[index] != "o"){
        board.splice(index,1 , value);
        roundCount += 1;
    }
    else if(value == "o" && board[index] != "x" && board[index] != "o"){
        board.splice(index,1 , value);
        roundCount += 1;
    }

    this.score(board,value)
},

score(array, player){
    
    if(array[0] == player && array[1] == player && array[2] == player
    || array[3] == player && array[4] == player && array[5] == player
    || array[6] == player && array[7] == player && array[8] == player  
    || array[0] == player && array[3] == player && array[6] == player  
    || array[1] == player && array[4] == player && array[7] == player  
    || array[2] == player && array[5] == player && array[8] == player  
    || array[0] == player && array[4] == player && array[8] == player  
    || array[2] == player && array[4] == player && array[6] == player     
){  modals.victory(player)
    return true
}else if(roundCount == 9){
    modals.victory("draw");
    return false;
}
 
    }
}

const input = {
mainPlayer: setMainPlayer = "",
otherPLayer: setOtherPlayer = "",
count: count = 0,
boardArray: boardArray = document.querySelectorAll(".sector"),
boardInput(){
for(let x=0;x<boardArray.length;x++){
 boardArray[x].addEventListener("click", ()=>{
     if(count%2 == 0 && board[x] != "x" && board[x] != "o"){
         count += 1;
        //  console.log(boardArray[x].innerHTML);
         gameBoard.insert(setMainPlayer,x);
         if(setMainPlayer == 'x'){
             boardArray[x].classList.add("sectorX");
         }
         else if(setMainPlayer == 'o'){
             boardArray[x].classList.add("sectorO");
         }   

     }
     else if(count%2 == 1 && board[x] != "x" && board[x] != "o"){
         count += 1;
         gameBoard.insert(setOtherPlayer,x);
         if(setOtherPlayer == 'o'){
             boardArray[x].classList.add("sectorO");
         }
         else if(setOtherPlayer == 'x'){
             boardArray[x].classList.add("sectorX");
         }
     }
 })
}
},

setPlayerMark(){
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
player1.addEventListener("click", ()=>{
 setMainPlayer = player1.innerHTML.toLowerCase();
 setOtherPlayer = player2.innerHTML.toLowerCase();
 console.log("Player1 = " + setMainPlayer);
 console.log("Player2 = " + setOtherPlayer);  
 
})
player2.addEventListener("click", ()=>{
 setMainPlayer = player2.innerHTML.toLowerCase();
 setOtherPlayer = player1.innerHTML.toLowerCase();
 console.log("Player1 = " + setMainPlayer);
 console.log("Player2 = " + setOtherPlayer);      
})
},

clearBoard(){
var victory = document.getElementById("victory")
for(let x=0;x<boardArray.length;x++){
 this.boardArray[x].classList.remove("sectorX");
 this.boardArray[x].classList.remove("sectorO");
 this.boardArray[x].innerText = "";
 this.boardArray[x].style.backgroundColor = "rgb(51, 86, 104)";
 victory.innerHTML="";
 count = 0;
 roundCount = 0;
 board[x] = x;
 
}

}

}

const modals = {

playerSelect(){
var selectP = document.getElementById("selectP");
var modalCo = document.getElementById("playerModal");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var board = document.getElementById("board");
var gameMode = document.getElementById("gameMode");
var single = document.getElementById("single");
var multi = document.getElementById("multi");


selectP.addEventListener("click", () => {
 input.clearBoard();
 gameMode.classList.add("show");
 gameMode.style.pointerEvents="auto";
 
})
multi.addEventListener("click", () =>{
    gameMode.classList.remove("show");
    gameMode.style.pointerEvents="none";
    modalCo.classList.add("show");
    board.style.pointerEvents="none";
})

player1.addEventListener("click", () => {
 modalCo.classList.remove("show");
 board.style.pointerEvents="auto";

 
})
player2.addEventListener("click", () => {
 modalCo.classList.remove("show");
 board.style.pointerEvents="auto";

 
})
single.addEventListener("click", () => {
    startGame()
    gameMode.classList.remove("show");
    gameMode.style.pointerEvents="none";
})
},

victory(who){
var victory = document.getElementById("victory");
if(who == "x"){
 victory.innerHTML = "X Wins!";
 victory.classList.add("show");
 setTimeout(()=> victory.classList.remove("show"),1300);
 
 

}
else if(who == "o"){
 victory.innerHTML = "O Wins!";
 victory.classList.add("show");
 setTimeout(()=> victory.classList.remove("show"),1300);
 
}        
else{
 victory.innerHTML = "Draw!";
 victory.classList.add("show")
 setTimeout(()=> victory.classList.remove("show"),1300);
 

}
}

}


//Single player mode
//Main code source: github.com/ahmadabdolsaheb/minimaxarticle

    var origBoard;
    const sector = document.getElementsByClassName("sector")
    const huPlayer = "O"
    const aiPlayer = "X"
    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
]

    function startGame(){
        // sector = document.querySelectorAll(".sector")
        origBoard = Array.from(Array(9).keys());
        input.clearBoard();
        for (var i = 0; i < sector.length; i++){
            console.log(sector[i].id)
            sector[i].addEventListener("click", turnClick, false)
        }
    }

    function turnClick(square) {
        if (typeof origBoard[square.target.id] == "number"){
            console.log(square.target.id);
            turn(square.target.id, huPlayer)
            if (!checkWin(origBoard, huPlayer) && !checkTie()) turn(bestSpot(), aiPlayer);
        }

    }

    function turn(squareId, player) {
        origBoard[squareId] = player;
        console.log(squareId)
        var inner = document.getElementById(squareId)
        // var innerTxt = inner.innerHTML = player;
        console.log(inner)
        if(origBoard[squareId] === "O"){
            inner.classList.add("sectorO");
        }
        else if(origBoard[squareId] === "X"){
            inner.classList.add("sectorX");
        }
        let gameWon = checkWin(origBoard, player);
        if (gameWon) gameOver(gameWon)

    }
    
    function checkWin(board, player) {
        //study notes
        //board.reduce(a, e, i) passa pelo array(board) e acumula(a) em outro array
        //os index(i) quando o elemento(e) for igual ao valor do jogador(player)
        //dessa forma, sabe-se quais sao as celulas ja foram ocupadas por jogadas do player em questão
        // ? = then 
        // : = else

        //---Exemplos---

        // let player = "O"
        // let board = ["O","O","O",3,4,5]
        // let testReduce = board.reduce((a, e, i) =>
        // (e === player) ? a.concat(i) : a, [])
        // console.log(testReduce.indexOf(2))//retorna [1,4]
        // Para cada array dentro de winCombo salvar o index e o valor em si(let[index, win])
        // Exempo: vai percorrer o primeiro valor como index = 0 e win = [0,1,2] 
        // E então irá verificar se cada elemento dentro do array vitorioso "win"
        // foi percorrido pela jogada do player que consta como retorno da função "plays = board.reduce()"
        // e irá salvar qual o index vencedor e qual foi o jogador vitorioso na variável gameWon.
        // Exemplo:
        // var board2 = [[3, 4, 5], [0, 1, 2]]
        // for(let[index, example] of board2.entries()){
        //     if(example.every(elem => testReduce.indexOf(elem) > -1)){
        //         gameTest = {index: index, player: player};
        //         break;
            
        //     }
            
            
        // }
        // console.log(gameTest)//retorna { index: 1, player: 'O' } pois o testReduce possui a sequencia vitoriosa que esta presente no segundo index do array board2
        let plays = board.reduce((a, e, i) => 
        (e === player) ? a.concat(i) : a, []);
        let gameWon = null;
        // creates array with index number and winner array combo
        for (let [index, win] of winCombos.entries()) {
            //função win.every verifica se todos os elementos dentro do array win estão contidos no array plays, se não estiver contido irá retornar -1
            if (win.every(elem => plays.indexOf(elem) > -1)) {
                gameWon = {index: index, player: player};
                break;
            }
            
        }
        return gameWon;
    }

    function gameOver(gameWon) {
        for (let index of winCombos[gameWon.index]) {
            document.getElementById(index).style.backgroundColor = 
            gameWon.player == huPlayer ? "blue" : "red";
        }
        for (var i = 0; i < sector.length; i++) {
            sector[i].removeEventListener("click", turnClick, false);
        }
        declareWinner(gameWon.player == huPlayer ? "You win!" : "You lose!");
    }

    function declareWinner(who) {
        // document.querySelector(".endgame").style.display = "block";
        // document.querySelector(".endgame .text").innerText = who;
        console.log("winner is ", who)
    
    }

    function emptySquares() {
        return origBoard.filter(s => typeof s == "number")
    }

    function bestSpot() {
        //AI basica = emptySquares()[0];
            return minimax(origBoard, aiPlayer).index;
    
    }
    function checkTie() {
        if (emptySquares().length == 0) {
            for (var i = 0; i < sector.length; i++) {
                modals.victory("draw");
                sector[i].style.backgroundColor = "green";
                sector[i].removeEventListener("click", turnClick, false);
            }
            declareWinner("Tie Game!");
            return true;
        }
        return false;
    }

    function minimax(newBoard, player) {
        //availSpots finds empty squares and returns an array with numbers
        var availSpots = emptySquares();
        //checks if anyone won the game or the game is over with a draw
        if (checkWin(newBoard, huPlayer)) {
            return {score: -10};
        } else if (checkWin(newBoard, aiPlayer)) {
            return {score: 10};
        } else if (availSpots.length === 0) {
            return {score: 0};
        }
        //creates array where moves will be stored
        /*
        runs through all availSpots and each spot number value is set 
        as the newBoard index and then the newBoard index value is set 
        as the index key value from the move object and finally the
        newBoard index receives the player symbol("O" or "X")
        */
       
        var moves = [];
        for (var i = 0; i < availSpots.length; i++) {
            var move = {};
            move.index = newBoard[availSpots[i]];
            newBoard[availSpots[i]] = player;
            //minimax is invoked recursively for each availSpot, each recursion changes the player
            //untill every possible play has been made and the best moves with the best score can be calculated 
            if (player == aiPlayer) {
                var result = minimax(newBoard, huPlayer);
                move.score = result.score;
            } else {
                var result = minimax(newBoard, aiPlayer);
                move.score = result.score;
            }
    
            newBoard[availSpots[i]] = move.index;
            
            moves.push(move);
            // console.log(moves)
        }
    //bestMove will save the highest score or the lowest score depending on the player
        var bestMove;
        if(player === aiPlayer) {
            var bestScore = -10000;
            for(var i = 0; i < moves.length; i++) {
                if (moves[i].score > bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                    count += 1;
                }
            }
        } else {
            var bestScore = 10000;
            for(var i = 0; i < moves.length; i++) {
                if (moves[i].score < bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        }
        return moves[bestMove];
    }



modals.playerSelect()
y = input;
y.setPlayerMark()
y.boardInput()
