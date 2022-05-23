window.addEventListener("DOMContentLoaded", function (){
console.log("hello");

const map = document.querySelector('canvas');
const ctx = map.getContext("2d");
console.log(map)

map.setAttribute('width', '800');
map.setAttribute('height', '1120');

ctx.width = map.width;
ctx.height = map.height;

// const image = new Image()
// image.src = './shreks-castle.bmp'


// image.onload = () => {
//     ctx.drawImage(image,0,0)
// };

const gravity = 0.9;
   
    
   


class Crawler {
    constructor(x, y, color, width, height){
        this.x = x;
        this.y = y;
        this.color = color;
        this.height = height;
        this.width = width; 
        this.alive = true;
        this.jumping = false;
        this.velocity ={
            x: 0,
            y: 0,
        }
    }

    render() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
      
        
    }
    
    update() {
        this.render()
        this.y += this.velocity.y;
        if(this.y + this.height + this.velocity.y <= map.height)
        this.velocity.y += gravity;
        else this.velocity.y = 0
    }
}


let lord = new Crawler(596, 96, "red", 32, 32,);


function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, map.width, map. height)
    lord.update()
}
animate();

let shrek = new Crawler(650, 64, "green", 64, 64);




// const runGame = setInterval(gameLoop, 120);
 

function movementHandler(e){
    console.log("the key that was pressed was: " + e.key);

    switch (e.key){
        case "ArrowLeft":
            lord.x > 32 ? lord.x -= 32 : null;
            // 
            break
        case "ArrowRight":
            lord.x < (map.width - 62) ? lord.x += 32 : null;
            // lord.x 
            break  
        case "ArrowUp":
            lord.y -= 96 * gravity
            break
            


        
    }
    console.log(lord)

}




// function gameLoop(){
//     ctx.clearRect(0, 0, map.width, map. height)
//     lord.render();
// };








document.addEventListener("keydown", movementHandler);

});