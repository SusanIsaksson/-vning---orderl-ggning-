<?php
/*kolla om echo skrivs i consol via js-kod GET
echo json_encode("Hello");*/

/*require ("./klasser.php");


//array med produkter 
/* $products = [
        new Product("one", 1100, "40g"),
        new Product("two", 20000, "100g"),
        new Product("three", 500, "200g")
]; 
*/

try {

    require("./productHelper.php");

    if($_SERVER["REQUEST_METHOD"]) {

        if($_SERVER["REQUEST_METHOD"] == "GET") {
            //produktlistan hämtas här:
            echo json_encode(getAllProducts());
        } else {
            echo json_encode("Session is not working...");
        }
    } else {
        echo json_encode("No requestmethod set...");
    }
   
} catch (Exception $error) {
    echo json_encode($error);
 
}


?>