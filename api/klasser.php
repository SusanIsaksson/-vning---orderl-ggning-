<?php
session_start();

//produktlista class
class Product {
    function __construct($inputId, $inputName, $inputPrice, $inputWeight) {
        $this->id = $inputId;
        $this->name = $inputName;
        $this->price = $inputPrice;
        $this->weight = $inputWeight;
    }
    
    //metod
    public $id;
    public $name;
    public $price;
    public $weight;
}

class Order {
    
    

    

   
    
}


?>



