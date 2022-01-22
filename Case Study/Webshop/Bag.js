let arrayProduct = []
arrayProduct.push(new Product("images/tuiGC.jpg", "BagProduct1.html", "Túi GUCCI", "390.000đ"))
arrayProduct.push(new Product("images/tuiLV.jpg", "BagProduct2.html", "Túi Tròn LV", "120.000đ"))
arrayProduct.push(new Product("images/tuiHM.jpg", "BagProduct3.html", "Túi HERMES", "375.000đ"))
arrayProduct.push(new Product("images/tuiGC.png", "BagProduct4.html", "Túi GUCCI", "1.200.000đ"))
arrayProduct.push(new Product("images/tuiDior.jpg", "BagProduct5.html", "Túi DIOR", "190.000đ"))
arrayProduct.push(new Product("images/tuiYSL.jpg", "BagProduct6.html", "Túi YSL", "390.000đ"))
arrayProduct.push(new Product("images/tuiCNK.jpg", "BagProduct7.html", "Túi CNK", "230.000đ"))
arrayProduct.push(new Product("images/tuixam.jpg", "BagProduct3.html", "Túi CNK", "330.000đ"))

function renderProduct() {
    let product = "<ul class='products'>"
    for (let i = 0; i < arrayProduct.length; i++) {
        product += "<li> "
        product += "<div class='product'>"
        product += " <div class='product-image'>"
        product += " <img src='" + arrayProduct[i].image + "' alt='products'>"
            // product += arrayProduct[i].getElementImage()
        product += "<div class='overplay'>"
        product += " <a href='" + arrayProduct[i].link + "' class='xemthem'> Xem Thêm </a>"
        product += "<button class='add' onclick='addProduct(" + i + ")'>Thêm Vào Giỏ Đồ</button>"
        product += "   </div>"
        product += "</div>"
        product += " <div class='detail'>"
        product += "<div class='product-name'>" + arrayProduct[i].name + "</div>"
        product += " <div class='price'>" + arrayProduct[i].price + "</div>"
        product += " </div>"
        product += "</div>"
        product += "</li>"
    }
    product += "<ul>"
    document.getElementById("product-all").innerHTML = product
}

function addProduct(index) {
    let a = arrayProduct[index]
    cartProduct.push(a)
    localStorage.setItem("cart", cartProduct)
    renderCart()
}
window.onload = renderProduct