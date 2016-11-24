var STAGE_WIDTH = 256,
    STAGE_HEIGHT = 192,
    renderer = PIXI.autoDetectRenderer(STAGE_WIDTH, STAGE_HEIGHT, {
        antialising: true,
        transparent: true,
        resolution: window.devicePixelRatio,
        autoResize: true
    }),
    stage = new PIXI.Container(),
    //TODO: containers
    batTexture = PIXI.Texture.fromImage("images/bat.png"),
    bat = new PIXI.Sprite(batTexture);

function resizeStage(){
    var ratio = Math.min(window.innerHeight / STAGE_HEIGHT, window.innerWidth / STAGE_WIDTH);
    stage.scale.x = stage.scale.y = ratio;
    renderer.resize(Math.ceil(STAGE_WIDTH  * ratio), Math.ceil(STAGE_HEIGHT * ratio));
}

function update(){
    resizeStage();
    console.log('sssss');
    bat.position.x +=0.2;
    renderer.render(stage);
    requestAnimationFrame(update);
}



console.log(stage.height);

bat.height = 8;
bat.width = 24;
bat.position.x = 0;
bat.position.y = STAGE_HEIGHT - bat.height;
document.body.appendChild(renderer.view);
stage.addChild(bat);
renderer.render(stage);
requestAnimationFrame(update);

//http://www.yeahbutisitflash.com/?p=5226




