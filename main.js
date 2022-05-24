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


class Object {
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
}

let platform_1 = new Object(224, 1024, 576, 96);
let platform_2 = new Object(96, 992, 160, 128 );
let platform_3 = new Object(0, 960, 128, 192);
let platform_4 = new Object(128, 832, 672, 32);
let platform_5 = new Object(0, 704, 576, 32);
let platform_6 = new Object(0, 576, 160, 32);



let lord = new Crawler(596, 922, "red", 32, 32,);
let lordFart = new Crawler(300, 96, "blue", 32, 32);

function gameLoop() {
    ctx.clearRect(0, 0, map.width, map. height)
}

function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, map.width, map. height)
    lord.update();
    platform_1.draw();
    platform_2.draw();
    platform_3.draw();
    platform_4.draw();
    platform_5.draw();
    platform_6.draw();
    
    if (lord.y + lord.height <= platform_1.y && lord.y + lord.height + lord.velocity.y >= platform_1.y && lord.x + lord.width >= platform_1.x && lord.x <= platform_1.x + platform_1.width){
        lord.velocity.y = 0
    }
    if (lord.y + lord.height <= platform_2.y && lord.y + lord.height + lord.velocity.y >= platform_2.y && lord.x + lord.width >= platform_2.x && lord.x <= platform_2.x + platform_2.width){
        lord.velocity.y = 0
    }
    if (lord.y + lord.height <= platform_3.y && lord.y + lord.height + lord.velocity.y >= platform_3.y && lord.x + lord.width >= platform_3.x && lord.x <= platform_3.x + platform_3.width){
        lord.velocity.y = 0
    }
    if (lord.y + lord.height <= platform_4.y && lord.y + lord.height + lord.velocity.y >= platform_4.y && lord.x + lord.width >= platform_4.x && lord.x <= platform_4.x + platform_4.width){
        lord.velocity.y = 0
    }
    if (lord.y + lord.height <= platform_5.y && lord.y + lord.height + lord.velocity.y >= platform_5.y && lord.x + lord.width >= platform_5.x && lord.x <= platform_5.x + platform_5.width){
        lord.velocity.y = 0
    }
    if (lord.y + lord.height <= platform_6.y && lord.y + lord.height + lord.velocity.y >= platform_6.y && lord.x + lord.width >= platform_6.x && lord.x <= platform_6.x + platform_6.width){
        lord.velocity.y = 0
    }
   
}
animate();




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
    console.log(lord)

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

// class Platform {
//     constructor(x, y, width, height){
//         this.x = x;
//         this.y = y;
//         this.width = width;
//         this.height = height;

//     }
//     draw(){
//         ctx.fillStyle = "blue";
//         ctx.fillRect(this.x, this.y, this.width, this.height);
//     }
// }












document.addEventListener("keydown", movementHandler);
document.addEventListener("keyup", movementHandlerOff)

