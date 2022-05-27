//tic-tac-toe

const board = [0,1,2,
               3,4,5,
               6,7,8]

const gameBoard = {
    lastValue: lastValue = null,
    insert(value, index){ 
        if(value == "x" && board[index] != "x" && board[index] != "o"){
            if(lastValue == null || lastValue == "o"){
                lastValue = value;
                console.log(lastValue)
                board.splice(index,1 , value)
            }
            else{
                return console.log("break")
            } 
        }
        else if(value == "o" && board[index] != "x" && board[index] != "o"){
            if(lastValue == null || lastValue == "x"){
                lastValue = value;
                console.log(lastValue)
                board.splice(index,1 , value)
            }
            else{
                return console.log("break")
            }
        }        
    },
    showBoard(){
        console.log(board)
        boardEle = document.getElementById("board");
        return boardEle.innerHTML = board
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
            return console.log("X Wins")
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
            return console.log("O Wins")
        }
        else{
            return console.log("Draw")
        }
    }
}


const input = {
    setPlayerMark(){
        var setPlayer = ""
        var player1 = document.getElementById("player1")
        var player2 = document.getElementById("player2")
        player1.addEventListener("click", ()=>{
            setPlayer = player1.innerHTML
            console.log(setPlayer)
            
        })
        player2.addEventListener("click", ()=>{
            setPlayer = player2.innerHTML
            console.log(setPlayer)
            
        })
        
    }


    
}
y = input;
y.setPlayerMark()

//Test
var x = gameBoard;

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