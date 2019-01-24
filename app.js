const colors = ['blue', 'green', 'yellow', 'orange']
console.log('egg')
function generateDom(colors) {
  const titleElement = document.createElement('h1')
  const titleText = document.createTextNode('My App')
  titleElement.appendChild(titleText)
  document.body.appendChild(titleElement)
  createSquares()
  createButtons()
}
generateDom(colors)

function createSquares() {
  let squareDiv = document.createElement('div')
  squareDiv.classList.add('square-container')
  squareDiv.id = 'square-div'
  document.body.appendChild(squareDiv)
  squareDiv = document.getElementById('square-div')
  const squareElementRed = document.createElement('div')
  const squareElementBlue = document.createElement('div')
  const squareElementGreen = document.createElement('div')
  const squares = [squareElementRed, squareElementBlue, squareElementGreen]
  squares.forEach(square => {
    square.classList.add('square')
  })
  squares[0].id = 'red'
  squares[1].id = 'blue'
  squares[2].id = 'green'
  squares.forEach(square => {
    squareDiv.appendChild(square)
  })
}
function createButtons() {
  let buttonDiv = document.createElement('div')
  buttonDiv.classList.add('button-container')
  buttonDiv.id = 'button-div'
  document.body.appendChild(buttonDiv)
  buttonDiv = document.getElementById('button-div')
  const hideButton = document.createElement('button')
  hideButton.id = 'hide'
  hideButton.innerText = 'Hide All the Buttons'
  hideButton.onclick = () => {
    const squareList = document.querySelectorAll('.square')
    squareList.forEach(square => {
      square.style.visibility = 'hidden'
    })
  }
  buttonDiv.appendChild(hideButton)
  const showButton = document.createElement('button')
  showButton.id = 'show'
  showButton.innerText = 'Show All the Buttons'
  showButton.onclick = () => {
    const squareList = document.querySelectorAll('.square')
    squareList.forEach(square => {
      square.style.visibility = 'visible'
    })
  }
  buttonDiv.appendChild(showButton)
  const greenButton = document.createElement('button')
  greenButton.id = 'green-toggle'
  greenButton.innerText = 'Toggle Green'
  greenButton.onclick = () => {
    const greenSquare = document.querySelector('#green')
    if (!greenSquare.style.visibility || greenSquare.style.visibility === 'visible') {
      greenSquare.style.visibility = 'hidden'
    } else {
      greenSquare.style.visibility = 'visible'
    }
  }
  buttonDiv.appendChild(greenButton)
  const blueButton = document.createElement('button')
  blueButton.id = 'blue-toggle'
  blueButton.innerText = 'Toggle Blue'
  blueButton.onclick = () => {
    const blueSquare = document.querySelector('#blue')
    if (!blueSquare.style.visibility || blueSquare.style.visibility === 'visible') {
      blueSquare.style.visibility = 'hidden'
    } else {
      blueSquare.style.visibility = 'visible'
    }
  }
  buttonDiv.appendChild(blueButton)
  const redButton = document.createElement('button')
  redButton.id = 'red-toggle'
  redButton.innerText = 'Toggle Red'
  redButton.onclick = () => {
    const redSquare = document.querySelector('#red')
    if (!redSquare.style.visibility || redSquare.style.visibility === 'visible') {
      redSquare.style.visibility = 'hidden'
    } else {
      redSquare.style.visibility = 'visible'
    }
  }
  buttonDiv.appendChild(redButton)
}
