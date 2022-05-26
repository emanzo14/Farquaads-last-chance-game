
const map = document.querySelector('canvas');
const ctx = map.getContext("2d");
console.log(map)

map.setAttribute('width', '800');
map.setAttribute('height', '1120');

ctx.width = map.width;
ctx.height = map.height;

const playerLeft = new Image();
playerLeft.src ="player_farquaad_left.png";
playerLeft.onload = loadImages;

const barrelPic = new Image(); 
barrelPic.src = "barrel_pic.png";
barrelPic.onload = loadImages;

const shrekAnimate = new Image();
shrekAnimate.src = "new-shrek-sprite.png";
shrekAnimate.onload = loadImages;

const fionaAnimate = new Image();
fionaAnimate.src = "Princess-Fiona-sprite.png";
fionaAnimate.onload = loadImages;

const playerAnimate = new Image();
playerAnimate.src = "player_farquaad2.png";
playerAnimate.onload = loadImages;




let numOfImages = 5

function loadImages() {
    if(--numOfImages > 0)
    return;
};

const gravity = 0.9;

   
class Crawler {
    constructor(x, y){
        this.x = x;
        this.y = y;
       
        this.height = 72;
        this.width = 46; 
        this.alive = true;
        this.jumping = false;
        this.velocity = {
            x: 0,
            y: 0,
        }
        this.image = playerLeft
        this.frames = 0
    }

    render() {
        ctx.drawImage(
            this.image,
            28 + this.frames,
            0,
            28,
            45,
            this.x, 
            this.y,
            this.width,
            this.height)
            
           
    }
    
    update() {
        this.frames
        if (this.frames > 4) this.frames = 0;
        this.render();
        this.y += this.velocity.y;
        this.x += this.velocity.x;
        if(this.y + this.height + this.velocity.y <= map.height)
        this.velocity.y += gravity;
        else this.velocity.y = 0;

        
    }
}

class Barrel {
        constructor(x, y,){
            this.x = x;
            this.y = y;
            this.color = "blue";
            this.height = 32;
            this.width = 32; 
            this.alive = true;
            this.velocity = {
                x: 0,
                y: 0,
            }
            this.image = barrelPic;
        }
    
