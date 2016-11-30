function Row(rowNumber) {
    PIXI.Container.call(this);

    this.needsHalfBricks = (rowNumber % 2) !== 0;
    this.width = DISPLAY_OBJECTS.STAGE.WIDTH;
    this.height = DISPLAY_OBJECTS.BRICK.HEIGHT;
    this.position.x = this.needsHalfBricks ? DISPLAY_OBJECTS.BRICK.WIDTH / -2 : 0;
    this.position.y = rowNumber * DISPLAY_OBJECTS.BRICK.HEIGHT;

    var numberOfBricks = this.needsHalfBricks ? BRICKS + 1 : BRICKS;
    for(var i=0; i < numberOfBricks; i++){
        this.addChild(new Brick(rowNumber, i));
    }
}

Row.prototype = Object.create(PIXI.Container.prototype);