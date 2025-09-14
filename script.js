export function MoveDiv() {
    const player = document.createElement('div')

    player.style.width = '60px'
    player.style.height = '60px'
    player.style.background = 'grey'
    player.style.borderRadius = '24px' 
    player.style.position = 'absolute'
    player.style.left = '200px'
    player.style.top = '200px'

    let x = 200
    let y = 200
    let speed = 5
    let leftPressed = false
    let rightPressed = false
    let upPressed = false
    let downPressed = false

    document.body.appendChild(player)

    document.addEventListener('keydown', event => {
        const key = event.key.toLowerCase() // if players have caps lock we help them out <3
        console.log(key) // I wanna se so it works

        if (key === 'a') leftPressed = true
        if (key === 'd') rightPressed = true
        if (key === 'w') upPressed = true
        if (key === 's') downPressed = true
    })

    document.addEventListener('keyup', event => {
        const key = event.key.toLowerCase()
        console.log('Key released:', key)

        if (key === 'a') leftPressed = false
        if (key === 'd') rightPressed = false
        if (key === 'w') upPressed = false
        if (key === 's') downPressed = false
    })

    setInterval(() => {
        if (leftPressed) x -= speed   
        if (rightPressed) x += speed  
        if (upPressed) y -= speed     
        if (downPressed) y += speed   

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