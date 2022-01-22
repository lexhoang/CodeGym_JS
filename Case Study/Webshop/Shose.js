let arrayProduct = []
arrayProduct.push(new Product("images/gcgCN.jpg", "ShoseProduct1.html", "  Cao Gót Chanel", "1.520.000đ"))
arrayProduct.push(new Product("images/bostthap.jpg", "ShoseProduct2.html", "Bost Cổ Thấp", "330.000đ"))
arrayProduct.push(new Product("images/gcgno1.jpg", "ShoseProduct3.html", " Cao Gót  Nơ", "290.000đ"))
arrayProduct.push(new Product("images/gcd1.jpg", "ShoseProduct4.html", " Cao Gót Cô Dâu", "2.500.000đ"))
arrayProduct.push(new Product("images/gcgGC.jpg", "ShoseProduct5.html", " Cao Gót GUCCI", "1.490.000đ"))
arrayProduct.push(new Product("images/xangdan.png", "ShoseProduct6.html", " XangDan 7-9 phân", "230.000đ"))
arrayProduct.push(new Product("images/giaycotday.png", "ShoseProduct7.html", " Giày Cột Dây", "130.000đ"))
arrayProduct.push(new Product("images/dep.png", "ShoseProduct5.html", " Dép Quai Ngang", "119.000đ"))
let value

function renderProduct() {
    let product = "<ul class='products'>"
    for (let i = 0; i < arrayProduct.length; i++) {
        product += "<li> "
        product += "<div class='product'>"
        product += "  <div class='product-image'>"
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