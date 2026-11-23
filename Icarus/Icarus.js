new p5();

let canvasWidth = windowWidth;
let canvasHeight;

let poem = "Did anyone hear the splash?\nWere you that far out at sea, Icarus?\nDid you soar or plummet to reach the setting sun?\n\nYour father, did he try to swoop and catch you\nOnly to falter when the waves threatened his own flight,\nOr was he absent entirely, from the scene?\n\nThe birds, circling in the wind, perhaps felt pity\nAs you sunk in the shadows of the cliff-side\nBut only Helios followed you down into the water."
let painting;
let paintingWidth = 12265;
let paintingHeight = 8000;
let paintingWidthSized = canvasWidth;
let paintingHeightSized = (paintingHeight*paintingWidthSized/paintingWidth);

async function setup(){
    painting = await loadImage('https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Pieter_Bruegel_the_Elder_-_Landscape_with_the_Fall_of_Icarus_-_Brussels%2C_Royal_Museums_of_Fine_Arts_of_Belgium_-_Google_Arts_%26_Culture.jpg/1280px-Pieter_Bruegel_the_Elder_-_Landscape_with_the_Fall_of_Icarus_-_Brussels%2C_Royal_Museums_of_Fine_Arts_of_Belgium_-_Google_Arts_%26_Culture.jpg?');
    console.log(paintingHeightSized);
}
