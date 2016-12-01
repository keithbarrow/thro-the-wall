 var renderer = PIXI.autoDetectRenderer(DISPLAY_OBJECTS.STAGE.WIDTH, DISPLAY_OBJECTS.STAGE.HEIGHT, {
        antialising: false,
        transparent: true,
        resolution: window.devicePixelRatio,
        autoResize: true
    }),
    arena = new Arena();

function resizeStage(){
    var ratio = Math.min(window.innerHeight / DISPLAY_OBJECTS.STAGE.HEIGHT, window.innerWidth / DISPLAY_OBJECTS.STAGE.WIDTH);
    arena.scale.x = arena.scale.y = ratio;
    renderer.resize(Math.ceil(DISPLAY_OBJECTS.STAGE.WIDTH  * ratio), Math.ceil(DISPLAY_OBJECTS.STAGE.HEIGHT * ratio));
}

function update(){
    resizeStage();
    arena.update();
    renderer.render(arena);
    requestAnimationFrame(update);
}

document.body.appendChild(renderer.view);
requestAnimationFrame(update);

//http://www.yeahbutisitflash.com/?p=5226
//http://www.yeahbutisitflash.com/?p=5666
//http://www.yeahbutisitflash.com/?p=6496 //TODO: Make Bricks into a sprite sheet, object pooling
//http://www.yeahbutisitflash.com/?p=7046