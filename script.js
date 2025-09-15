export function MoveDiv(options = {}) {
    const player = document.createElement('div')

const controlScheme = options.controlScheme || 'wasd' // Want to give user the choice to move the div like this :  x + jump  || or x and y no jump

    player.style.width = '60px'
    player.style.height = '60px'
    player.style.background = 'grey'
    player.style.borderRadius = '24px' 
    player.style.position = 'absolute'
    player.style.left = '200px'
    player.style.top = '200px'
    player.style.backgroundColor = 'black'

    let x = 200
    let y = 200
    let speed = 5
    
    let leftPressed = false
    let rightPressed = false
    let upPressed = false
    let downPressed = false
    let jumPressed = false
    let isJumping = false


    let velocity = 0
    let jumpPower = 5
    const gravity = 0.2
     // const groundLevel = window.innerHeight - 60

    document.body.appendChild(player)

    document.addEventListener('keydown', event => {
        const key = event.key.toLowerCase() // if players have caps lock we help them out <3
        console.log(key) // I wanna se so it works

        if (key === 'a') leftPressed = true
        if (key === 'd') rightPressed = true
        if (key === 'w') upPressed = true
        if (key === 's') downPressed = true
        if(key === ' ') {
            
        }
       // if (key === ' ') 
    })

    document.addEventListener('keyup', event => {
        const key = event.key.toLowerCase()
        console.log('Key released:', key)

        if (key === 'a') leftPressed = false
        if (key === 'd') rightPressed = false
        if (key === 'w') upPressed = false
        if (key === 's') downPressed = false
        if(key === ' ') {

        }
    })

    setInterval(() => {
        if (leftPressed) x -= speed   
        if (rightPressed) x += speed  
        if (upPressed) y -= speed     
        if (downPressed) y += speed   
// no running away from window!
        if (x < 0) x = 0
        if (x > window.innerWidth - 60) x = window.innerWidth - 60
        if (y < 0) y = 0
        if (y > window.innerHeight - 60) y = window.innerHeight - 60

        // Update position
        player.style.left = x + 'px'
        player.style.top = y + 'px'
        
    }, 0) 

    return {} 
}

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase()
    if (controlScheme === 'wasd') {
        if (key === 'a') leftPressed = true
        if (key === 'd') rightPressed = true
        if (key === 's') downPressed = true
        if (key === 'w') upPressed = true
    } else if ( controlScheme === 'platform'){
        if (key === 'a') leftPressed = true
        if (key === 'd') rightPressed = true
        if(key === ' ' && !isJumping) {
            jumPressed = true
            isJumping = true
            velocity = -jumpPower
        }
    }

})

document.addEventListener('keyup', event => {
    const key = event.key.toLowerCase()
    if(controlScheme === 'wasd') {

    } else if (controlScheme === 'platform') {
        
    }
})
