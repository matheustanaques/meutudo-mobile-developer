async function getFullName(codeId, productName) {
    doBreakLine()
    console.log("product: " + codeId + '--' + productName);
}

async function doBreakLine(params) {
    console.log("\n")
}

async function getProductLabel(productName) {
    doBreakLine()
    console.log("Product: " + productName)
}

module.exports = {
    getFullName,
    getProductLabel

}