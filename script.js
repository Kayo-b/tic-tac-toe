//tic-tac-toe

const board = [0,1,2,
               3,4,5,
               6,7,8]

const gameBoard = {
    lastValue: lastValue = null,
    insert(value, index){ 
        if(value == "x" && board[index] != "x" && board[index] != "o"){
    
            console.log(lastValue);
            board.splice(index,1 , value);
        }
        else if(value == "o" && board[index] != "x" && board[index] != "o"){
    
            console.log(lastValue);
            board.splice(index,1 , value);
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
            return console.log("O Wins");
        }
        else{
            return console.log("Draw");
        }
    }
}


const input = {
    mainPlayer: setMainPlayer = "",
    otherPLayer: setOtherPlayer = "",

    boardInput(){
        let count = 0;
        var boardArray = document.querySelectorAll(".sector");
        for(let x=0;x<boardArray.length;x++){
            boardArray[x].addEventListener("click", ()=>{
                if(count%2 == 0 && board[x] != "x" && board[x] != "o"){
                    count += 1;
                    console.log(boardArray[x].innerHTML);
                    gameBoard.insert(setMainPlayer,x);
                    boardArray[x].classList.add("sectorX")

                }
                else if(count%2 == 1 && board[x] != "x" && board[x] != "o"){
                    count += 1;
                    gameBoard.insert(setOtherPlayer,x)
                    boardArray[x].classList.add("sectorO")

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
            console.log(setMainPlayer);
            console.log(setOtherPlayer);
        
            
        })
        player2.addEventListener("click", ()=>{
            setMainPlayer = player2.innerHTML.toLowerCase()
            setOtherPlayer = player1.innerHTML.toLowerCase()
            console.log(setMainPlayer)
            console.log(setOtherPlayer)

            
        })

        
    },

    displayInput(){

        this.boardArray.innerHTML = "teste"
    }

    
}

const modals = {

    playerSelect(){
        var selectP = document.getElementById("selectP");
        var modalCo = document.getElementById("playerModal");
        var player1 = document.getElementById("player1");
        var player2 = document.getElementById("player2");

        selectP.addEventListener("click", () => {
            modalCo.classList.add("show")

            
        })
        player1.addEventListener("click", () => {
            modalCo.classList.remove("show")

            
        })
        player2.addEventListener("click", () => {
            modalCo.classList.remove("show")

            
        })
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