import { MoveDiv } from './script.js'

// define diffrent scene with 123...etc
const scenes = [
    function scene1() { document.body.style.background = 'lightblue' },
    function scene2() { document.body.style.background = 'lightgreen' },
    function scene3() { document.body.style.background = 'lightpink' }
]

MoveDiv(scenes)
