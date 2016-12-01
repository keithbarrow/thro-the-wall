var BRICKS = 16,
    COLORS = ['blue', 'red', 'magenta', 'green', 'yellow'],
    STANDARD_BLOCK = 8,

    DISPLAY_OBJECTS = {
        STAGE: {
            WIDTH: STANDARD_BLOCK * 32,
            HEIGHT: STANDARD_BLOCK * 24
        },
        BAT: {
            WIDTH: STANDARD_BLOCK * 3,
            HEIGHT: STANDARD_BLOCK,
            TEXTURE: PIXI.Texture.fromImage('images/bat.png')
        },
        BALL: {
            WIDTH: STANDARD_BLOCK,
            HEIGHT: STANDARD_BLOCK,
            TEXTURE: PIXI.Texture.fromImage('images/ball.png')
        },
        BRICK: {
            WIDTH: STANDARD_BLOCK * 2,
            HEIGHT: STANDARD_BLOCK,
            TEXTURES :{
                blue: PIXI.Texture.fromImage("images/brick_blue.png"),
                red: PIXI.Texture.fromImage("images/brick_red.png"),
                magenta: PIXI.Texture.fromImage("images/brick_magenta.png"),
                green: PIXI.Texture.fromImage("images/brick_green.png"),
                yellow: PIXI.Texture.fromImage("images/brick_yellow.png")
            }
        }
    };
