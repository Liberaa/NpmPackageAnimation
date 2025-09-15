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
    const groundLevel = window.innerHeight - 60

    document.body.appendChild(player)

    document.addEventListener('keydown', event => {
        const key = event.key.toLowerCase() // If player got caps lock on
        console.log('keys thats pressed:' + key)

        if (controlScheme === 'wasd') {
            if (key === "a") leftPressed = true
            if (key === "d") rightPressed = true
            if (key === "w") upPressed = true
            if (key === "s") downPressed = true
        } else if (controlScheme === "platformer") {
            if (key === "a") leftPressed = true
            if (key === "d") rightPressed = true
            if (key === " " && !isJumping) {
                jumPressed = true
                isJumping = true
                velocity = -jumpPower
            }
        }
    })

    document.addEventListener('keyup', event => {
        const key = event.key.toLowerCase() // caps

        if (controlScheme === "wasd") {
            if (key === "a") leftPressed = false
            if (key === "d") rightPressed = false
            if (key === "w") upPressed = false
            if (key === "s") downPressed = false
        } else if (controlScheme === "platform") {
            if (key === "a") leftPressed = false
            if (key === "d") rightPressed = false
            if (key === " ") jumPressed = false
        }

    })

    return {}
    // Logic gameloop and actually moving.
    function gameLoop() {
        if (controlScheme === 'wasd') {
            if (leftPressed) x -= speed
            if (rightPressed) x += speed
            if (upPressed) y -= speed
            if (downPressed) y += speed
        } else if (controlScheme === 'platform') {
            if (leftPressed) x -= speed
            if (rightPressed) x += speed
            if (isJumping) { // jump and gravity logic

            }
        }

    }
    //do requestAnimationFrame(gameLoop)
}

