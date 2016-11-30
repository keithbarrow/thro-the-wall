function Bat(){
    var SPEED = 1;
    PIXI.Sprite.call(this, DISPLAY_OBJECTS.BAT.TEXTURE);

    this.height = DISPLAY_OBJECTS.BAT.HEIGHT;
    this.width = DISPLAY_OBJECTS.BAT.WIDTH;
    this.position.x = 0;
    this.position.y = DISPLAY_OBJECTS.STAGE.HEIGHT - this.height;

    this.moveLeft = function(){
        this.position.x -= SPEED;
        if(this.position.x <= 0){
            this.tempMovementFunction = this.moveRight;
        }
    };

    this.moveRight = function() {
        this.position.x += SPEED;
        if(this.position.x + this.width >= DISPLAY_OBJECTS.STAGE.WIDTH){
            this.tempMovementFunction = this.moveLeft;
        }
    };

    this.tempMovementFunction = this.moveRight;
}

Bat.prototype = Object.create(PIXI.Sprite.prototype);
