function Arena () {
    PIXI.Container.call(this);

    this.height = DISPLAY_OBJECTS.STAGE.HEIGHT;
    this.width = DISPLAY_OBJECTS.STAGE.WIDTH;
    this.position.x = 0;
    this.position.y = 0;

    this.bat = new Bat();
    this.wall= new Wall();

    this.addChild(this.wall);
    this.addChild(this.bat);
}

Arena.prototype = Object.create(PIXI.Container.prototype);
