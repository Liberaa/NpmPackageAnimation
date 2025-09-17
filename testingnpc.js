import { createNPC } from "./npc.js";
import { MoveDiv } from "./script.js";
// testing stuff wallahi
const game = MoveDiv({
    controlScheme: 'wasd',
    enableCollision: true,
    spawnX: 200,
    spawnY: 100,
})

createNPC({
    name: ' ',
    x: 100,
    y: 200,
    color: 'red',
    speed: 1,
    movementType: 'patrol'
})

createNPC({
    name: 'RetardedNpc', 
    x: 300,
    y: 100,
    color: 'blue',
    speed: 2,
    movementType: 'wander'
})

createNPC({
    name: 'mr no legs :(',
    x: 500,
    y: 500,
    color: 'purple',
    movementType: 'stationary'
})