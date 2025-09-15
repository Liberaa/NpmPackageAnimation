import { MoveDiv } from './script.js'
import { createObstacle } from './obstacle.js'

MoveDiv({ controlScheme: 'platform'})
createObstacle({ x: 400, y: 500, width: 120, height: 30, color: 'green' })

// notes, if space in platform mode, goes down all the way
// Do I want that? Maby don't know yet.
// Focus on adding obstecles
// users should be able to easly creat diffrent obstecles
// TODO : Update so Players can land on obstacles import and use in movediv.
