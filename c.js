let screen
const oneHandler = () => {
    result.innerHTML += one.innerHTML
}

const twoHandler = () => {
    result.innerHTML += two.innerHTML
}

const threeHandler = () => {
    result.innerHTML += three.innerHTML
}

const fourHandler = () => {
    result.innerHTML += four.innerHTML
}

const fiveHandler = () => {
    result.innerHTML += five.innerHTML
}

const sixHandler = () => {
    result.innerHTML += six.innerHTML
}

const sevenHandler = () => {
    result.innerHTML += seven.innerHTML
}

const eightHandler = () => {
    result.innerHTML += eight.innerHTML
}

const nineHandler = () => {
    result.innerHTML += nine.innerHTML
}

const zeroHandler = () => {
    result.innerHTML += zero.innerHTML
}

const addsHandler = () => {
    result.innerHTML += add.innerHTML
}

const subHandler = () => {
    result.innerHTML += sub.innerHTML
}

const dotHandler = () => {
    result.innerHTML += dot.innerHTML
}
const divHandler = () => {
    result.innerHTML += div.innerHTML
}

const multHandler = () => {
    result.innerHTML += mult.innerHTML
}

const equalHandler = () => {
    screen = result.innerHTML
    result.innerHTML = eval(screen)
}

const delHandler = () => {
    screen = result.innerHTML
    s_number = screen.length
    result.innerHTML = screen.slice(0,s_number-1)
}

const resetHandler = () => {
    result.innerHTML = ""
}
