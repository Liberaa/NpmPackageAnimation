import { MoveDiv } from './script.js'
// trying stuff here
const game = MoveDiv({
    controlScheme: 'platform',
    enableCollision: true,
    spawnX: 200,
    spawnY: 1000,
})

game.addObstacle({
    x: 200, y: 220, width: 1200, height: 30, color: 'green', enableCollision: true
})

game.addObstacle({
    x: 600, y: 450, width: 100, height: 30, color: 'gold', enableCollision: true,
    
})
game.addObstacle({
    x: 700, y: 400, width: 80, height: 40, color: 'purple', enableCollision: true
})

