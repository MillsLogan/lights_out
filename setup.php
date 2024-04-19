<?php
header("Content-Type: application/json");

if (isset($_GET['board-size']) && is_numeric($_GET['board-size'])) {
    $board_size = $_GET['board-size'];
} else{
    echo json_encode(['Error' => 'Invalid board size'], true);
    exit();
}

$lights_on = [];

if($board_size * $board_size <= 10){
    for($i = 0; $i < $board_size; $i++){
        for($j = 0; $j < $board_size; $j++){
            $lights_on[] = [$i, $j];
        }
    }
}else{
    while(count($lights_on) < 10){
        $row = rand(0, $board_size - 1);
        $col = rand(0, $board_size - 1);
        if(!in_array([$row, $col], $lights_on)){
            $lights_on[] = [$row, $col];
        }
    }
}

echo json_encode(["result"=>$lights_on]);


