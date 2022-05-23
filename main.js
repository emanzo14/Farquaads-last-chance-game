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


   
    
   


class Crawler {
    constructor(x, y, color, width, height){
        this.x = x;
        this.y = y;
        this.color = color;
        this.height = height;
        this.width = width; 
        this.alive = true;
        this.jumpHeight = 32;
        this.jumping = true;
        this.jumpCounter = 0;
    }

    render() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)

        
    }
}



let shrek = new Crawler(650, 64, "green", 64, 64);
let lord = new Crawler(596, 992, "red", 32, 32,);
// lord.render(); 

shrek.render();
const runGame = setInterval(gameLoop, 120);
 

function movementHandler(e){
    console.log("the key that was pressed was: " + e.key);

    switch (e.key){
        case "ArrowLeft":
            lord.x -= 20
            // lord.x > 0 ? lord.x -= 10 : null;
            break
        case "ArrowRight":
            lord.x += 20
            // lord.x < (game.width - lord.width) ? lord.x += 10 : null;
            break  
        case "ArrowUp":
            jump()
            break
            
            


        
    }
    console.log(lord)

}




function gameLoop(){
    ctx.clearRect(0, 0, map.width, map. height)
    lord.render();
};

let timesRun = 0;
function jump() {
    let timerUpId = setInterval( function (){
        timesRun += 1;
        if(timesRun === 16){
            clearInterval(timerUpId);
            let timerDownId = setInterval(function () {
                timesRun += 1;
            if(timesRun === 16){
                clearInterval(timerDownId)
            }
                lord.y += 6;
            }, 20)
        }
        lord.y -= 6;
    }, 20 )
    
    
}








document.addEventListener("keydown", movementHandler);

});