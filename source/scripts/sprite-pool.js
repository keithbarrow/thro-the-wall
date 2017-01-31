function InitialiseSpritePool(spritesLoadedCallback) {
    var loader = PIXI.loader;
    function SpritePool(){
        pool = { };

        this.addObject = function (name){
            var object = PIXI.Sprite.fromFrame(name);
            if(!pool[name]){
                pool[name] = [];
            }
            this.returnObject(name, object);
        };

        this.borrowObject = function (name){
            if(!pool[name] || pool[name].length < 1){
                this.addObject(name);
            }
            return pool[name].pop();
        };

        this.returnObject = function (name, object){
            pool[name].push(object);
        };

        this.destroy = function (){
            pool = null;
        };
    }

    loader.add("sprites", "scripts/sprite-definitions.json");
    loader.once("complete", spriteSheetLoaded);
    loader.load();

    function spriteSheetLoaded() {
        window.spritePool = new SpritePool();
        spritesLoadedCallback();
    }
}