        render() {
            ctx.drawImage(
                this.image,
                770,
                0,
                505,
                535,
                this.x,
                this.y,
                38,
                38 

                )
          
            
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
        this.color = "rgba(0, 0, 255, 0.0)" ;
        this.width = width;
        this.height = height;
        
    }
    draw() {
    
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height,);
     
    }
    updatePlatformForPlayer(){
        if (player.y + player.height <= this.y && player.y + player.height + player.velocity.y >= this.y && player.x + player.width >= this.x && player.x <= this.x + this.width){
            player.velocity.y = 0
        }
    }
    updatePlatformForBarrel(){
        if (barrel.y + barrel.height <= this.y && barrel.y + barrel.height + barrel.velocity.y >= this.y && barrel.x + barrel.width >= this.x && barrel.x <= this.x + this.width){
            barrel.velocity.y = 0
        }
    }
    updatePlatformForBarrel2(){
        if (barrel2.y + barrel2.height <= this.y && barrel2.y + barrel2.height + barrel2.velocity.y >= this.y && barrel2.x + barrel2.width >= this.x && barrel2.x <= this.x + this.width){
            barrel2.velocity.y = 0
        }
    }
    updatePlatformForBarrel3(){
        if (barrel3.y + barrel3.height <= this.y && barrel3.y + barrel3.height + barrel3.velocity.y >= this.y && barrel3.x + barrel3.width >= this.x && barrel3.x <= this.x + this.width){
            barrel3.velocity.y = 0
        }
    }
    updatePlatformForBarrel4(){
        if (barrel4.y + barrel4.height <= this.y && barrel4.y + barrel4.height + barrel4.velocity.y >= this.y && barrel4.x + barrel4.width >= this.x && barrel4.x <= this.x + this.width){
            barrel4.velocity.y = 0
        }
    }
    updatePlatformForBarrel5(){
        if (barrel5.y + barrel5.height <= this.y && barrel5.y + barrel5.height + barrel5.velocity.y >= this.y && barrel5.x + barrel5.width >= this.x && barrel5.x <= this.x + this.width){
            barrel5.velocity.y = 0
        }
    }
    updatePlatformForBarrel6(){
        if (barrel6.y + barrel6.height <= this.y && barrel6.y + barrel6.height + barrel6.velocity.y >= this.y && barrel6.x + barrel6.width >= this.x && barrel6.x <= this.x + this.width){
            barrel6.velocity.y = 0
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

let wallLeft = new Object(0, 0, "green", 20 ,1120)
let wallRight = new Object(798, 0, "green", 20, 960)
let shrek = new Object(660, 20, "Green", 64, 78) 



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


//Create my players and barrels

let player = new Crawler(596, 922);
let barrel = new Barrel(764, 64);
let barrel2 = new Barrel(732, 512);
let barrel3 = new Barrel(764, 64);
let barrel4 = new Barrel(764, 64);
let barrel5 = new Barrel(764, 64);
let barrel6 = new Barrel(764, 64);




let fionaCols = 11;
let fionaRows = 1;

let fionaAnimateWidth = fionaAnimate.width / fionaCols;
let fionaAnimateHeight = fionaAnimate.height / fionaRows;

let fionaTotalFrames = 11;
let fionaCurrentFrame = 0;
let fionaFramesDrawn = 0;
let srcXFiona = 0;
let srcYFiona = 0;

let columns = 5;
let rows = 1;

let shrekAnimateWidth = shrekAnimate.width / columns;
let shrekAnimateHeight = shrekAnimate.height / rows;

let totalFrames = 5;
let currentFrame = 0;

let srcX = 0;
let srcY = 0;

let framesDrawn = 0


function mainLoop() {
    requestAnimationFrame(mainLoop)
    ctx.clearRect(0, 0, map.width, map. height)

      

    currentFrame = currentFrame % totalFrames;
    srcX = currentFrame * shrekAnimateWidth;


    ctx.drawImage(shrekAnimate, srcX, srcY, shrekAnimateWidth, shrekAnimateHeight, 660, -20, 100, 150);

    framesDrawn++;
    if(framesDrawn >= 10){
        currentFrame++;
        framesDrawn = 0;
    }


    ctx.drawImage(fionaAnimate, srcXFiona, srcYFiona, fionaAnimateWidth, fionaAnimateHeight, 600, 40, 38, 64);

    fionaCurrentFrame = fionaCurrentFrame % fionaTotalFrames;
    srcXFiona = fionaCurrentFrame * fionaAnimateWidth;

    fionaFramesDrawn++;
    if(fionaFramesDrawn >= 10){
        fionaCurrentFrame++;
        fionaFramesDrawn = 0;
    }


    player.update();
    // shrek.render(); 
    barrel.update();
    barrel2.update();
    barrel3.update();
    barrel4.update();
    barrel5.update();
    barrel6.update();
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
    //barrel 1 platform hit detection
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
    ////barrel 2 platform hit detection
    platform_1.updatePlatformForBarrel2();
    platform_2.updatePlatformForBarrel2();
    platform_3.updatePlatformForBarrel2();
    platform_4.updatePlatformForBarrel2();
    platform_5.updatePlatformForBarrel2();
    platform_6.updatePlatformForBarrel2();
    platform_7.updatePlatformForBarrel2();
    platform_8.updatePlatformForBarrel2();
    platform_9.updatePlatformForBarrel2();
    platform_10.updatePlatformForBarrel2();
    platform_11.updatePlatformForBarrel2();
    platform_12.updatePlatformForBarrel2();
    platform_13.updatePlatformForBarrel2();
    platform_14.updatePlatformForBarrel2();
    ////barrel 3 platform hit detection
    platform_1.updatePlatformForBarrel3();
    platform_2.updatePlatformForBarrel3();
    platform_3.updatePlatformForBarrel3();
    platform_4.updatePlatformForBarrel3()
    platform_5.updatePlatformForBarrel3();
    platform_6.updatePlatformForBarrel3();
    platform_7.updatePlatformForBarrel3();
    platform_8.updatePlatformForBarrel3();
    platform_9.updatePlatformForBarrel3();
    platform_10.updatePlatformForBarrel3();
    platform_11.updatePlatformForBarrel3();
    platform_12.updatePlatformForBarrel3();
    platform_13.updatePlatformForBarrel3();
    platform_14.updatePlatformForBarrel3();
    ////barrel 4 platform hit detection
    platform_1.updatePlatformForBarrel4();
    platform_2.updatePlatformForBarrel4();
    platform_3.updatePlatformForBarrel4();
    platform_4.updatePlatformForBarrel4()
    platform_5.updatePlatformForBarrel4();
    platform_6.updatePlatformForBarrel4();
    platform_7.updatePlatformForBarrel4();
    platform_8.updatePlatformForBarrel4();
    platform_9.updatePlatformForBarrel4();
    platform_10.updatePlatformForBarrel4();
    platform_11.updatePlatformForBarrel4();
    platform_12.updatePlatformForBarrel4();
    platform_13.updatePlatformForBarrel4();
    platform_14.updatePlatformForBarrel4();
    ////barrel 5 platform hit detection
    platform_1.updatePlatformForBarrel5();
    platform_2.updatePlatformForBarrel5();
    platform_3.updatePlatformForBarrel5();
    platform_4.updatePlatformForBarrel5()
    platform_5.updatePlatformForBarrel5();
    platform_6.updatePlatformForBarrel5();
    platform_7.updatePlatformForBarrel5();
    platform_8.updatePlatformForBarrel5();
    platform_9.updatePlatformForBarrel5();
    platform_10.updatePlatformForBarrel5();
    platform_11.updatePlatformForBarrel5();
    platform_12.updatePlatformForBarrel5();
    platform_13.updatePlatformForBarrel5();
    platform_14.updatePlatformForBarrel5();
    ////barrel 6 platform hit detection
    platform_1.updatePlatformForBarrel6();
    platform_2.updatePlatformForBarrel6();
    platform_3.updatePlatformForBarrel6();
    platform_4.updatePlatformForBarrel6()
    platform_5.updatePlatformForBarrel6();
    platform_6.updatePlatformForBarrel6();
    platform_7.updatePlatformForBarrel6();
    platform_8.updatePlatformForBarrel6();
    platform_9.updatePlatformForBarrel6();
    platform_10.updatePlatformForBarrel6();
    platform_11.updatePlatformForBarrel6();
    platform_12.updatePlatformForBarrel6();
    platform_13.updatePlatformForBarrel6();
    platform_14.updatePlatformForBarrel6();


    

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
    
    barrelLoop();
    barrelLoop_2();
    barrelLoop_3();
    barrelLoop_4();
    barrelLoop_5();
    barrelLoop_6();

//***** hit conditions for winning and losing *******    

    if(player.alive){
        let hit = hitPlayer(player, barrel);
    }
    if(player.alive){
        let hit = hitPlayer(player, barrel2);
    }
    if(player.alive){
        let hit = hitPlayer(player, barrel3);
    }
    if(player.alive){
        let hit = hitPlayer(player, barrel4);
    }
    if(player.alive){
        let hit = hitPlayer(player, barrel5);
    }
    if(player.alive){
        let hit = hitPlayer(player, barrel6);
    }

    if(shrek.alive){
        let hit = youWin(player, shrek);
    }

    
//***** hit conditions for barrels hitting walls *******

//barrel 1
    if(barrel.alive){
        let hit = hitWallLeft(barrel, wallLeft);

    };
    if(barrel.alive){
        let hit = hitWallRight(barrel, wallRight);

    };

//barrel 2
    if(barrel2.alive){
        let hit = hitWallLeft_2(barrel2, wallLeft);

    };

    if(barrel2.alive){
        let hit = hitWallRight_2(barrel2, wallRight);

    };

//barrel 3
    if(barrel3.alive){
        let hit = hitWallLeft_3(barrel3, wallLeft);

    };
    if(barrel3.alive){
        let hit = hitWallRight_3(barrel3, wallRight);

    };

//barrel 4
    if(barrel4.alive){
        let hit = hitWallLeft_4(barrel4, wallLeft);

    };
    if(barrel4.alive){
        let hit = hitWallRight_4(barrel4, wallRight);

    };

//barrel 5
    if(barrel5.alive){
        let hit = hitWallLeft_5(barrel5, wallLeft);

    };
    if(barrel5.alive){
        let hit = hitWallRight_5(barrel5, wallRight);

    };

//barrel 6
    if(barrel6.alive){
        let hit = hitWallLeft_6(barrel6, wallLeft);

    };

    if(barrel6.alive){
        let hit = hitWallRight_6(barrel6, wallRight);

    };
  
    
    

}
mainLoop();

// ********* functions to detect wall hit and to declare what is to happen


// Barrel 1 boolean detection 
function hitWallLeft(p1,p2){
    let hitWall =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (hitWall) {
        return rollingBarrelRight();
    
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
        return rollingBarrelLeft();
        
    } else {
        return false;
    }   
}
// Barrel 2 hit detection
function hitWallLeft_2(p1,p2){
    let hitWall =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (hitWall) {
        return rollingBarrelRight_2();
    
    } else {
        return false;
    }   
}
function hitWallRight_2(p1,p2){
    let hitWall =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (hitWall) {
        return rollingBarrelLeft_2();
        
    } else {
        return false;
    }   
}

// Barrel 3 hit detection
function hitWallLeft_3(p1,p2){
    let hitWall =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (hitWall) {
        return rollingBarrelRight_3();
        
    } else {
        return false;
    }   
}
function hitWallRight_3(p1,p2){
    let hitWall =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (hitWall) {
        return rollingBarrelLeft_3();
        
    } else {
        return false;
    }   
}

// Barrel 4 hit detection
function hitWallLeft_4(p1,p2){
    let hitWall =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (hitWall) {
        return rollingBarrelRight_4();
        
    } else {
        return false;
    }   
}
function hitWallRight_4(p1,p2){
    let hitWall =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (hitWall) {
        return rollingBarrelLeft_4();
        
    } else {
        return false;
    }   
}

// Barrel 5 hit detection
function hitWallLeft_5(p1,p2){
    let hitWall =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (hitWall) {
        return rollingBarrelRight_5();
        
    } else {
        return false;
    }   
}
function hitWallRight_5(p1,p2){
    let hitWall =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (hitWall) {
        return rollingBarrelLeft_5();
        
    } else {
        return false;
    }   
}

// Barrel 6 hit detection
function hitWallLeft_6(p1,p2){
    let hitWall =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (hitWall) {
        return rollingBarrelRight_6();
        
    } else {
        return false;
    }   
}

function hitWallRight_6(p1,p2){
    let hitWall =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (hitWall) {
        return rollingBarrelLeft_6();

    } else {
        return false;
    }   
}

//********** functions to determine lose conditions **********

function hitPlayer(p1, p2){
    let hitBarrel =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (hitBarrel) {

        player.alive = false;
        location.reload();
        console.log("you died", hitBarrel)

    } else {
        return true;
    }   
}

function youWin(p1, p2){
    let hitShrek =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (hitShrek) {

        shrek.alive = false;
        alert("You Win")
        
        location.reload();
    
    } else {
        return true;
    }   
}


function barrelLoop() {
    if (barrel.y > 1088){
        barrel.y = 64;
        barrel.x = 764;
    }
    
}
function barrelLoop_2(){
    if (barrel2.y > 1088){
        barrel2.y = 500;
        barrel2.x = 800;
    }
}
function barrelLoop_3(){
    if (barrel3.y > 1088){
        barrel3.y = 64;
        barrel3.x = 764;
    }
}
function barrelLoop_4(){
    if (barrel4.y > 1088){
        barrel4.y = 64;
        barrel4.x = 764;
    }
}
function barrelLoop_5(){
    if (barrel5.y > 1088){
        barrel5.y = 64;
        barrel5.x = 764;
    }
}
function barrelLoop_6(){
    if (barrel6.y > 1088){
        barrel6.y = 64;
        barrel6.x = 764;
    }
}



function rollingBarrelLeft(){
  
        
        // condition to move left
        if ((barrel.x + barrel.width ) > 0){
            barrel.velocity.x = - 5 
        }
   
}

function rollingBarrelRight() {
    
    // condition to move right
    if (barrel.x > 0){
        barrel.velocity.x = +5
    }
 
}
function rollingBarrelLeft_2(){
  
        
        // condition to move left
        if ((barrel2.x + barrel2.width ) > 0){
            barrel2.velocity.x = - 5 
        }
   
}

function rollingBarrelRight_2() {
    
    // condition to move right
    if (barrel2.x > 0){
        barrel2.velocity.x = +5
    }
 
}

function rollingBarrelLeft_3(){
  
        
        // condition to move left
        if ((barrel3.x + barrel3.width ) > 0){
            barrel3.velocity.x = - 5 
        }
   
}
function rollingBarrelRight_3() {
    
    // condition to move right
    if (barrel3.x > 0){
        barrel3.velocity.x = +5
    }
 
}4
function rollingBarrelLeft_4(){
  
        
        // condition to move left
    if ((barrel4.x + barrel4.width ) > 0){
            barrel4.velocity.x = - 5 
     }
   
}
function rollingBarrelRight_4() {
    
    // condition to right
    if (barrel4.x > 0){
        barrel4.velocity.x = +5
    }
 
}

function rollingBarrelLeft_5(){
  
        
        // condition to move left
        if ((barrel5.x + barrel4.width ) > 0){
            barrel5.velocity.x = - 5 
        }
   
}
function rollingBarrelRight_5() {
    
    // condition to move left to right
    if (barrel5.x > 0){
        barrel5.velocity.x = +5
    }
 
}

function rollingBarrelLeft_6(){
  
  // condition to move left
    if ((barrel6.x + barrel6.width ) > 0){
            barrel6.velocity.x = - 5 
        }
   
}
function rollingBarrelRight_6() {
    
    // condition to right
    if (barrel6.x > 0){
        barrel6.velocity.x = +5
    }
 
}



rollingBarrelLeft()
rollingBarrelLeft_2()

setTimeout(() => {
    rollingBarrelLeft_3(barrel3)
}, 2500);
setTimeout(() => {
    rollingBarrelLeft_4(barrel4)
}, 5000);
setTimeout(() => {
    rollingBarrelLeft_5(barrel5)
}, 7500);
setTimeout(() => {
    rollingBarrelLeft_6(barrel6)
}, 10000);


function movementHandler(e){
    console.log("the key that was pressed was: " + e.key);

    switch (e.key){
        case "a":
            player.x > 32 ? player.velocity.x =- 5 : null;
            // srcY = 1 * player_SpriteHeight;
            
           
            break
        case "d":
            player.x < (map.width - 62) ? player.velocity.x = 5 : null;
            // srcY = 0 * player_SpriteHeight;
            break  
        case "w":
            player.velocity.y =- 15
            
            break
            
    }
   
}

function movementHandlerOff(e){
    console.log("the key that was pressed was: " + e.key);

    switch (e.key){
        case "d":
            player.velocity.x = 0
         
            break
        case "a":
            player.velocity.x = 0
          
            break  
        case "w":
            player.velocity.y = 0
            
     

        
    }
    console.log(player)

}


document.addEventListener("keydown", movementHandler);
document.addEventListener("keyup", movementHandlerOff)



