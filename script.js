// var smallDivs = document.createElement('div')
// mainContainer.appendChild(smallDivs)
// smallDivs.classList.add('small-divs')
// var smallDivsTwo = document.createElement('div')
// mainContainer.appendChild(smallDivsTwo)
// smallDivsTwo.classList.add('small-divs-two')

const mainContainer = document.querySelector('#main-container')
function agregarDivs(height, width, size) {
    let maxWidth = width * size
    let maxHeight = height * size
    for (let i = 0; i < (height * width); i++) {
        var smallDivs = document.createElement('div')
        mainContainer.appendChild(smallDivs)
        smallDivs.style.cssText = `width: ${size}px; height: ${size}px; `;
        mainContainer.setAttribute('style', `max-width: ${maxWidth}px; max-height: ${maxHeight}px`)
        
        
    }

    mainContainer.childNodes.forEach((e) => {
        e.addEventListener('mouseenter', function () {
            e.style.backgroundColor = buttonColor.value
        })
    })
    
    const button = document.querySelector('#boton-borrar')
    mainContainer.childNodes.forEach((a) => {
        button.addEventListener('click', function () {
            a.style.backgroundColor = 'white'
        })
    })
    
    const buttonColor =  document.querySelector('#muestrario')
    console.log(buttonColor.value)

}

agregarDivs(32,32,15)

























// window.onload=function()
// {
//     var i=0;
//     var j=0;

//     for (i=1; i<=300; i++)
//     {
        
//             var d=document.createElement("div");
//                 mainContainer.appendChild(d);
//                 d.className="black";
        
//     }
// }
