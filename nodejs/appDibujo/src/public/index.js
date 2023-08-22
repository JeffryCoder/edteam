const socket = io()
var click = false;

var moving_mouse = false;
var x_position = 0;
var y_position = 0;
var previus_position = null;
var color  = 'black';

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

const width = window.innerWidth
const height = window.innerHeight


canvas.width = width
canvas.height = height

canvas.addEventListener('mousedown', ()=>{
    console.log('Dando click')
    click = true;
})

canvas.addEventListener('mouseup', ()=>{
    console.log('Soltando click')
    click = false;
})

canvas.addEventListener('mousemove', (event)=>{

    
    x_position = event.clientX - canvas.offsetLeft -8
    y_position = event.clientY - canvas.offsetTop - 6
    moving_mouse = true;


})


function create_drawing(){

    if (click && moving_mouse && previus_position != null) {

        let drawing = {

            x_position: x_position,
            y_position: y_position,
            color:color,
            previus_position: previus_position
        }
        show_drawing(drawing)
    
    }

    previus_position = {x_position:x_position, y_position:y_position}
    setTimeout(create_drawing, 25)

}

function show_drawing(drawing){

    context.beginPath()

    context.lineWidth = 3
    context.strokeStyle = drawing.color
    context.moveTo(drawing.x_position, drawing.y_position)
    context.lineTo(drawing.previus_position.x_position, drawing.previus_position.y_position)
    context.stroke()

}

create_drawing()