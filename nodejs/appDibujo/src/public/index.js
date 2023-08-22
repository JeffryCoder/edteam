const socket = io()
var click = false;

var moving_mouse = false;
var x_position = 0;
var y_position = 0;
var previus_position = {x_position:0,y_position:0};
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

    
    x_position = event.clientX
    y_position = event.clientY
    moving_mouse = true;


})