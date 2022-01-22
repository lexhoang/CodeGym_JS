class Hero {
    image
    top
    left
    size
    width
    height
    constructor(image, top, left, size, width, height, speed) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }
    getElementImage() {
            return "<img src=" + this.image + " width=" + this.width + " height= " + this.height +
                " style=" + ' " ' + "position: absolute; top: " + this.top + "px; left: " + this.left + "px; " + ' " ' + ">"
        }
        /* /* // return '<img src=" ' + this.image + ' " ' +
        //     ' height=" ' + this.size + ' " ' +
        //     ' width=" ' + this.size + ' " ' +
        //     ' style="top: ' + this.top + 'px; left:' + this.left + ' px;position:relative;" />'; */

    moveRight() {
        this.left += this.speed;
    }
    moveDown() {
        this.top += this.speed
    }
    moveLeft() {
        this.left -= this.speed
    }
    moveTop() {
        this.top -= this.speed
    }
}

let hero = new Hero("pikachu.png", 0, 0, 80, 80, 80, 10);
// let speed
function play() {
    if (hero.left < 430 && hero.top == 0) {
        hero.moveRight();
    } else if (hero.top < 230 && hero.left == 430) {
        hero.moveDown();
    } else if (hero.left > 0) {
        hero.moveLeft();
    } else if (hero.top > 0) {
        hero.moveTop();
    }
    document.getElementById('game').innerHTML = hero.getElementImage();
}
play()

function upSpeed() {
    hero.speed += 10
}

function downSpeed() {
    hero.speed -= 10
}

let myInterval

function start() {
    myInterval = setInterval(play, 50)
}

function stop() {
    clearInterval(myInterval)
}