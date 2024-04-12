class Sprite{
    constructor({position, imagesrc}){
        this.position=position
        this.image= new Image()
        this.image.src=imagesrc
    }

    draw(){
        if(!this.image) return
        c.drawImage(this.image,this.position.x,this.position.y)
    }
    update(){
        this.draw()
    }
}