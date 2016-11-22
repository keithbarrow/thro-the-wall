var STAGE_WIDTH = 512,
    STAGE_HEIGHT = 192,
    renderer = PIXI.autoDetectRenderer(STAGE_WIDTH, STAGE_HEIGHT, {
        antialising: true,
        transparent: false,
        resolution: window.devicePixelRatio,
        autoResize: true
    }),
    stage = new PIXI.Container();

document.body.appendChild(renderer.view);
renderer.render(stage);

function resizeStage(){
    var ratio = Math.min(window.innerHeight / STAGE_HEIGHT, window.innerWidth / STAGE_WIDTH);

    stage.scale.x = stage.scale.y = ratio;
    renderer.resize(Math.ceil(STAGE_WIDTH  * ratio), Math.ceil(STAGE_HEIGHT * ratio));
}

resizeStage();

