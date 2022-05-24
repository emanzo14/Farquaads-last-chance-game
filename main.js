window.addEventListener("DOMContentLoaded", function (e){
    const runGame = setInterval(gameLoop, 120)


});
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
        this.velocity = {
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
        this.x += this.velocity.x
        if(this.y + this.height + this.velocity.y <= map.height)
        this.velocity.y += gravity;
        else this.velocity.y = 0

        
    }
    

}
class Platform {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.color = "rgba(0, 0, 255, 0.5)" ;
        this.width = width;
        this.height = height;
        
    }
    draw() {
    
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height,);
     
    }
    updatePlatformForPlayer(){
        if (lord.y + lord.height <= this.y && lord.y + lord.height + lord.velocity.y >= this.y && lord.x + lord.width >= this.x && lord.x <= this.x + this.width){
            lord.velocity.y = 0
        }
    }
    updatePlatformForBarrel(){
        if (lordFart.y + lordFart.height <= this.y && lordFart.y + lordFart.height + lordFart.velocity.y >= this.y && lordFart.x + lordFart.width >= this.x && lordFart.x <= this.x + this.width){
            lordFart.velocity.y = 0
        }
    }

}

class Barrel {
    constructor(){
        this.x = 596;
        this.y = 64;
        this.width = 32;
        this.height = 32;
        this.velocity = {
            x: 4,
            y: 2,
        }
        this.cx = 1 * this.velocity.x;
        this.cy = 1 * this.velocity.y;
        this.alive = true;
        
    }
    render(){
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width, this.height,);
    }
   
    updateBarrel(){
        this.render()
        this.x -= this.velocity.x;
        // this.y += this.velocity.y;
        // condition to move left to right
        if ((this.x + this.width ) > ctx.width){
            this.velocity.x = -this.velocity.x
        }
        if (this.x < 0){
            this.velocity.x = -this.velocity.x
        }
       
        if(this.y + this.height <= platform_4.y && this.y + this.height + this.velocity.y >= platform_4.y && this.x + platform_4.width >= platform_4.x && this.x <= platform_4.x + platform_4.width){
            this.velocity.y = 0
        }

    }

}
class Object {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;
        this.alive = true;
    }
    render() {
       ctx.fillStyle = this.color;
       ctx.fillRect(this.x, this.y, this.width, this.height,)
    }
    
}

let wallLeft = new Object(0, 0, "green", 2 ,1120)
let wallRight = new Object(798, 0, "green", 2, 960)
console.log(wallLeft);
console.log(wallRight);



let platform_1 = new Platform(224, 1024, 576, 96);
let platform_2 = new Platform(96, 992, 160, 128 );
let platform_3 = new Platform(0, 960, 128, 192);
let platform_4 = new Platform(128, 832, 672, 32);
let platform_5 = new Platform(0, 704, 576, 32);
let platform_6 = new Platform(0, 576, 160, 32);
let platform_7 = new Platform(224, 448, 96, 32);
let platform_8 = new Platform(352, 416, 96, 32);
let platform_9 = new Platform(480, 384, 96, 32);
let platform_10 = new Platform(640, 352, 160, 32);
let platform_11 = new Platform(0, 256, 544, 32);
let platform_12 = new Platform(224, 128, 160, 32);
let platform_13 = new Platform(384, 96, 448, 32);
let platform_14 = new Platform(640, 544, 160, 32);




let lord = new Crawler(596, 922, "red", 32, 32,);
let lordFart = new Crawler(596, 64, "blue", 32, 32);
let lordFart2 = new Barrel();

function gameLoop() {
    ctx.clearRect(0, 0, map.width, map. height)
   
}

function mainLoop() {
    requestAnimationFrame(mainLoop)
    ctx.clearRect(0, 0, map.width, map. height)
    lord.update();
    lordFart.update()
    platform_1.updatePlatformForPlayer();
    platform_2.updatePlatformForPlayer();
    platform_3.updatePlatformForPlayer();
    platform_4.updatePlatformForPlayer();
    platform_5.updatePlatformForPlayer();
    platform_6.updatePlatformForPlayer();
    platform_7.updatePlatformForPlayer();
    platform_8.updatePlatformForPlayer();
    platform_9.updatePlatformForPlayer();
    platform_10.updatePlatformForPlayer();
    platform_11.updatePlatformForPlayer();
    platform_12.updatePlatformForPlayer();
    platform_13.updatePlatformForPlayer();
    platform_14.updatePlatformForPlayer();

    platform_1.updatePlatformForBarrel();
    platform_2.updatePlatformForBarrel();
    platform_3.updatePlatformForBarrel();
    platform_4.updatePlatformForBarrel();
    platform_5.updatePlatformForBarrel();
    platform_6.updatePlatformForBarrel();
    platform_7.updatePlatformForBarrel();
    platform_8.updatePlatformForBarrel();
    platform_9.updatePlatformForBarrel();
    platform_10.updatePlatformForBarrel();
    platform_11.updatePlatformForBarrel();
    platform_12.updatePlatformForBarrel();
    platform_13.updatePlatformForBarrel();
    platform_14.updatePlatformForBarrel();


    

    platform_1.draw();
    platform_2.draw();
    platform_3.draw();
    platform_4.draw();
    platform_5.draw();
    platform_6.draw();
    platform_7.draw();
    platform_8.draw();
    platform_9.draw();
    platform_10.draw();
    platform_11.draw();
    platform_12.draw();
    platform_13.draw();
    platform_14.draw();
    
    
    
    
    wallLeft.render();
    wallRight.render();
    
    if(lordFart.alive){
        let hit = hitWallLeft(lordFart, wallLeft);

    };

    if(lordFart.alive){
        let hit = hitWallRight(lordFart, wallRight);

    };
    
  

}
mainLoop();

function hitWallLeft(p1,p2){
    let hitWall =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (hitWall) {
        return rollingBarrelRight(lordFart);
        


    } else {
        return false;
    }   
}
function hitWallRight(p1,p2){
    let hitWall =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (hitWall) {
        return rollingBarrelLeft(lordFart);
        


    } else {
        return false;
    }   
}
// }
// lordFart2.alive = false;
// function lowerLevel(){
//     lordFart.y = 226;
//     lordFart2.alive = true;
//     }
// function spawnBarrel(){
//     rollingBarrel();
// }










function rollingBarrelLeft(e){
  
        
        // condition to move left to right
        if ((e.x + e.width ) > 0){
            e.velocity.x = - 5 
        }
   
}

function rollingBarrelRight(e) {

    if (e.x > 0){
        e.velocity.x = +5
    }
}



rollingBarrelLeft(lordFart)

















function movementHandler(e){
    console.log("the key that was pressed was: " + e.key);

    switch (e.key){
        case "a":
            lord.x > 32 ? lord.velocity.x =- 5 : null;
         
            break
        case "d":
            lord.x < (map.width - 62) ? lord.velocity.x = 5 : null;
          
            break  
        case "w":
            lord.velocity.y =- 15
            break
            
     

        
    }
    // console.log(lord)

}

function movementHandlerOff(e){
    console.log("the key that was pressed was: " + e.key);

    switch (e.key){
        case "d":
            lord.velocity.x = 0
         
            break
        case "a":
            lord.velocity.x = 0
          
            break  
        case "w":
            lord.velocity.y = 0
            
     

        
    }
    console.log(lord)

}













document.addEventListener("keydown", movementHandler);
document.addEventListener("keyup", movementHandlerOff)



