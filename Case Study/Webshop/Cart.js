let cartProduct = []

function renderCart() {
    let data = "<table><tr><th style='font-size:20px'>Sản Phẩm</th>" +
        "<th style='font-size:20px'>Giá</th>" +
        "&ensp; <td class='quantily' style='font-size:10px' >Số Lượng " + cartProduct.length + " </td></tr>"
    for (let i = 0; i < cartProduct.length; i++) {
        data += "<tr>"
        data += "<td><img style='width:60px' src='" + cartProduct[i].image + "'</td><br>" + cartProduct[i].name + "<br>"
            // data += "<td>" + arrayProduct[i].name + "</td>"
        data += "<td class='price-cart'>" + cartProduct[i].price + "</td>"
        data += "<td><button class='deleteProduct' onclick=' deleteProduct(" + i + ")''> Trả Hàng </button></td>"
        data += "</tr>"
    }
    data += "<table>"
    document.getElementById("cart").innerHTML = data
}

function deleteProduct(index) {
    if (confirm("Bạn muốn trả hàng: "))
        cartProduct.splice(index, 1)
    renderCart()
}
// function addiTion() {
//     let val = document.querySelector(".num").value;
//     val++
//     document.querySelector(".num").value = val
// }

// function subTransition() {
//     let val = document.querySelector(".num").value;
//     if (val >= 1) {
//         val--
//         document.querySelector(".num").value = val
//     }
// }