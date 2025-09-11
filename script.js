// functions, export, 
export function MoveDiv(scenes) {
    const element = document.createElement('div')
    element.id = 'player' // elemnts idlkl
    document.body.appendChild(element) // body basic html wallahi, putting the div inside the <body>

    element.style.position = 'absolute'
    element.style.width = '60px'
    element.style.height = '60px'
    element.style.background = 'black'

    let currentScene = 0
    let x = window.innerWidth / 2 - 30
    let y = window.innerHeight / 2 - 30
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

    // load
    if(scenes[currentScene]) scenes[currentScene]()

    function move() {
        if(left) x -= speed
        if(right) x += speed

        // scene change
        if(x <= 0) {
            currentScene = (currentScene - 1 + scenes.length) % scenes.length
            x = window.innerWidth - 70 // appear on the right side with buffer
            if(scenes[currentScene]) scenes[currentScene]()
        }
        if(x + 60 >= window.innerWidth) {
            currentScene = (currentScene + 1) % scenes.length
            x = 10 // appear on the left side with buffer
            if(scenes[currentScene]) scenes[currentScene]()
        }

        element.style.left = x + 'px'
        element.style.top = y + 'px'

        requestAnimationFrame(move)
    }

    move()
}