import { MoveDiv } from './script.js'

const scenes = [
    function scene0() { document.body.style.background = 'lightgray' },
    function scene1() { document.body.style.background = 'lightblue' },
    function scene2() { document.body.style.background = 'lightgreen' },
    function scene3() { document.body.style.background = 'lightpink' }
]

// Create the game
const game = MoveDiv(scenes, {
    color: 'red',
    width: 50,
    height: 20,
    speed: 7
})

// Add NPCs to different scenes
game.addNPC(0, {
    x: 200, y: 200,
    color: 'red',
    dialogue: "Hello World!"
})

game.addNPC(1, {
    x: 500, y: 500,
    color: 'green',
    dialogue: "Fuck off!"
})

game.addNPC(2, {
    x: 150, y: 300,
    color: 'purple',
    dialogue: "Fuck you bitch"
})