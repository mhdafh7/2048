// initialising score
let score = 0
let grid
const rows = 4
const columns = 4
document.addEventListener("DOMContentLoaded", () => {
    // when the browser is loaded game is loaded
    console.log("Calling loadGame");
    loadGame()
})

function loadGame() {
    let gameGrid = document.querySelector("#gameGrid")
    let scoreBoard = document.querySelector("#score")

    // initialising the starting grid all as zero

    grid = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ]
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            let gridElement = document.createElement("div")
            gridElement.id = `${row}-${col}`
            let num = grid[row][col]
            updateElement(gridElement, num)
            gameGrid.append(gridElement)
        }
    }

    generateTwo()
    generateTwo()
    console.log("After calling generate 2 times")
}
function updateElement(gridElement, num) {
    // resetting the gridElements
    gridElement.innerText = ""
    gridElement.classList.value = ""
    gridElement.classList.add("gridElement")
    if (num > 0) {
        gridElement.innerText = `${num}`

        gridElement.classList.add(`num${num}`)
    }
}

function generateTwo() {

    if (!hasEmptyElement()) {
        return
    }
    let flag = false
    while (!flag) {
        // filling random position with two numbers
        let r = Math.floor(Math.random() * rows)
        let c = Math.floor(Math.random() * columns)
        if (grid[r][c] == 0) {
            grid[r][c] = 2
            let gridElement = document.getElementById(`${r}-${c}`)
            gridElement.innerText = "2"
            gridElement.classList.add("num2")
            flag = true
        }
    }
}
function hasEmptyElement() {
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            if (grid[row][col] === 0) {
                return true
            }
        }
    }
    return false
}

function checkGameOver(){
    let zeros = 0
    for (let i=0; i < squares.length; i++) {
      if (squares[i].innerHTML == 0) {
        zeros++
      }
    }
    if (zeros === 0) {
      resultDisplay.innerHTML = 'You LOSE'
      document.removeEventListener('keyup', control)
      setTimeout(() => clear(), 3000)
    }
}
// event listner for each key press
document.addEventListener("keyup", (e) => {
    const handlers = {
        ArrowLeft: () => {
            slideX("left")
        },
        ArrowRight: () => {
            slideX("right")
        },
        ArrowUp: () => {
            slideY("up")
        },
        ArrowDown: () => {
            slideY("down")
        },
    }
    const direction = handlers[e.code]
    if (direction !== undefined) {
        direction()
        generateTwo()
    }

    scoreBoard.innerText = score
})

function removeZero(row) {
    return row.filter((num) => num)
}
function slide(row) {
    row = removeZero(row)
    for (let i = 0; i < row.length - 1; i++) {
        if (row[i] == row[i + 1]) {
            row[i] *= 2
            row[i + 1] = 0
            score += row[i]
        }
    }
    row = removeZero(row)
    while (row.length < 4) {
        row.push(0)
    }
    return row
}
function slideX(direction) {
    for (let r = 0; r < rows; r++) {
        let row = grid[r]

        if (direction === "right") {
            row.reverse()
        }
        row = slide(row)
        // console.log(row);

        grid[r] = direction === "right" ? row.reverse() : row

        for (let c = 0; c < columns; c++) {
            let gridElement = document.getElementById(`${r}-${c}`)
            // console.log(grid)
            let num = grid[r][c]
            updateElement(gridElement, num)
        }
    }
}
function slideY(direction) {
    for (let c = 0; c < columns; c++) {
        let row = [grid[0][c], grid[1][c], grid[2][c], grid[3][c]]

        if (direction === "down") {
            row.reverse()
        }
        row = slide(row)
        // console.log(row);

        direction === "down" ? row.reverse() : null

        for (let r = 0; r < rows; r++) {
            grid[r][c] = row[r]
            let gridElement = document.getElementById(`${r}-${c}`)
            // console.log(grid)
            let num = grid[r][c]
            updateElement(gridElement, num)
        }
    }
}
