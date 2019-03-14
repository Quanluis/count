console.log('Is this working?')

let x = document.getElementById('add').onclick = function() {
    console.log('you add me')
}

let y = document.getElementById('sub').onclick = function() {
    console.log('You sub me')
}

 let counter = document.getElementById('counter').innerHTML = 0;

function add(){
    counter++;
   console.log(counter)
}
add()

let textColor = document.getElementById('color');
let buttonColor = document.getElementById('colorChanger');
let colorName = document.getElementById('colorName');


buttonColor.addEventListener( 'click', () => {
    textColor.style.color = colorName.value
})









 




 
 





 


