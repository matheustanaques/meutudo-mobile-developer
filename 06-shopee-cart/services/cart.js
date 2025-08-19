async function addItem(userCart, item) {
    userCart.push(item)

}

async function deleteItem(userCart, index) {
    const deleteIndex = index - 1

    if (index >= 0 && userCart.length) {
        userCart.splice(deleteIndex, 1)
    }

}

async function removeItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name)

    if (index == -1) {
        console.log("Item não encontrado")
        return;
    }

    if (userCart[index].quantity > 1) {
        userCart[index].quantity -= 1
        return;
    }

    if (userCart[index].quantity == 1) {
        userCart.splice(index, 1)
    }

}

async function displayCart(cart) {
    console.log(`Shopee cart list:`)
    cart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`)

    });

}

async function calculateTotal(userCart) {
    console.log("\nShopee cart TOTAL IS:")
    const total = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(`\nTotal: ${total}`)

}

export {
    addItem,
    deleteItem,
    removeItem,
    displayCart,
    calculateTotal
}


