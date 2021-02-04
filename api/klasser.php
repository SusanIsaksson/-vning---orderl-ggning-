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

class OrderItem {
    function __construct($inputProduct, $inputQuantity) {
        $this->product = $inputProduct;
        $this->quantity = $inputQuantity;
    }
    
    public $product;
    public $quantity;
}

class Order {
    function __construct($inputOrderItems) {       // ($product)
        $this->orderItems = $inputOrderItems;    // ->product = $product;
    }
    
    public $orderItems;

    function calculatePrice() {
        //måste ändras i och med att vi skapade OrderItem
        /* $totalPrice = [];
        foreach($this->products as $product) {
            array_push($totalPrice, $product->price);
        }
        return array_sum($totalPrice) . " kr"; */
    }

    function calculateAmount() {

    }

}


?>



