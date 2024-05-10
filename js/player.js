class Player {
    constructor(gameScreen, left, top, width, height, imgSrc) {
        this.gameScreen = gameScreen
        this.left = left
        this.top = top
        this.width = width
        this.height = height
        this.directionX = 0
        this.directionY = 0
        this.element = document.createElement("img");
        this.element.src = imgSrc
        this.element.style.position = 'absolute'
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;

        this.gameScreen.appendChild(this.element)
    }
}


// In this iteration, we will create the Player class, representing the player's car.

// Open the js/ folder and create a new file called player.js.

// In the index.html file, add a script tag to link the player.js file.

// Inside the player.js file that you just created, define a new class called Player.

// The Player class should have the following properties defined in the constructor:

// gameScreen - the game screen element passed as an argument to the constructor.

// left - the horizontal position of the car passed as an argument to the constructor.

// top - the vertical position of the car passed as an argument to the constructor.

// width - the width of the car element passed as an argument to the constructor.

// height - the height of the car element passed as an argument to the constructor.

// directionX - initially set to 0. It is used to specify the horizontal movement direction and can have the following values:

// 0: not moving horizontally
// 1: moving horizontally to the right
// -1: moving horizontally to the left
// directionY - initially set to 0. It is used to specify the vertical movement direction and can have the following values:

// 0: not moving vertically
// 1: moving vertically down
// -1: moving vertically up
// element - the image element representing the car. This image element should be created in the constructor using the provided image source (image url) passed as an argument to the constructor.