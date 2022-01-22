class Product {
    image
    name
    price
    constructor(image, link, name, price) {
        this.image = image;
        this.link = link;
        this.name = name;
        this.price = price;
    }
    getElementImage() {
        return "<img class='product-image' src=" + this.image + ">"
    }
}

// let product = new Product("mp1.jpg", "Phấn GUCCI", "550.000đ")
// document.querySelector(".product-image").innerHTML = product.getElementImage()