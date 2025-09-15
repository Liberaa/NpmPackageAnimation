// obstacle.js

export function createObstacle(options = {}) {
    const obstacle = document.createElement('div')

    const width = options.width || 100
    const height = options.height || 40
    const color = options.color || 'red'
    const x = options.x || 300
    const y = options.y || window.innerHeight - height - 20

    obstacle.style.width = width + 'px'
    obstacle.style.height = height + 'px'
    obstacle.style.backgroundColor = color
    obstacle.style.position = 'absolute'
    obstacle.style.left = x + 'px'
    obstacle.style.top = y + 'px'
    obstacle.style.borderRadius = '8px'

  
    document.body.appendChild(obstacle)

    return obstacle 
}
