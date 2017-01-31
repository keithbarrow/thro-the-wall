function Main (renderer){
    this.renderer = renderer;
    InitialiseSpritePool(this.spriteSheetLoaded.bind(this));
}

Main.prototype.render = function(){
    this.resizeStage();
    this.arena.update();
    this.renderer.render(this.arena);
};

Main.prototype.resizeStage = function (){
    var ratio = Math.min(window.innerHeight / DISPLAY_OBJECTS.STAGE.HEIGHT, window.innerWidth / DISPLAY_OBJECTS.STAGE.WIDTH);
    this.arena.scale.x = this.arena.scale.y = ratio;
    this.renderer.resize(Math.ceil(DISPLAY_OBJECTS.STAGE.WIDTH  * ratio), Math.ceil(DISPLAY_OBJECTS.STAGE.HEIGHT * ratio));
};

Main.prototype.update = function(){
    this.render();
    requestAnimationFrame(this.update.bind(this));
};

Main.prototype.spriteSheetLoaded = function() {
    this.arena = new Arena();

    var foo = spritePool.borrowObject('brick-yellow');
    foo.position.x = 10;
    foo.position.y = 10;
    this.arena.addChild(foo);

    requestAnimationFrame(this.update.bind(this));
};
