export default class Enemy {
    constructor(x,y){
        this.x = x
        this.y = y
        this.width = 60
        this.height = 33
        this.image = new Image()
        this.image.src = "/imgs/enemy.png"
    }

    draw(){
        
    }
}