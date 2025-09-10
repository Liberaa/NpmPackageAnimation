// functions, export, 

export function MoveDiv(move) {
    const element = document.createElement('div')
    element.id = 'player' // elemnts idlkl
    document.body.appendChild(element) // body basic html wallahi, putting the div inside the <body>

    // css for the div element
    element.style.position = 'absolute'
    element.style.width = '60px'
    element.style.height = '60px'
    element.style.background = 'black'
    element.style.left = '100px'
    element.style.top = '100px'

    let x = 100
    let y = 100
    let speed = 5
    let keys = {}
    // I Will set this vaule as true later In my if statments :D 
    let up = false
    let down = false
    let left = false
    let right = false

    // detect key press
    document.addEventListener('keydown', function(event) {
        if(event.key == 'w') up = true // Something like this :O
    })

    document.addEventListener('keyup', function(event) {
        if(event.key == 'w') up = false // stop moving when 'w' is released
    })

    // move loop
    function move() {
        if(up) y = y - speed // move the div up
        element.style.top = y + 'px' // update the di position

        requestAnimationFrame(move) // keep the loop going wallahi
    }

    move() 
}
