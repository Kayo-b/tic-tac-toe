//Gameboard module
var board = [0,1,2,3,4,5,6,7,8]
const gameBoard = {
    addToBoard(values, index){
        board.splice(index, 1, values)
    },

    getBoard(){
        return console.log(board)
    }
}
var test = gameBoard
test.addToBoard("x",6)
test.getBoard()