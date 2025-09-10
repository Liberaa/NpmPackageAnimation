// functions, export, 

export function MoveDiv (move) {
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

}