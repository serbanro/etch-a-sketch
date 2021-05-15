console.log("js connected")

const container = document.querySelector(".container")
const resetGame = document.querySelector(".reset")
let squareNumberSide = prompt("How many squares do you want to use?")
let squareNumber = squareNumberSide * squareNumberSide


while(squareNumberSide > 100) {
    
  playGame()
}

createSquare(squareNumber)
adjustGrid(squareNumber)
changeColor()
reset()


function createSquare(squareNumber) {
    while (squareNumber > 0) {
        let newDiv = document.createElement('div')
        newDiv.classList.add("square")
        container.appendChild(newDiv)
        squareNumber --
    }
}

function adjustGrid (squareNumber) {
    const containerStyle = window.getComputedStyle(container)
    const containerHeight = containerStyle.getPropertyValue('height')
    console.log(containerHeight)
    const squareSize = containerHeight.substring(0,3) / squareNumberSide
    container.style.gridTemplateColumns = `repeat(${squareNumberSide}, ${squareSize}px)`
    container.style.gridTemplateRows = `repeat(${squareNumberSide}, ${squareSize}px)`
    console.log(squareSize)

}

function changeColor() {
    const squares = document.querySelectorAll(".square")

    squares.forEach(square => {
     square.addEventListener('mouseenter', e => {
         square.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40`
     })
    }) 
}

function askSquareNumber() {
    squareNumberSide = prompt("How many squares do you want to use?")
    squareNumber = squareNumberSide * squareNumberSide
}

function removeSquares() {
    const squares = document.querySelectorAll(".square")

    squares.forEach(square => {
     square.style.display = "none"
     
    }) 
}

function playGame() {
    removeSquares()
    askSquareNumber()
    createSquare(squareNumber)
    adjustGrid(squareNumber)
    changeColor()
}
      
function reset() {
    resetGame.addEventListener('click', e =>{
        playGame()
    })
}