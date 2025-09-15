import { MoveDiv } from './script.js'
import { createObstacle } from './obstacle.js'

MoveDiv({ controlScheme: 'platform'})
createObstacle({ x: 400, y: 500, width: 1200, height: 300, color: 'green' })
createObstacle({ x: 500, y: 580, width: 1000, height: 150, color: 'darkgreen' })


// notes, if space in platform mode, goes down all the way
// Do I want that? Maby don't know yet.
// Focus on adding obstecles
// users should be able to easly creat diffrent obstecles
// TODO : Update so Players can land on obstacles import and use in movediv.
