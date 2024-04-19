
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
    $.get('setup.php?board-size=' + boardSize, function(response){
            Board.fromSetupResponse(boardSize, response.result);
        });
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




