var SPEED = 1; //TODO: add getter

function Bat(){

    //PIXI.Sprite.fromFrame.apply(this, ['bat']);
    //PIXI.Sprite.fromFrame.call(this, 'bat');
    //this.fromFrame('bat');
    //this.fromFrame.bind(this);
    PIXI.Sprite.call(this, DISPLAY_OBJECTS.BAT.TEXTURE);

    this.height = DISPLAY_OBJECTS.BAT.HEIGHT;
    this.width = DISPLAY_OBJECTS.BAT.WIDTH;
    this.position.x =  (DISPLAY_OBJECTS.STAGE.WIDTH - this.width)/2;
    this.position.y = DISPLAY_OBJECTS.STAGE.HEIGHT - this.height;

    this.tempMovementFunction = this.moveRight;


    pressed = {};

    window.addEventListener('keydown', function(event){
       pressed[event.keyCode] = true;
    });

    window.addEventListener('keyup', function(event){
        delete pressed[event.keyCode];
    });


    isPressed = function(keyCode) {
        console.log(pressed);
        return !!pressed[keyCode];
    };
}

Bat.prototype = Object.create(PIXI.Sprite.prototype);

Bat.prototype.moveLeft = function(){
    var newPostion = this.position.x - SPEED;
    this.position.x = newPostion <= 0 ? 0 : newPostion;
};

Bat.prototype.moveRight = function(){
    var newPostion = this.position.x + SPEED,
        maxPostition = DISPLAY_OBJECTS.STAGE.WIDTH - this.width;
    this.position.x = newPostion  >= maxPostition ? maxPostition : newPostion;
};

Bat.prototype.update = function(){
    var LEFT =79,
        RIGHT = 80;

    if(isPressed(LEFT)){
        this.moveLeft();
    }
    if(isPressed(RIGHT)){
        this.moveRight();
    }
};

