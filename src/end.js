export const end = {
    "y": 350,
    "x": 750,
    "height": 10,
    "width": 10,
    "game": null,
    init(game){
        this.game = game;
    },
    update(){
        this.render();
    },
    render(){
        this.game.c.fillStyle = "yellow";
        this.game.c.fillRect(this.x,this.y,this.width,this.height);
    }
};