function Wall() {
    PIXI.Container.call(this);

    this.width = DISPLAY_OBJECTS.STAGE.WIDTH;
    this.height = DISPLAY_OBJECTS.BRICK.HEIGHT * COLORS.length;
    this.position.x = 0;
    this.position.y = STANDARD_BLOCK * 4;

    for(var i=0; i< COLORS.length; i++){
        this.addChild(new Row(i));
    }
}

Wall.prototype = Object.create(PIXI.Container.prototype);

Wall.prototype.update = function(){
  //TODO
};