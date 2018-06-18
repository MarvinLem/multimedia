import {player} from './player.js';
import {platform} from './platform.js';
import {spike} from './spike.js';
import {end} from './end.js';
import {gameController} from './gameController';

const game = {
    "canvas": document.querySelector("canvas"),
    "c": null,
    "player": player,
    "platform": platform,
    "spike": spike,
    "end": end,
    "gameController": gameController,
    "hasStarted": false,
    init(){
        this.c = this.canvas.getContext("2d");
        this.player.init(this);
        this.platform.init(this);
        this.spike.init(this);
        this.end.init(this);
        this.gameController.init(this);
        this.animate();
    },
    animate(){
        this.c.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.player.update();
        this.platform.update();
        this.spike.update();
        this.end.update();
        window.requestAnimationFrame((e)=>{
            this.animate()
        });
    }
};

game.init();