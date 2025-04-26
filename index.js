let btn_drow=document.querySelector('.but')
let field_cont = document.querySelector('.field-container')

function scrollDown(e) {
    e.preventDefault()
    field_cont.style.display = 'flex'
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}
btn_drow.addEventListener('click',scrollDown)

let CURRENT_COLOR = 'white'
let DEFAULT_COLOR = 'gray'
let field = document.querySelector('.field')
for (let i=0; i<450;i+=1){
    let cell=document.createElement('div')
    cell.classList.add('cell')
    cell.setAttribute('id',`${i}`)
    field.appendChild(cell)   
}
let IS_CLICED = false
document.addEventListener('mousedown',function(){
    IS_CLICED=true
})
document.addEventListener('mouseup',function(){
    IS_CLICED=false
})
let cells = document.querySelectorAll('.cell')
cells.forEach(cell =>{
    cell.addEventListener('mouseover', function(){
        if (IS_CLICED){
            cell.style.backgroundColor=CURRENT_COLOR
        }
    })
    cell.addEventListener('mousedown', function(){
        cell.style.backgroundColor=CURRENT_COLOR
    })
})

let red_color = document.querySelector('.red')
red_color.addEventListener('click', function(){
    CURRENT_COLOR='red'
    let selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    red_color.classList.add('selected')

})
let purple_color = document.querySelector('.violet')
purple_color.addEventListener('click', function(){
    CURRENT_COLOR='purple'
    let selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    purple_color.classList.add('selected')

})
let blue_color = document.querySelector('.blue')
blue_color.addEventListener('click', function(){
    CURRENT_COLOR='blue'
    let selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    blue_color.classList.add('selected')

})

let green_color = document.querySelector('.green')
green_color.addEventListener('click', function(){
    CURRENT_COLOR='green'
    let selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    green_color.classList.add('selected')

})
let white_color = document.querySelector('.white')
white_color.addEventListener('click', function(){
    CURRENT_COLOR='white'
    let selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    white_color.classList.add('selected')

})
let eraser = document.querySelector('.eraser')
eraser.addEventListener('click', function(){
    CURRENT_COLOR='gray'
    let selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    eraser.classList.add('selected')

})
document.querySelector('.save').addEventListener('click', function(){
    domtoimage.toJpeg( field, { quality: 0.95 })
    .then(function (dataUrl) {
        let link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });
})
