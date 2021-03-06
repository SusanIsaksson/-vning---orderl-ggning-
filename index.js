window.addEventListener("load", initSite)

async function initSite() {
    const products = await makeRequest("./api/productReceiver.php")
    renderProducts(products)
}

function renderProducts(productList) {
    let mainElement = document.getElementsByTagName("main") [0]

    productList.forEach((product) => {

        console.log(product)

        let productCard = document.createElement("div")
        //lägger till en klass () för styling
        //productCard.classList.add("productCard")

        let nameText = document.createElement("h3")
        nameText.innerText = product.name

        let priceText = document.createElement("h5")
        priceText.innerText = product.price + " kr"

        let weightText = document.createElement("p")
        weightText.innerText = product.weight 

        let cartButton = document.createElement("button")
        let buttonText = document.createElement("h5")
        buttonText.innerText = "Lägg i varukorgen"
        cartButton.data = product

        addToCart.bind(cartButton)
        cartButton.addEventListener("click", addToCart)

        productCard.append(nameText, priceText, weightText, cartButton)
        cartButton.appendChild(buttonText)

        mainElement.appendChild(productCard)
    });
}
//funktion för att lägga till i varukorgen
function addToCart() {
    //console.log(this.data)
    let productToAdd = this.data
    //console.log(productToAdd)
    let cart = localStorage.getItem("cart")

    //kollar om cart är tom

    if(!cart) {
        cart = []
    } else {
        cart = JSON.parse(cart)
    }

    let foundIndex = cart.findIndex((cartItem) => {
        return cartItem.product.id == productToAdd.id
    })

    //console.log(foundIndex)

    if(foundIndex != -1) {
        cart [foundIndex].quantity++
    } else {
        cart.push({
            product: productToAdd,
            quantity: 1
        })
    }

    localStorage.setItem("cart", JSON.stringify(cart))

}


async function makeRequest(path, requestMethod, body) {
    try {
        const response = await fetch(path, {
            method: requestMethod,
            body
        })

        return response.json()
    } catch(err) {
        console.error(err)
    }

}