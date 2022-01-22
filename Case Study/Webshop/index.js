function search() {
    let searchs = document.querySelector(".search").value;
    let arr1 = ["váy", "áo", "Váy", "Áo", "đầm", "Đầm"]
    let arr2 = ["giày", "giày cao gót", "Giày", "Giày cao gót", "guốc", "Guốc"]
    let arr3 = ["Túi sách", "túi sách", "túi", "Túi"]
    for (let i in arr1) {
        if (searchs == arr1[i]) {
            location.href = "Dress.html"
        } else if (searchs == arr2[i]) {
            location.href = "Shose.html"
        } else if (searchs == arr3[i]) {
            location.href = "Bag.html"
        }
    }
}

function openDescription() {
    document.querySelector(".siderbar2").classList.add("open");
}

function closeDescription() {
    document.querySelector(".siderbar2").classList.remove("open");
}

function openCart() {
    document.querySelector(".siderbar").classList.add("open");
}

function closeCart() {
    document.querySelector(".siderbar").classList.remove("open")
}