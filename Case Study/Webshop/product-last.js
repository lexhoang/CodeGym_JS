let counter = 1;
setInterval(function() {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000)

// let btn = document.querySelectorAll(".add-last");
// console.log(btn)
// btn.forEach(function(button, index) {
//     // console.log(button, index);
//     button.addEventListener("click", function(event) {
//         {
//             let btnItem = event.target
//             let product = btnItem.parentElement
//             let productImg = 1
//             let productName = product.querySelector(".product_last-name").innerText
//             let productPrice = product.querySelector(".product_last-price").innerText
//             console.log(productImg, productName, productPrice)
//             addCart(productImg, productName, productPrice)
//         }
//     })
// })

// function addCart(productImg, productName, productPrice) {
//     let add = document.createElement("tr")
//     let content = "<table><tr><td style='display: flex;align-items: center;'><img style='width:70px' src='" + productImg + "' alt=''>" + productName + "</td><td><p><span>" + productPrice + "</span></p></td></tr></table>";
//     add.innerHTML = content
//     let cartTable = document.querySelector("#result")
//         // console.log(cartTable)
//     cartTable.append(add)
// }