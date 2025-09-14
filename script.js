export function MoveDiv() {
    const player = document.createElement('div')
    // define id,
    //body.appendchild(player)

  player.style.width = '60px'
  player.style.height = '60px'
  player.style.background = 'grey'
  player.style.borderRadius = '24px' 
  player.style.position = 'absolute'
  player.style.left = '200px'
  player.style.top = '200px'

  let x = 200
  let y = 200
  let speed = 20
  let leftPressed = false
  let rightPressed = false
  let upPressed = false
  let downPressed = false

  document.body.appendChild(player)

  document.addEventListener('keydown', event => {
    const key = event.key.toLowerCase() // if players have caps lock we help them out <3

  })

}