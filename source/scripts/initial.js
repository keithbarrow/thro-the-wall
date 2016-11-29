var STAGE_WIDTH = 256,
    STAGE_HEIGHT = 192,
    OBJECT_HEIGHT = 8,
    BAT_WIDTH = 24,
    BRICK_WIDTH = 16,
    BRICKS = 16,
    COLORS = ['blue', 'red', 'magenta', 'green', 'yellow'];

    renderer = PIXI.autoDetectRenderer(STAGE_WIDTH, STAGE_HEIGHT, {
        antialising: true,
        transparent: true,
        resolution: window.devicePixelRatio,
        autoResize: true
    }),
    stage = new PIXI.Container(),
    //TODO: containers

        textures = {
            bat: PIXI.Texture.fromImage("images/bat.png"),
            bricks: {
                blue: PIXI.Texture.fromImage("images/brick_blue.png"),
                red: PIXI.Texture.fromImage("images/brick_red.png"),
                magenta: PIXI.Texture.fromImage("images/brick_magenta.png"),
                green: PIXI.Texture.fromImage("images/brick_green.png"),
                yellow: PIXI.Texture.fromImage("images/brick_yellow.png")
            }
        }
    ;

function Brick (texture, position) {
    PIXI.Sprite.call(this, texture)
    //var sprite = new PIXI.Sprite(texture);
    SPEED = 0.2;
    this.height = OBJECT_HEIGHT;
    this.width = BRICK_WIDTH;
    this.position.x = position * BRICK_WIDTH;
    this.position.y = 4;
}

Brick.prototype = Object.create(PIXI.Sprite.prototype);

function Row(parent, rowNumber) {
    var container = new PIXI.Container,
        needsHalfBricks = !!(rowNumber % 2),
        brickTexture = textures.bricks[COLORS[rowNumber]],
        bricks = [];

    container.width = parent.width;
    container.height = OBJECT_HEIGHT;
    container.position.x = needsHalfBricks ? BRICK_WIDTH / -2 : 0;
    container.position.y = rowNumber * OBJECT_HEIGHT;
    parent.addChild(container);

    for(var i=0; i < BRICKS; i++){
        bricks.push(new Brick(brickTexture, i));
    }

    if(needsHalfBricks){
        bricks.push(new Brick(brickTexture, i));
    }

    bricks.forEach(function(brick){
      container.addChild(brick);
    })

    return {
        get needsHalfBricks (){
            return needsHalfBricks;
        },
        get bricks(){
            return bricks;
        }
    }
}

function Wall(parent) {
    var rows = [],
        container = new PIXI.Container;

    container.width = parent.width;
    container.height = OBJECT_HEIGHT * COLORS.length;
    container.position.x =0;
    container.position.y =OBJECT_HEIGHT * 3;

    parent.addChild(container);

    for(var i=0; i< COLORS.length; i++){
        rows.push(new Row(container, i));
    }

    return {
        get needsHalfBricks (){
            return needsHalfBricks;
        },
        get bricks(){
            return bricks;
        }
    }
}

function Bat(parent, texture){

    var SPEED = 1,
        sprite = new PIXI.Sprite(texture);

    sprite.height = OBJECT_HEIGHT;
    sprite.width = BAT_WIDTH;
    sprite.position.x = 0;
    sprite.position.y = STAGE_HEIGHT - sprite.height;

    parent.addChild(sprite);

    return {
        moveLeft: function() {
            sprite.position.x -= SPEED;
            if(sprite.position.x <= 0){
                movementFunction = bat.moveRight;
            }
        },

        moveRight: function() {
            sprite.position.x += SPEED;
            if(sprite.position.x + BAT_WIDTH >= STAGE_WIDTH){
                movementFunction = bat.moveLeft;
            }
        }
    }
}

function resizeStage(){
    //TODO: this isn't scaling properly
    var ratio = Math.min(window.innerHeight / STAGE_HEIGHT, window.innerWidth / STAGE_WIDTH);
    stage.scale.x = stage.scale.y = ratio;
    renderer.resize(Math.ceil(STAGE_WIDTH  * ratio), Math.ceil(STAGE_HEIGHT * ratio));
}

function update(){
    resizeStage();
    movementFunction();
    renderer.render(stage);
    requestAnimationFrame(update);
}

document.body.appendChild(renderer.view);

var bat = new Bat(stage, textures.bat),
    wall = new Wall(stage),
    movementFunction = bat.moveRight;
renderer.render(stage);
requestAnimationFrame(update);

//http://www.yeahbutisitflash.com/?p=5226