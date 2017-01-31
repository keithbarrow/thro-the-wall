 var renderer = PIXI.autoDetectRenderer(DISPLAY_OBJECTS.STAGE.WIDTH, DISPLAY_OBJECTS.STAGE.HEIGHT, {
        antialising: false,
        transparent: true,
        resolution: window.devicePixelRatio,
        autoResize: true
    });

document.body.appendChild(renderer.view);
 var main = new Main(renderer);

//http://www.yeahbutisitflash.com/?p=5226
//http://www.yeahbutisitflash.com/?p=5666
//http://www.yeahbutisitflash.com/?p=6496 //TODO: Make Bricks into a sprite sheet, object pooling
//http://www.yeahbutisitflash.com/?p=7046