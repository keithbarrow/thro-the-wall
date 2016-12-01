function Ball(){
    PIXI.Sprite.call(this, DISPLAY_OBJECTS.BALL.TEXTURE);

    this.height = DISPLAY_OBJECTS.BALL.HEIGHT;
    this.width = DISPLAY_OBJECTS.BALL.WIDTH;
    this.position.x = DISPLAY_OBJECTS.STAGE.WIDTH / 2;
    this.position.y = DISPLAY_OBJECTS.STAGE.HEIGHT / 2;

    this.speed = {
        x:1,
        y:1
    };
}

Ball.prototype = Object.create(PIXI.Sprite.prototype);

Ball.prototype.update = function(){
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    if(this.position.y + this.height >= DISPLAY_OBJECTS.STAGE.HEIGHT || this.position.y <= 0){
        this.speed.y = -this.speed.y;
    }

    if(this.position.x + this.width >= DISPLAY_OBJECTS.STAGE.WIDTH || this.position.x <= 0){
        this.speed.x = -this.speed.x;
    }

};