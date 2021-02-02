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
        productCard.classList.add("productCard")

        let nameElement = document.createElement("h3")
        nameElement.innerText = product.name

        let priceElement = document.createElement("h5")
        priceElement.innerText = product.price + " kr"

        let weightElement = document.createElement("p")
        weightElement.innerText = product.weight 

        let cartButton = document.createElement("button")
        cartButton.innerText = "Lägg i varukorgen"
        cartButton.data = product

        addToCart.bind(cartButton)
        cartButton.addEventListener("click", addToCart)

        productCard.append(nameElement, priceElement, weightElement, cartButton)
        mainElement.appendChild(productCard)
    });
}

function addToCart() {
    //console.log(this.data)
    let productToAdd = this.data
    let cart = JSON.parse(localStorage.getItem("cart"))

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