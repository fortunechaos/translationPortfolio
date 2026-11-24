new p5();

let canvasWidth = windowWidth/2;
let canvasHeight;

let title = "Landscape with the Fall of Icarus";
let titleGate = false;

let epigrapgh = "About suffering they were never wrong,\nThe Old Masters: how well they understood\n— W. H. Auden, “Musée des Beaux Arts”"
let epigraphGate = false;

let line1 = "Did anyone hear the splash?";
let line1Gate = false;

let line2 = "Were you that far out at sea, Icarus?";
let line2Gate = false;

let line3 = "Did you soar or plummet to reach the setting sun?";
let line3Gate = false;

let line4 = "Your father, did he try to swoop and catch you";
let line4Gate = false;

let line5 = "Only to falter when the waves threatened his own flight,";
let line5Gate = false;

let line6 = "Or was he absent entirely, from the scene?";
let line6Gate = false;

let line7 = "The birds, circling in the wind, perhaps felt pity";
let line7Gate = false;

let line8 = "As you sunk in the shadows of the cliff-side";
let line8Gate = false;

let line9 = "But only Helios followed you down into the water.";
let line9Gate = false;

let painting;
let paintingWidth = 12265;
let paintingHeight = 8000;
let paintingWidthSized = canvasWidth;
let paintingHeightSized = (paintingHeight*paintingWidthSized/paintingWidth);
canvasHeight = paintingHeightSized;

let totalPixels;
let blackPixels;
let percentBlack;

function checkPixelPercentage() {
    loadPixels();
    totalPixels = pixels.length/4;
    blackPixels = 0;
    for (let i = 0; i < pixels.length; i = i + 4){
        if(pixels[i] == 0 & pixels[i + 1] == 0 & pixels[i + 2] == 0 & pixels[i+3] == 255){
            blackPixels = blackPixels + 1;
        }
    }
    percentBlack = (blackPixels/totalPixels)*100;
}

function gatedPrinting() {
    if (percentBlack >= 1 & titleGate == false){
        createP(title);
        titleGate = true;
    }
    if (percentBlack >= 10 & epigraphGate == false){
        createP(epigrapgh);
        epigraphGate = true;
    }
    if (percentBlack >= 20 & line1Gate == false){
        createP(line1);
        line1Gate = true;
    }
    if (percentBlack >= 30 & line2Gate == false){
        createP(line2);
        line2Gate = true;
    }
    if (percentBlack >= 40 & line3Gate == false){
        createP(line3);
        line3Gate = true;
    }
    if (percentBlack >= 50 & line4Gate == false){
        createP(line4);
        line4Gate = true;
    }
    if (percentBlack >= 60 & line5Gate == false){
        createP(line5);
        line5Gate = true;
    }
    if (percentBlack >= 70 & line6Gate == false){
        createP(line6);
        line6Gate = true;
    }
    if (percentBlack >= 80 & line7Gate == false){
        createP(line7);
        line7Gate = true;
    }
    if (percentBlack >= 90 & line8Gate == false){
        createP(line8);
        line8Gate = true;
    }
    if (percentBlack >= 100 & line9Gate == false){
        createP(line9);
        line9Gate = true;
    }
}

async function setup(){
    painting = await loadImage('https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Pieter_Bruegel_the_Elder_-_Landscape_with_the_Fall_of_Icarus_-_Brussels%2C_Royal_Museums_of_Fine_Arts_of_Belgium_-_Google_Arts_%26_Culture.jpg/1280px-Pieter_Bruegel_the_Elder_-_Landscape_with_the_Fall_of_Icarus_-_Brussels%2C_Royal_Museums_of_Fine_Arts_of_Belgium_-_Google_Arts_%26_Culture.jpg?');
    createCanvas(canvasWidth, canvasHeight);
    image(painting, 0, 0, paintingWidthSized, paintingHeightSized);
}

function draw(){
    if (mouseIsPressed == true){
        fill('black');
        circle(mouseX, mouseY, 100);
    }
    checkPixelPercentage();
    gatedPrinting();
}
