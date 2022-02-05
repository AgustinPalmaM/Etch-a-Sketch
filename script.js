const mainContainer = document.querySelector('#main-container')
const buttonColor =  document.querySelector('#muestrario')
const buttonBorrarTodo = document.querySelector('#boton-borrar-todo')
const buttonBorrar = document.querySelector('#boton-borrar')
const buttonColorear = document.querySelector('#colorear')
const buttonEightSquares = document.querySelector('#eight')
const buttonSixteenSquares = document.querySelector('#sixteen')
const buttonThirtyTwoSquares = document.querySelector('#thirtyTwo')
const buttonSixtyFourSquares = document.querySelector('#sixtyFour')

function agregarDivs(numSquares) {
    let size = (mainContainer.clientWidth) / numSquares;
    for (let i = 0; i < (numSquares * numSquares); i++) {
        var smallDivs = document.createElement('div')
        mainContainer.appendChild(smallDivs)
        smallDivs.style.cssText = `width: ${size}px; height: ${size}px; `;   
    }
}

function eliminarDivs() {
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild)
    }
}


buttonEightSquares.addEventListener('click', eliminarDivs)
buttonEightSquares.addEventListener('click', () => {
    agregarDivs(8)
})

buttonSixteenSquares.addEventListener('click', eliminarDivs)
buttonSixteenSquares.addEventListener('click', () => {
    agregarDivs(16)
})

buttonThirtyTwoSquares.addEventListener('click', eliminarDivs)
buttonThirtyTwoSquares.addEventListener('click', () => {
    agregarDivs(32)
})

buttonSixtyFourSquares.addEventListener('click', eliminarDivs)
buttonSixtyFourSquares.addEventListener('click', () => {
    agregarDivs(64)
})



function colorear() {
    mainContainer.childNodes.forEach((e) => {
        e.addEventListener('mouseenter', function () {
            e.style.backgroundColor = buttonColor.value
        })
    })    
}

buttonColorear.addEventListener('click', colorear)

function borrador() {
    mainContainer.childNodes.forEach((d) => {
        d.addEventListener('mouseenter', () => {
            d.style.backgroundColor = 'white'
        })
    })
}
buttonBorrar.addEventListener('click', borrador)

function borrarTodo() {
    allSmallDivs = mainContainer.querySelectorAll('div');
    allSmallDivs.forEach(div => div.style.backgroundColor = 'white')
}
buttonBorrarTodo.addEventListener('click', borrarTodo)



// buttonEightSquares.addEventListener('click', agregarDivs(8))
// buttonEightSquares.addEventListener('click', agregarDivs(16))


// const pruebaParent = document.querySelector("#prueba-parent")
// const pruebaHijo = document.querySelector('#prueba-hijo')
// pruebaParent.childNodes.forEach((x) => {
//     if (x.nodeName === 'DIV') {
//         x.style.cssText = 'background-color: black; height: 0px; width: 0px'
//     }
    
// })

// console.log(pruebaParent.childNodes);












