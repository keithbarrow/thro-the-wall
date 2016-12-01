function Arena () {
    PIXI.Container.call(this);

    this.height = DISPLAY_OBJECTS.STAGE.HEIGHT;
    this.width = DISPLAY_OBJECTS.STAGE.WIDTH;
    this.position.x = 0;
    this.position.y = 0;

    this.bat = new Bat();
    this.ball = new Ball();
    this.wall= new Wall();

    this.addChild(this.wall);
    this.addChild(this.bat);
    this.addChild(this.ball);
}

Arena.prototype = Object.create(PIXI.Container.prototype);

Arena.prototype.update = function(){
    this.bat.update();
    this.ball.update();
    this.wall.update();
};
