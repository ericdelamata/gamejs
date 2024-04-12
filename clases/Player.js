class Player {
    constructor(){
        this.position = {
            x:0,
            y:200,
        }
        this.velocity = {
            speedx:0,
            speedy:0,
        }
    }
    draw(){
        c.fillStyle= 'red'
        c.fillRect(this.position.x,this.position.y,16*4,16*4)
    }
    update(){
        this.position.x+=this.velocity.speedx
        this.position.y+=this.velocity.speedy
    }
}