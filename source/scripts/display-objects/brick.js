function Brick (rowNumber, position) {
    var texture  = DISPLAY_OBJECTS.BRICK.TEXTURES[COLORS[rowNumber]];
    PIXI.Sprite.call(this, texture);
    this.height = DISPLAY_OBJECTS.BRICK.HEIGHT;
    this.width = DISPLAY_OBJECTS.BRICK.WIDTH;
    this.position.x = position * this.width;
    this.position.y = 0;
}

Brick.prototype = Object.create(PIXI.Sprite.prototype);

