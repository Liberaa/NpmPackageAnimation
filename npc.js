export function createNPC (options = {}) {
    const npcElement = document.createElement('div')

    const npcWidth = options.width || 50
    const npcHeight = options.height || 60
    const npcColor = options.color || 'green'
    const npcName = options.name || 'brap'

    npcElement.style.width = npcWidth + 'px'
    npcElement.style.height = npcHeight + 'px'
    npcElement.style.position = 'absolute'
    npcElement.style.left = (options.x || 0) + 'px'
    npcElement.style.top = (options.y || 0) + 'px'

    // Image or color support
    if (options.image) {
        npcElement.style.backgroundImage = `url(${options.image})`
        npcElement.style.backgroundSize = 'cover'
        npcElement.style.backgroundPosition = 'center'
        npcElement.style.backgroundRepeat = 'no-repeat'
    } else {
        npcElement.style.backgroundColor = npcColor
    }

    // const nameLabel = document.createElement('div')
    // name label variables above npc goes here TODO :

    let npcPositionX = options.x || 0
    let npcPositionY = options.y || 0
    let movementSpeed = options.speed || 2
    let movementType = options.movementType || 'patrol'

    // npc wants to talk :O
    const dialogMsg = options.dialog || 'heelo call me' + npcName + '  whats up'

    // Patrol points
    const patrolPoints = options.patrolPoints || [
        { x: npcPositionX, y: npcPositionY },
        { x: npcPositionX + 200, y: npcPositionY }
    ]
    let currentTarget = 0

    function createDialogBox() {}
    function showDialog() {}
    function closeDialog() {}

    function updateMovement() {
        if (movementType === 'patrol') {
            const target = patrolPoints[currentTarget]
            const deltaX = target.x - npcPositionX
            const deltaY = target.y - npcPositionY
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
            
            if (distance < 5) {
                currentTarget = (currentTarget + 1) % patrolPoints.length
            } else {
                npcPositionX += (deltaX / distance) * movementSpeed
                npcPositionY += (deltaY / distance) * movementSpeed
            }
        } else if (movementType === 'wander') {
            if (Math.random() < 0.02) {
                npcPositionX += (Math.random() - 0.5) * movementSpeed * 3
                npcPositionY += (Math.random() - 0.5) * movementSpeed * 3
                
                if (npcPositionX < 0) npcPositionX = 0
                if (npcPositionX > window.innerWidth - npcWidth) npcPositionX = window.innerWidth - npcWidth
                if (npcPositionY < 0) npcPositionY = 0
                if (npcPositionY > window.innerHeight - npcHeight) npcPositionY = window.innerHeight - npcHeight
            }
        }
        
        npcElement.style.left = npcPositionX + 'px'
        npcElement.style.top = npcPositionY + 'px'
        
        requestAnimationFrame(updateMovement)
    }

    if (movementType !== 'stationary') {
        updateMovement()
    }

    document.body.appendChild(npcElement)

    return {
        element: npcElement,
        name: npcName
    }
}