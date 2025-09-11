import { MoveDiv } from './script.js'

const scenes = [
    function scene0() { document.body.style.background = 'lightgray' },
    function scene1() { document.body.style.background = 'lightblue' },
    function scene2() { document.body.style.background = 'lightgreen' },
    function scene3() { document.body.style.background = 'lightpink' }
]

MoveDiv(scenes)
