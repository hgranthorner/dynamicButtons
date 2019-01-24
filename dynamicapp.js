const colors = ['blue', 'green', 'yellow', 'orange']

function generateDom(colors) {
  const titleElement = document.createElement('h1')
  const titleText = document.createTextNode('My App')
  titleElement.appendChild(titleText)
  document.body.appendChild(titleElement)
  const squareDiv = document.createElement('div')
  squareDiv.classList.add('square-container')
  document.body.appendChild(squareDiv)
  createSquares(colors)
  let buttonDiv = document.createElement('div')
  buttonDiv.classList.add('button-container')
  buttonDiv.id = 'button-div'
  document.body.appendChild(buttonDiv)
  createButtons(colors)
}

function createSquares(colors) {
  const squareDiv = document.querySelector('.square-container')
  let colorSquare
  colors.forEach(color => {
    colorSquare = document.createElement('div')
    colorSquare.classList.add('square')
    colorSquare.id = color
    colorSquare.style.backgroundColor = color
    squareDiv.appendChild(colorSquare)
  })
}

function createButtons(colors) {
  const buttonDiv = document.getElementById('button-div')
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
  colors.forEach(color => {
    let button = document.createElement('button')
    button.id = color + '-toggle'
    button.innerText = 'Toggle ' + color[0].toUpperCase() + color.slice(1)
    button.onclick = () => {
      const square = document.querySelector('#' + color)
      if (!square.style.visibility || square.style.visibility === 'visible') {
        square.style.visibility = 'hidden'
      } else {
        square.style.visibility = 'visible'
      }
    }
    buttonDiv.appendChild(button)
  })
}

generateDom(colors)
