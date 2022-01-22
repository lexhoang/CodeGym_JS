let arrayProduct = []
arrayProduct.push(new Product("images/aolen.jpg", "DressProduct1.html", "Áo Len", "230.000đ"))
arrayProduct.push(new Product("images/khoaclong.jpg", "DressProduct2.html", "Áo Khoác Lông", "690.000đ"))
arrayProduct.push(new Product("images/cadigan.jpg", "DressProduct3.html", "Áo Cadigan", "235.000đ"))
arrayProduct.push(new Product("images/longtho.jpg", "DressProduct4.html", "Lông Thỏ ", "450.000đ"))
arrayProduct.push(new Product("images/chanvayxuong.jpg", "DressProduct5.html", "Chân Váy Xuông", "250.000đ"))
arrayProduct.push(new Product("images/chanvayda.jpg", "DressProduct6.html", "Chân Váy Da", "229.000đ"))
arrayProduct.push(new Product("images/chanvayxoe.jpg", "DressProduct7.html", "Chân Váy Xòe", "220.000đ"))
arrayProduct.push(new Product("images/dalong.jpg", "DressProduct8.html", "Dạ Lông", "700.000đ"))

let value

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
    renderCart()
}
window.onload = renderProduct