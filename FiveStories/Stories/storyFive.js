//currently not working, I have to brush up on my basic javascript

let warning = document.getElementById("Warning");
let color1 = 'yellow';
let color2 = 'red';

function flashing(){
    if (warning.style.color == color1){
        warning.style.color(color2);
    }
    else {
        warning.style.color(color1);
    }
}

warning.flashing;
