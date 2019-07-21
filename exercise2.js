
var x = 1;
 
// function changeColor () {
        
//         if (x === 1) {
//              document.getElementById('mydiv').style.background = 'red';
//              x++;
//         } else if (x === 2) {
//              document.getElementById('mydiv').style.background = 'green' ;
//              x = 0;
//         }  else {
//             document.getElementById('mydiv').style.background = 'blue'
//             x++;
//         }
    
    
// }

var colors = ['green', 'blue', 'red', 'yellow', 'pink', 'darkblue', 'black', 'gold', 'purple', 'grey', 'orange'];

function changeColor () {
    mydiv.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

    


