export function MoveDiv(options = {}) {
    const player = document.createElement('div')

    const controlScheme = options.controlScheme || 'wasd' // User chooses 'wasd' or 'platform'

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
    let jumpPressed = false
    let isJumping = false

    let velocity = 0
    let jumpPower = 7
    const gravity = 0.3
    const groundLevel = window.innerHeight - 60

    document.body.appendChild(player)

    document.addEventListener('keydown', event => {
        const key = event.key.toLowerCase() // If player got caps lock on
        console.log('keys thats pressed:' + key)

        if (controlScheme === 'wasd') {
            if (key === 'a') leftPressed = true
            if (key === 'd') rightPressed = true
            if (key === 'w') upPressed = true
            if (key === 's') downPressed = true
        } else if (controlScheme === 'platform') {
            if (key === 'a') leftPressed = true
            if (key === 'd') rightPressed = true
            if (key === ' ' && !isJumping) {
                jumpPressed = true
                isJumping = true
                velocity = -jumpPower
            }
        }
    })

    document.addEventListener('keyup', event => {
        const key = event.key.toLowerCase() // caps

        if (controlScheme === 'wasd') {
            if (key === 'a') leftPressed = false
            if (key === 'd') rightPressed = false
            if (key === 'w') upPressed = false
            if (key === 's') downPressed = false
        } else if (controlScheme === 'platform') {
            if (key === 'a') leftPressed = false
            if (key === 'd') rightPressed = false
            if (key === ' ') jumpPressed = false // stop jump if released
        }
    })

    function gameLoop() {
        if (controlScheme === 'wasd') {
            if (leftPressed) x -= speed
            if (rightPressed) x += speed
            if (upPressed) y -= speed
            if (downPressed) y += speed
        } else if (controlScheme === 'platform') {
            if (leftPressed) x -= speed
            if (rightPressed) x += speed

            // Jump and gravity logic
            if (isJumping) {
                y += velocity
                velocity += gravity

                // Short jump if space is released early
                if (!jumpPressed && velocity < -2) {
                    velocity = -2
                }

                // Land back on ground
                if (y >= groundLevel) {
                    y = groundLevel
                    isJumping = false
                    velocity = 0
                }
            }
        }

        // Keep player inside
        if (x < 0) x = 0
        if (x > window.innerWidth - 60) x = window.innerWidth - 60
        if (y < 0) y = 0
        if (y > window.innerHeight - 60) y = window.innerHeight - 60

        // Update div position
        player.style.left = x + 'px'
        player.style.top = y + 'px'

        requestAnimationFrame(gameLoop)
    }

    gameLoop()
}
