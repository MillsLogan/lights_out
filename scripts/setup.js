
function startGame(){
    $('#error-message').hide();
    $('#win-message').hide();

    let boardSize = $('#board-size-input').val();
    if(boardSize < 1 || boardSize > 10) {
        $('#error-message').show();
        return;   
    }

    createBoard(boardSize);
}

function createBoard(boardSize){
    Board.fromSetupResponse(boardSize, getRandomCells(boardSize));
}

function getRandomCells(boardSize){
    let randomCells = [];
    if(boardSize < 4){
        var max = boardSize * boardSize;
    }else{
        var max = 10;
    }

    for(let i = 0; i < max; i++){
        let randomCell = [
            Math.floor(Math.random() * boardSize),
            Math.floor(Math.random() * boardSize)
        ];

        for(let j = 0; j < randomCells.length; j++){
            if(randomCell[0] == randomCells[j][0] && randomCell[1] == randomCells[j][1]){
                i--;
                var breakFlag = true;
                break;
            }
        }
        if(breakFlag){
            breakFlag = false;
            continue;
        }

        randomCells.push(randomCell);
    }
    console.log(randomCells);
    return randomCells;
}

$('#board-size-input').on('input', function(){
    $('#error-message').hide();
});

$('#win-message').hide();
$('#error-message').hide();

$('form').submit(function(event) {
    event.preventDefault();
    startGame();
});

$('#start-game-button').click(function() {
    startGame();
});




