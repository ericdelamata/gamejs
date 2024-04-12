const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width=1024
canvas.height=576

const keys = {
    d: { 
        pressed:false
    },
    a: { 
        pressed:false
    },
    w: { 
        pressed:false
    },
    s: { 
        pressed:false
    },
}
const player = new Player()

const background = new Sprite({
    position:{
        x: 0,
        y: 0,
    },
    imagesrc: './img/background.png'
})

function animate(){
    window.requestAnimationFrame(animate)
    c.fillStyle='white'
    c.fillRect(0,0,canvas.width,canvas.height)

    c.save()
    c.scale(4,4)
    c.translate(0,-352)
    background.update()
    c.restore()

    player.draw()
    player.update()

    player.velocity.speedx=0
    player.velocity.speedy=0
    if(keys.d.pressed&&keys.w.pressed){
        player.velocity.speedx=5
        player.velocity.speedy=-5
    }else if(keys.d.pressed&&keys.s.pressed){
        player.velocity.speedx=5
        player.velocity.speedy=5
    }else if(keys.a.pressed&&keys.w.pressed){
        player.velocity.speedx=-5
        player.velocity.speedy=-5
    }else if(keys.a.pressed&&keys.s.pressed){
        player.velocity.speedx=-5
        player.velocity.speedy=5
    }else if(keys.d.pressed) player.velocity.speedx=5
    else if(keys.a.pressed) player.velocity.speedx=-5
    else if(keys.w.pressed) player.velocity.speedy=-5
    else if(keys.s.pressed) player.velocity.speedy=5
    }

animate()

window.addEventListener('keydown',(event)=>{
    switch (event.key) {
        case 'd':
            keys.d.pressed = true
            break
        case 'a':
            keys.a.pressed= true
            break
    }
})
window.addEventListener('keydown',(event)=>{
    switch (event.key) {
        case 'w':
            keys.w.pressed = true
            break
        case 's':
            keys.s.pressed = true
            break
    }
})
window.addEventListener('keyup',(event)=>{
    switch (event.key) {
        case 'd':
            keys.d.pressed = false
            break
        case 'a':
            keys.a.pressed= false
            break
        case 'w':
            keys.w.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
    }
})