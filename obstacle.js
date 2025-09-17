export function createObstacle(options = {}) {
    const obstacle = document.createElement('div')

    obstacle.style.width = (options.width || 100) + 'px'
    obstacle.style.height = (options.height || 20) + 'px'
    obstacle.style.backgroundColor = options.color || 'red'
    obstacle.style.position = 'absolute'
    obstacle.style.left = (options.x || 0) + 'px'
    obstacle.style.top = (options.y || 0) + 'px'

    obstacle.enableCollision = options.enableCollision ?? true
    obstacle.onCollide = options.onCollide || null

    document.body.appendChild(obstacle)
    return obstacle
}
