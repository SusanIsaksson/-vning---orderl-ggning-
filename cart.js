window.addEventListener("load", initSite)

function initSite() {
    //koll att funktionen är ok, ser init i consollen
    //console.log("init")
    const cart = getCart()
    renderProducts(cart) 
}

function renderProducts(products) {
    let mainElement = document.getElementsByTagName("main") [0]

    if(!products) {
        let emptyCartElement = document.createElement("h3")
        emptyCartElement.innerText = "Din varukorg är tom..."
        mainElement.appendChild(emptyCartElement)
        return
    }

    let headers = Object.keys(products[0].product)

    let cartTable = document.createElement("table")

    let headerRow = document.createElement("tr")
    headers.forEach((header) => {
        let headerElement = document.createElement("th")
        headerElement.innerText = header
        headerRow.appendChild(headerElement)
    })

    let quantityHeaderElement = document.createElement("th")
    quantityHeaderElement.innerText = "quantity"
    headerRow.appendChild(quantityHeaderElement)

    cartTable.appendChild(headerRow)
    
    products.forEach((cartItem) => {
        let productRow = document.createElement("tr")
        headers.forEach((header) => {
            let productDescription = document.createElement("td")
            productDescription.innerText = cartItem.product[header]
            if(header == "price") { productDescription.innerText += " kr"}
            productRow.appendChild(productDescription)
        })
        let quantityElement = document.createElement("td")
        quantityElement.innerText = cartItem.quantity
        productRow.appendChild(quantityElement)

        cartTable.appendChild(productRow)
    })

    const orderButton = document.createElement("button")
    orderButton.addEventListener("click", placeOrder)
    orderButton.innerText = "Bekräfta order"

    mainElement.append(cartTable, orderButton)
}


function getCart() {
    let cart = localStorage.getItem("cart")

    if(!cart) {
        return false
    }

    return JSON.parse(cart)
}

async function placeOrder() {
    //console.log ("BEKRÄFTA ORDER")

    const cart = JSON.parse(localStorage.getItem("cart"))
    let formattedCart = cart.map((cartItem) => {
        return {
            productId: cartItem.product.id,
            quantity: cartItem.quantity
        }
    }) 
    //console.log(formattedCart)

   const body = new FormData()
    body.append("")

    const successStatus = await makeRequest("./api/orderReceiver.php", "POST", body)
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

