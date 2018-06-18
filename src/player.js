export const player = {
    "y": 350,
    "x": 50,
    "width": 10,
    "height": 10,
    "game":null,
    "ground": 390,
    "borderWest": 0,
    "borderEast": 790,
    "gravity": 3,
    "movespeed": 2,
    "friction": 0.9,
    "jumping": "false",
    "level": 1,
    "death": 0,
    init(game){
        this.game = game;
    },
    jump(){
        if(this.game.gameController.activeKeys.includes('ArrowUp') && this.jumping === "false"){
            this.gravity = -12;
            this.jumping = "true";
        }
        this.gravity += 0.5;
        this.y += this.gravity;
        this.gravity *= this.friction;
    },
    move(){
        if(this.game.gameController.activeKeys.includes('ArrowRight')){
            this.x += this.movespeed;
            this.movespeed += 0.5;
        }
        if(this.game.gameController.activeKeys.includes('ArrowLeft')){
            this.x += -this.movespeed;
            this.movespeed += 0.5;
        }
        this.movespeed *= this.friction;
    },
    collisionCoordinatesX() {
        if(this.x <= this.borderWest){
            this.x = this.borderWest;
        }
        if(this.x >= this.borderEast){
            this.x = this.borderEast;
        }
        if (this.game.player.level===1) {
            this.game.platform.platforms.level1.forEach(p => {
                if (this.x + this.width >= p.x && this.x <= p.x + p.width && this.y >= p.y && this.y <= p.y + p.height - this.height) {
                    if (this.x + this.width / 2 < p.x + p.width / 2) {
                        this.x = p.x - this.width - 0.1;
                    }
                    if (this.x + this.width / 2 > p.x + p.width / 2) {
                        this.x = p.x + p.width + 0.1;
                    }
                }
            });
        }
        if (this.game.player.level===2) {
            this.game.platform.platforms.level2.forEach(p => {
                if (this.x + this.width >= p.x && this.x <= p.x + p.width && this.y >= p.y && this.y <= p.y + p.height - this.height) {
                    if (this.x + this.width / 2 < p.x + p.width / 2) {
                        this.x = p.x - this.width - 0.1;
                    }
                    if (this.x + this.width / 2 > p.x + p.width / 2) {
                        this.x = p.x + p.width + 0.1;
                    }
                }
            });
        }
        if (this.game.player.level===3) {
            this.game.platform.platforms.level3.forEach(p => {
                if (this.x + this.width >= p.x && this.x <= p.x + p.width && this.y >= p.y && this.y <= p.y + p.height - this.height) {
                    if (this.x + this.width / 2 < p.x + p.width / 2) {
                        this.x = p.x - this.width - 0.1;
                    }
                    if (this.x + this.width / 2 > p.x + p.width / 2) {
                        this.x = p.x + p.width + 0.1;
                    }
                }
            });
        }
        if (this.game.player.level===4) {
            this.game.platform.platforms.level4.forEach(p => {
                if (this.x + this.width >= p.x && this.x <= p.x + p.width && this.y >= p.y && this.y <= p.y + p.height - this.height) {
                    if (this.x + this.width / 2 < p.x + p.width / 2) {
                        this.x = p.x - this.width - 0.1;
                    }
                    if (this.x + this.width / 2 > p.x + p.width / 2) {
                        this.x = p.x + p.width + 0.1;
                    }
                }
            });
        }
        if (this.game.player.level===5) {
            this.game.platform.platforms.level5.forEach(p => {
                if (this.x + this.width >= p.x && this.x <= p.x + p.width && this.y >= p.y && this.y <= p.y + p.height - this.height) {
                    if (this.x + this.width / 2 < p.x + p.width / 2) {
                        this.x = p.x - this.width - 0.1;
                    }
                    if (this.x + this.width / 2 > p.x + p.width / 2) {
                        this.x = p.x + p.width + 0.1;
                    }
                }
            });
        }
    },
    collisionCoordinatesY(){
            if(this.y > this.ground){
                this.y = this.ground;
                this.gravity = 0;
                this.jumping = "false";
            }
            if(this.y < 0){
                this.y = 0;
                this.gravity = 0;
            }
        if (this.game.player.level===1){
            this.game.platform.platforms.level1.forEach(p=>{
                if(this.y >= p.y + p.height - this.height && this.y <= p.y + p.height && this.x + this.width >= p.x +this.width/2 && this.x + this.width <= p.x + p.width + this.width/2){
                    this.y = p.y + p.height;
                    this.gravity = 0;
                }
                if(this.y >= p.y - this.height && this.y <= p.y + this.height && this.x + this.width >= p.x + this.width/2 && this.x + this.width <= p.x + p.width + this.width/2){
                    this.y = p.y - this.height;
                    this.gravity = 0;
                    this.jumping = "false";
                }
            })
        }
        if (this.game.player.level===2){
            this.game.platform.platforms.level2.forEach(p=>{
                if(this.y >= p.y + p.height - this.height && this.y <= p.y + p.height && this.x + this.width >= p.x +this.width/2 && this.x + this.width <= p.x + p.width + this.width/2){
                    this.y = p.y + p.height;
                    this.gravity = 0;
                }
                if(this.y >= p.y - this.height && this.y <= p.y + this.height && this.x + this.width >= p.x + this.width/2 && this.x + this.width <= p.x + p.width + this.width/2){
                    this.y = p.y - this.height;
                    this.gravity = 0;
                    this.jumping = "false";
                }
            })
        }
        if (this.game.player.level===3){
            this.game.platform.platforms.level3.forEach(p=>{
                if(this.y >= p.y + p.height - this.height && this.y <= p.y + p.height && this.x + this.width >= p.x +this.width/2 && this.x + this.width <= p.x + p.width + this.width/2){
                    this.y = p.y + p.height;
                    this.gravity = 0;
                }
                if(this.y >= p.y - this.height && this.y <= p.y + this.height && this.x + this.width >= p.x + this.width/2 && this.x + this.width <= p.x + p.width + this.width/2){
                    this.y = p.y - this.height;
                    this.gravity = 0;
                    this.jumping = "false";
                }
            })
        }
        if (this.game.player.level===4){
            this.game.platform.platforms.level4.forEach(p=>{
                if(this.y >= p.y + p.height - this.height && this.y <= p.y + p.height && this.x + this.width >= p.x +this.width/2 && this.x + this.width <= p.x + p.width + this.width/2){
                    this.y = p.y + p.height;
                    this.gravity = 0;
                }
                if(this.y >= p.y - this.height && this.y <= p.y + this.height && this.x + this.width >= p.x + this.width/2 && this.x + this.width <= p.x + p.width + this.width/2){
                    this.y = p.y - this.height;
                    this.gravity = 0;
                    this.jumping = "false";
                }
            })
        }
        if (this.game.player.level===5){
            this.game.platform.platforms.level5.forEach(p=>{
                if(this.y >= p.y + p.height - this.height && this.y <= p.y + p.height && this.x + this.width >= p.x +this.width/2 && this.x + this.width <= p.x + p.width + this.width/2){
                    this.y = p.y + p.height;
                    this.gravity = 0;
                }
                if(this.y >= p.y - this.height && this.y <= p.y + this.height && this.x + this.width >= p.x + this.width/2 && this.x + this.width <= p.x + p.width + this.width/2){
                    this.y = p.y - this.height;
                    this.gravity = 0;
                    this.jumping = "false";
                }
            })
        }
    },
    collisionCoordinates() {
        if (this.y >= this.game.end.y && this.y <= this.game.end.y + this.game.end.height && this.x >= this.game.end.x - this.game.end.width && this.x <= this.game.end.x + this.game.end.width) {
            this.win();
        }
        if (this.game.player.level===1){
            this.game.spike.spikes.level1.forEach(s => {
                if (this.y >= s.y && this.y <= s.y + s.height && this.x >= s.x - s.width - s.width * 0.5 && this.x <= s.x + s.width / 2) {
                    this.respawn();
                }
            })
        }
        if (this.game.player.level===2){
            this.game.spike.spikes.level2.forEach(s => {
                if (this.y >= s.y && this.y <= s.y + s.height && this.x >= s.x - s.width - s.width * 0.5 && this.x <= s.x + s.width / 2) {
                    this.respawn();
                }
            })
        }
        if (this.game.player.level===3){
            this.game.spike.spikes.level3.forEach(s => {
                if (this.y >= s.y && this.y <= s.y + s.height && this.x >= s.x - s.width - s.width * 0.5 && this.x <= s.x + s.width / 2) {
                    this.respawn();
                }
            })
        }
        if (this.game.player.level===4){
            this.game.spike.spikes.level4.forEach(s => {
                if (this.y >= s.y && this.y <= s.y + s.height && this.x >= s.x - s.width - s.width * 0.5 && this.x <= s.x + s.width / 2) {
                    this.respawn();
                }
            })
        }
        if (this.game.player.level===5){
            this.game.spike.spikes.level5.forEach(s => {
                if (this.y >= s.y && this.y <= s.y + s.height && this.x >= s.x - s.width - s.width * 0.5 && this.x <= s.x + s.width / 2) {
                    this.respawn();
                }
            })
        }
    },
    respawn(){
        this.x = 50;
        this.y = 350;
        this.death += 1;
    },
    win(){
        this.x = 50;
        this.y = 350;
        this.level += 1;
        if(this.level === 6){
            this.level = 1
        }
    },
    changeDivText(){
        const numberOfDeath = document.getElementById("death");
        numberOfDeath.textContent = "Death: " + this.death;
        const currentLevel = document.getElementById("level");
        currentLevel.textContent = "Level: " + this.level;
    },
    update(){
        this.jump();
        this.collisionCoordinatesX();
        this.collisionCoordinatesY();
        this.collisionCoordinates();
        this.move();
        this.render();
        this.changeDivText();
    },
    render(){
        this.game.c.fillStyle = "blue";
        this.game.c.fillRect(this.x,this.y,this.width,this.height)
    }
};