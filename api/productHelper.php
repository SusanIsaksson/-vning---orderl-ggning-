<?php
    require("./klasser.php");

    function getAllProducts() {
        return [
            new Product(1, "Produkt 1", 9000, "90g"),
            new Product(2, "Produkt 2", 19000, "900g"),
            new Product(3, "Produkt 3", 900, "150g"),
            new Product(4, "Produkt 4", 8500, "850g"),
            new Product(5, "Produkt 5", 25000, "190g"),

        ];
    }


?>