<?php


 
if($_SERVER["REQUEST_METHOD"]) {

    if($_SERVER["REQUEST_METHOD"] == "GET") {

    echo json_encode("GET");


    } else if ($_SERVER["REQUEST_METHOD"] == "POST") {

    echo json_encode("SAVE");
    
    }
}
    

?>