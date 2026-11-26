new p5();

let story = "While wandering around the parking lot trying to figure out where my new car was parked a woman stopped me and asked if I knew anything about landline phones. I said not really but that I'd had one growing up. She told me her troubles, there was a storm coming and an electrical box was unlocked and she couldn't get in touch with Verizon to get it fixed before an upcoming storm. I suggested duct tape and she thanked me profusely."

let storyInCharacters = [];

let margin = 10;
let padding = 5;
let fontSize = 20;

let counter = 0;

let letterX = 0 + margin;
let letterY = 0 + margin + fontSize;

function splitStory() {
    for (let i = 0; i < story.length; i = i + 1){
        storyInCharacters.push(story.slice(i,i+1));
    }
}

function setup() {
    splitStory();
    createCanvas(windowWidth,windowHeight);
    textSize(20);
    frameRate(4);
}

function draw() {
    text(storyInCharacters[counter], letterX, letterY);
    letterX = letterX + padding + fontWidth(storyInCharacters[counter]);
    if (letterX + margin + fontWidth(storyInCharacters[counter + 1]) >= windowHeight) {
        letterX = 0 + margin;
        letterY = letterY + fontSize + padding;
    }
    counter = counter + 1;
}