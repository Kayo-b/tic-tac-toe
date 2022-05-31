//tic-tac-toe

var board = [0,1,2,
               3,4,5,
               6,7,8]

const gameBoard = {
    lastValue: lastValue = null,
    rounds: roundCount = 0,
    insert(value, index){
        if(value == "x" && board[index] != "x" && board[index] != "o"){
            console.log(lastValue);
            board.splice(index,1 , value);
            roundCount += 1;
            console.log(roundCount)
        }
        else if(value == "o" && board[index] != "x" && board[index] != "o"){
            console.log(lastValue);
            board.splice(index,1 , value);
            roundCount += 1;
            console.log(roundCount)
            }

        console.log(board)
        this.score(board)
    },
    showBoard(){
        // console.log(board)
        // boardEle = document.getElementById("board");
        // return boardEle.innerHTML = board
    },
    score(array){
        if(array[0] == "x" && array[1] == "x" && array[2] == "x"
        || array[3] == "x" && array[4] == "x" && array[5] == "x"
        || array[6] == "x" && array[7] == "x" && array[8] == "x"  
        || array[0] == "x" && array[3] == "x" && array[6] == "x"  
        || array[1] == "x" && array[4] == "x" && array[7] == "x"  
        || array[2] == "x" && array[5] == "x" && array[8] == "x"  
        || array[0] == "x" && array[4] == "x" && array[8] == "x"  
        || array[2] == "x" && array[4] == "x" && array[6] == "x"     
        ){        
            modals.victory("x")
            return console.log("X Wins");
        }
        else if(array[0] == "o" && array[1] == "o" && array[2] == "o"
        || array[3] == "o" && array[4] == "o" && array[5] == "o"
        || array[6] == "o" && array[7] == "o" && array[8] == "o"  
        || array[0] == "o" && array[3] == "o" && array[6] == "o"  
        || array[1] == "o" && array[4] == "o" && array[7] == "o"  
        || array[2] == "o" && array[5] == "o" && array[8] == "o"  
        || array[0] == "o" && array[4] == "o" && array[8] == "o"  
        || array[2] == "o" && array[4] == "o" && array[6] == "o"   
        ){
            modals.victory("o");
            return console.log("O Wins");
        }
        else if(roundCount == 9){
                modals.victory("draw")
                return console.log("Draw");

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
                    console.log(boardArray[x].innerHTML);
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
            victory.innerHTML=""
            count = 0;
            roundCount = 0;
            board[x] = x
            
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

        selectP.addEventListener("click", () => {
            input.clearBoard();
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
    },

    victory(who){
        var victory = document.getElementById("victory")
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


modals.playerSelect()
y = input;
y.setPlayerMark()
y.boardInput()

//Test

// x.insert("x", 0)
// x.insert("o", 1)
// x.insert("x", 2)
// x.insert("o", 3)
// x.insert("x", 4)
// x.insert("o", 5)
// x.insert("x", 6)
// x.insert("o", 7)
// x.insert("x", 8)
// x.showBoard()
// x.score(board)