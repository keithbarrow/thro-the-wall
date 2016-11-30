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
    arena.bat.tempMovementFunction();
    renderer.render(arena);
    requestAnimationFrame(update);
}

document.body.appendChild(renderer.view);
requestAnimationFrame(update);

//http://www.yeahbutisitflash.com/?p=5226