new p5();

let poem = "I have yet to learn\nTo live in my own body\nTo set the table precisely\nFor the world to eat me alive\n\nSpeak over me, please\nSo I don't have to hear my own voice\nI'll wait\n\nI want to read the repair manual\n Lungs, heart, brain, stomach, liver\nDo you know how often\nYou're supposed to vacuum yourself out?\n\nExhale till you're desperate\nSeeing stars\nMaybe if I throw it all out I'll be who people think I am\nHollow\nA vessel for privilege and prosperity";

let screenWidth = 700;
let screenHeight;
let poemBounds;
let wordSize = 20;
let straightLineToggle = false;
let justReleasedToggle = false;
let offCanvasToggle = false;
let straightLinePosition;
let printButton;
let resetButton;
let undoButton;
let xStart;
let xEnd;
let previousBlock;
let queue = [];
let queueLength;
let printIteration = 1;
let printIterationString = str(printIteration);
let filename = "erasure" + printIterationString + ".png";

class eraseBar{
  constructor(x1,x2,y){
    this.x1 = x1;
    this.x2 = x2;
    if (x1 < x2){
      this.x = this.x1 - 5;
    } else{
      this.x = this.x2 - 5;
    }
    this.y = y - 1;
    this.w = Math.abs(x1-x2) + 20;
    this.h = 25;
  }
}

function savePoem(){
  let savedPoem = saveCanvas(filename);
  printIteration = printIteration + 1;
  printIterationString = str(printIteration);
  filename = "erasure" + printIterationString + ".png";
}

function reset(){
  background(255);
  while (queue.length > 0){
    queue.pop();
  }
}

function undo(){
  fill(255);
  noStroke();
  if (queue.length > 0){
    rect(queue[queueLength].x, queue[queueLength].y, queue[queueLength].w, queue[queueLength].h);
  }
  queue.pop();
  console.log(queue);
  queueLength = queue.length - 1;
  offCanvasToggle = true;
  justReleasedToggle = false;
}

function setup() {
  textSize(20);
  poemBounds = fontBounds(poem, 10, 10, screenWidth-20);
  createCanvas(screenWidth, poemBounds.h + 20);
  textSize(20);
  background(255);
  text(poem, 10, 10, screenWidth-20);
  printButton = createButton("download");
  resetButton = createButton("reset");
  undoButton = createButton("undo");
  //undoButton.mouseClicked(false);
}

function draw() {
  fill(0);
  offCanvasToggle = false;
  printButton.mouseClicked(savePoem);
  resetButton.mouseClicked(reset);
  if (queue.length > 0){
    undoButton.mouseClicked(undo);
  }
  if (mouseIsPressed == false){
    straightLineToggle = false;
    if (justReleasedToggle == true){
      
      xEnd = mouseX;
      justReleasedToggle = false;
      previousBlock = new eraseBar(xStart, xEnd, straightLinePosition);
      queue.push(previousBlock);
      console.log(queue);
      queueLength = queue.length - 1;
    }
  }
  if (mouseIsPressed == true & offCanvasToggle == false){
    if (straightLineToggle == false){
      //undoButton.mouseClicked(true);
      straightLinePosition = mouseY - 10;
      xStart = mouseX;
      rect(mouseX,straightLinePosition, 10, 20);
      straightLineToggle = true;
      justReleasedToggle = true;
    } else {
      rect(mouseX,straightLinePosition, 10, 20);
    }
  }
  text(poem, 10, 10, screenWidth-20);
}