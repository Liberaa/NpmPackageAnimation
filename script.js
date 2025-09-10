// functions, export, 

export function MoveDiv() {
    const element = document.createElement('div')
    element.id = 'player' // elemnts idlkl
    document.body.appendChild(element) // body basic html wallahi, putting the div inside the <body>

    element.style.position = 'absolute'
    element.style.width = '60px'
    element.style.height = '60px'
    element.style.background = 'black'

    // center horizontally by default
    let x = window.innerWidth / 2 - 30 // 30 = half width of div
    let y = window.innerHeight / 2 - 30 // optional vertical center
    element.style.left = x + 'px'
    element.style.top = y + 'px'

    let speed = 5
    let left = false
    let right = false
    // I Will set this vaule as true later In my if statments :D 

    document.addEventListener('keydown', function(event) {
        if(event.key == 'a') left = true // Something like this :O
        if(event.key == 'd') right = true
    })

    document.addEventListener('keyup', function(event) {
        if(event.key == 'a') left = false
        if(event.key == 'd') right = false
    })

    function move() {
        if(left) x -= speed
        if(right) x += speed

        element.style.left = x + 'px'
        element.style.top = y + 'px'

        requestAnimationFrame(move)
    }

    move()
}
