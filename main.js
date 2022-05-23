console.log("hello");

const map = document.querySelector('canvas');
const ctx = map.getContext("2d");
console.log(map)

map.setAttribute('width', '640');
map.setAttribute('height', '1120');

ctx.width = map.width;
ctx.height = map.height;

// const image = new Image()
// image.src = './shreks-castle.bmp'


// image.onload = () => {
//     ctx.drawImage(image,0,0)
// };

// window.addEventListener("DOMContentLoaded", function (){
   
    
   
// })

class Crawler {
    constructor(x, y, color, width, height){
        this.x = x;
        this.y = y;
        this.color = color;
        this.height = height;
        this.width = width; 
        this.alive = true;
        this.jumpHeight = 32;
        this.canJump = false;
        this.jusmpCounter = 0;
    }

    render() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}


let shrek = new Crawler(500, 64, "green", 64, 64);
let lord = new Crawler(596, 996, "red", 32, 32,);
lord.render(); 

shrek.render();


function movementHandler(e){
    console.log("the key that was pressed was: " + e.key);

    switch (e.key){
        case "w":
            //jump

        case "a":
            //left
        
        case "d": 
            //right
    }


}


document.addEventListener("keydown", movementHandler);

// function jump() {

// }