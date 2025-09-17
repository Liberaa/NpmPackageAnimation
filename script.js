import { createObstacle } from './obstacle.js'

export function MoveDiv(options = {}) {
    const playerElement = document.createElement('div')
    const controlScheme = options.controlScheme || 'wasd'
    const enableCollisionDetection = options.enableCollision || false

    const obstacleList = []

    // Player visual styling
    playerElement.style.width = '60px'
    playerElement.style.height = '60px'
    playerElement.style.backgroundColor = 'black'
    playerElement.style.borderRadius = '24px'
    playerElement.style.position = 'absolute'

    // Movement configuration
    const playerMovementSpeed = 5
    const playerWidth = 60
    const playerHeight = 60

    // Input state tracking
    let isLeftKeyPressed = false
    let isRightKeyPressed = false
    let isUpKeyPressed = false
    let isDownKeyPressed = false
    let isJumpKeyPressed = false
    let playerIsJumping = false

    // Physics for platformer
    let verticalVelocity = 0
    const jumpStrength = 7
    const gravityForce = 0.3
    const groundYPosition = window.innerHeight - playerHeight

    // Player position (spawn logic)
    let playerXPosition = options.spawnX ?? 200
    let playerYPosition = options.spawnY ?? (controlScheme === 'platform' ? groundYPosition : 200)

    playerElement.style.left = playerXPosition + 'px'
    playerElement.style.top = playerYPosition + 'px'

    document.body.appendChild(playerElement)

    document.addEventListener('keydown', keydownEvent => {
        const pressedKey = keydownEvent.key.toLowerCase()
        
        if (controlScheme === 'wasd') {
            if (pressedKey === 'a') isLeftKeyPressed = true
            if (pressedKey === 'd') isRightKeyPressed = true
            if (pressedKey === 'w') isUpKeyPressed = true
            if (pressedKey === 's') isDownKeyPressed = true
        } else if (controlScheme === 'platform') {
            if (pressedKey === 'a') isLeftKeyPressed = true
            if (pressedKey === 'd') isRightKeyPressed = true
            if (pressedKey === ' ' && !playerIsJumping) {
                isJumpKeyPressed = true
                playerIsJumping = true
                verticalVelocity = -jumpStrength
            }
        }
    })

    document.addEventListener('keyup', keyupEvent => {
        const releasedKey = keyupEvent.key.toLowerCase()
        
        if (controlScheme === 'wasd') {
            if (releasedKey === 'a') isLeftKeyPressed = false
            if (releasedKey === 'd') isRightKeyPressed = false
            if (releasedKey === 'w') isUpKeyPressed = false
            if (releasedKey === 's') isDownKeyPressed = false
        } else if (controlScheme === 'platform') {
            if (releasedKey === 'a') isLeftKeyPressed = false
            if (releasedKey === 'd') isRightKeyPressed = false
            if (releasedKey === ' ') isJumpKeyPressed = false
        }
    })

    function addObstacleToGame(obstacleOptions = {}) {
        const newObstacle = createObstacle(obstacleOptions)
        obstacleList.push(newObstacle)
        return newObstacle
    }

    function detectCollisionBetween(objectX, objectY, objectWidth, objectHeight, obstacleElement) {
        const obstacleXPosition = parseInt(obstacleElement.style.left)
        const obstacleYPosition = parseInt(obstacleElement.style.top)
        const obstacleWidth = parseInt(obstacleElement.style.width)
        const obstacleHeight = parseInt(obstacleElement.style.height)

        return objectX < obstacleXPosition + obstacleWidth &&
               objectX + objectWidth > obstacleXPosition &&
               objectY < obstacleYPosition + obstacleHeight &&
               objectY + objectHeight > obstacleYPosition
    }

    function runGameLoop() {
        if (controlScheme === 'platform') {
            // a and d movement
            if (isLeftKeyPressed) playerXPosition -= playerMovementSpeed
            if (isRightKeyPressed) playerXPosition += playerMovementSpeed

            let playerHasLandedOnSurface = false

            // gravity and jumping velocityy
            if (playerIsJumping) {
                playerYPosition += verticalVelocity
                verticalVelocity += gravityForce
            }

            // (platform landing)
            if (enableCollisionDetection && obstacleList.length > 0) {
                for (const currentObstacle of obstacleList) {
                    if (currentObstacle.enableCollision && verticalVelocity >= 0) {
                        const obstacleXPosition = parseInt(currentObstacle.style.left)
                        const obstacleYPosition = parseInt(currentObstacle.style.top)
                        const obstacleWidth = parseInt(currentObstacle.style.width)

                        const playerIsAboveObstacle = playerXPosition + playerWidth > obstacleXPosition && 
                                                    playerXPosition < obstacleXPosition + obstacleWidth
                        const playerBottomEdge = playerYPosition + playerHeight
                        const playerNextBottomPosition = playerBottomEdge + verticalVelocity

                        if (playerIsAboveObstacle && 
                            playerBottomEdge <= obstacleYPosition && 
                            playerNextBottomPosition >= obstacleYPosition) {
                            playerYPosition = obstacleYPosition - playerHeight
                            playerIsJumping = false
                            verticalVelocity = 0
                            playerHasLandedOnSurface = true
                            break
                        }
                    }
                }
            }

            // Check  collision on grond 
            if (!playerHasLandedOnSurface && playerYPosition >= groundYPosition) {
                playerYPosition = groundYPosition
                playerIsJumping = false
                verticalVelocity = 0
            }

            // Start falling if player are above ground and is not jumping
            if (!playerHasLandedOnSurface && playerYPosition < groundYPosition && !playerIsJumping) {
                playerIsJumping = true
            }
        } else if (controlScheme === 'wasd') {
            if (isLeftKeyPressed) playerXPosition -= playerMovementSpeed
            if (isRightKeyPressed) playerXPosition += playerMovementSpeed
            if (isUpKeyPressed) playerYPosition -= playerMovementSpeed
            if (isDownKeyPressed) playerYPosition += playerMovementSpeed
        }

        // Check collision for obstacles
        for (const currentObstacle of obstacleList) {
            if (currentObstacle.onCollide && 
                detectCollisionBetween(playerXPosition, playerYPosition, playerWidth, playerHeight, currentObstacle)) {
                currentObstacle.onCollide()
            }
        }

        // Keep player inside screen
        if (playerXPosition < 0) playerXPosition = 0
        if (playerXPosition > window.innerWidth - playerWidth) playerXPosition = window.innerWidth - playerWidth
        if (playerYPosition < 0) playerYPosition = 0
        if (playerYPosition > window.innerHeight - playerHeight) playerYPosition = window.innerHeight - playerHeight

        // Update player positon
        playerElement.style.left = playerXPosition + 'px'
        playerElement.style.top = playerYPosition + 'px'

        requestAnimationFrame(runGameLoop)
    }

    runGameLoop()

    return {
        addObstacle: addObstacleToGame
    }
}