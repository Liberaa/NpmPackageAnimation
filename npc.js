export function createNPC (options = {}) {
    const npcElement = document.createElement('div')

    const npcWidth = options.width || 50
    const npcHeight = options.height || 60
    const npcColor = options.color || 'green'
    const npcName = options.name || 'brap'

    npcElement.style.width = npcWidth + 'px'
    npcElement.style.height = npcHeight + 'px'
    npcElement.style.backgroundColor = npcColor
    npcElement.style.position = 'absolute'
    npcElement.style.left = (options.x || 0) + 'px'
    npcElement.style.top = (options.y || 0) + 'px'

// const nameLabel = document.createElement('div')
// name label variables above npc goes here TODO :

let npcPositionX = options.x || 0
let npcPositionY = options.y || 0
let movementSpeed = options.speed || 5
// option movment ?
let movementType = options.movementType || 'patrol'

// npc wants to talk :O
const dialogMsg = options.dialog || 'heelo call me' + npcName + '  whats up'


function createDialogBox() {

}

function showDialog() {}
function closeDialog() {}
function updateMovement() {}
document.body.appendChild(npcElement)


}