new p5();

let canvasWidth = 500;
let canvasHeight = 500;
let titleBounds;

let progressCount = 3;
let progressComplete = false;
let trigger = false;

let System;

let Adrian;
let radio;
let globe;

let Masha;
let pigeons;
let spooky;

let Fira;
let bass;
let fire;

let Marius;
let outdoors;
let typeWriter;

let Collie;
let dog;
let horse;

let Dawn;
let gloomHarp;
let museum;

let Jasper;
let guitar;
let waterfall;

let Eli;
let alcohol;
let cahlk;

let song;
let chimes;
let industry;

let Rowan;
let bush;
let baking;

let Vanny;
let hum;
let darkSynth;

let Simon;
let sharpening;
let bird;

let Darling;
let metronome;
let ambiance;

let Aurora;
let princessHarp;
let cards;

let Evren;
let puppet;
let otherRoom;

let Tilly;
let telephone;
let church;

let Beep;
let synth;
let ocean;

let Stephen;
let thunder;
let book;


class Identity {
  constructor(x, y, aspect1, aspect2, shade, sound1, sound2){
    this.x = x;
    this.y = y;
    this.xCanvas = (x/100)*canvasWidth;
    this.yCanvas = (y/100)*canvasHeight;
    this.aspect1 = aspect1;
    this.aspect2 = aspect2;
    this.shade = shade;
    this.sound1 = sound1;
    this.sound2 = sound2;
    this.counter = 0;
    this.countUp = false;
    this.randomState;
    this.randomOptions = [1, 2, 3, 4];
    this.aspects = [aspect1, aspect2];
    this.sounds = [sound1, sound2];
    this.bounds = textBounds(this.aspect1, this.xCanvas, this.yCanvas);
    this.projected = false;
  }

  projection(){
    fill('black');
    text(this.aspect1, this.xCanvas, this.yCanvas);
    this.bounds = textBounds(this.aspect1, this.xCanvas, this.yCanvas);
    this.projected = true;
  }

  cycle(){
    if (this.projected == true){
      if(mouseX > this.bounds.x & mouseX < this.bounds.x + this.bounds.w & mouseY > this.bounds.y & mouseY < this.bounds.y + this.bounds.h){
        trigger = true;
        fill('white');
        rect(this.bounds.x, this.bounds.y,this.bounds.w +1,this.bounds.h);
        if (this.countUp == true){
          this.counter = this.counter + 1;
        }
        if (this.counter == this.aspects.length){
          this.counter = 0;
        }
        if (this.countUp == false){
          fill(this.shade);
          text(this.aspects[this.counter], this.xCanvas, this.yCanvas);
          this.sounds[this.counter].loop();
          this.sounds[this.counter].play();
          this.countUp = true;
          this.bounds = textBounds(this.aspects[this.counter], this.xCanvas, this.yCanvas);
        } else {
          if (this.sound1.isPlaying() == true){
            this.sound1.pause();
          }
          if (this.sound2.isPlaying() == true){
            this.sound2.pause();
          }
          fill('black');
          text(this.aspects[this.counter], this.xCanvas, this.yCanvas);
          this.bounds = textBounds(this.aspects[this.counter], this.xCanvas, this.yCanvas);
          this.countUp = false;
        }
      }
    }
  }

  randomize(){
    if (this.projected == true){
      this.randomState = random(this.randomOptions);
      if (this.randomState == 1){
        if (this.sound1.isPlaying() == true){
          this.sound1.pause();
        }
        if (this.sound2.isPlaying() == true){
          this.sound2.pause();
        }
        fill('white');
        rect(this.bounds.x, this.bounds.y, this.bounds.w + 1, this.bounds.h);
        fill('black');
        text(this.aspect1, this.xCanvas, this.yCanvas);
        this.bounds = textBounds(this.aspect1, this.xCanvas, this.yCanvas);
        this.counter = 0;
        this.countUp = false;
      }
      if (this.randomState == 2){
        if (this.sound2.isPlaying() == true){
          this.sound2.pause();
        }
        fill('white');
        rect(this.bounds.x, this.bounds.y,this.bounds.w +1,this.bounds.h);
        fill(this.shade);
        text(this.aspect1, this.xCanvas, this.yCanvas);
        this.sound1.loop();
        this.sound1.play();
        this.bounds = textBounds(this.aspect1, this.xCanvas, this.yCanvas);
        this.countUp = true;
        this.counter = 0;
      }
      if (this.randomState == 3){
        if (this.sound1.isPlaying() == true){
          this.sound1.pause();
        }
        if (this.sound2.isPlaying() == true){
          this.sound2.pause();
        }
        fill('white');
        rect(this.bounds.x, this.bounds.y,this.bounds.w +1,this.bounds.h);
        fill('black');
        text(this.aspect2, this.xCanvas, this.yCanvas);
        this.bounds = textBounds(this.aspect2, this.xCanvas, this.yCanvas);
        this.counter = 1;
        this.countUp = false; 
      }
      if (this.randomState == 4){
        if (this.sound1.isPlaying() == true){
          this.sound1.pause();
        }
        fill('white');
        rect(this.bounds.x, this.bounds.y,this.bounds.w +1,this.bounds.h);
        fill(this.shade);
        text(this.aspect2, this.xCanvas, this.yCanvas);
        this.sound2.loop();
        this.sound2.play();
        this.bounds = textBounds(this.aspect2, this.xCanvas, this.yCanvas);
        this.countUp = true;
        this.counter = 1;
      }
    }
  }
}

async function setup(){

  //princessHarp = await loadSound('map/sounds/princessHarp.mp3');
  cards = await loadSound('map/sounds/shuffleCards.mp3');
  //Aurora = new Identity(35, 40, "Princess", "Magician", 'LightSteelBlue', princessHarp, cards);

  telephone = await loadSound('map/sounds/telephone.mp3');
  church = await loadSound('map/sounds/churchAmbiance.mp3');
  Tilly = new Identity(25, 35, "Telephone", "Delusion", 'Yellow', telephone, church);

  pigeons = await loadSound('map/sounds/pigeons.mp3.mp3');
  spooky = await loadSound('map/sounds/spookyWind.mp3');
  Masha = new Identity(25, 50, "Wings", "Ghost", 'DarkOrange', pigeons, spooky);
  
  sharpening = await loadSound('map/sounds/sharpening.mp3');
  bird = await loadSound('map/sounds/eagle.mp3');
  Simon = new Identity(25, 60, "Sword", "Prosecution", 'DarkGoldenRod', sharpening, bird);

  hum = await loadSound('map/sounds/computerHumm.mp3');
  darkSynth = await loadSound('map/sounds/DarkRumbling.mp3');
  Vanny = new Identity(10, 70, "Program", "Unnatural", 'Crimson', hum, darkSynth);

  alcohol = await loadSound('map/sounds/alcohol.mp3');
  chalk = await loadSound('map/sounds/chalk.mp3');
  Eli = new Identity(30, 85, "Sorrow", "Protection", 'Grey', alcohol, chalk);

  synth = await loadSound('map/sounds/beepSynth.mp3');
  ocean = await loadSound('map/sounds/ocean.mp3');
  Beep = new Identity(50, 30, "Synth", "Adventure", 'DarkCyan', synth, ocean);

  radio = await loadSound('map/sounds/radio.mp3');
  globe = await loadSound('map/sounds/globe.mp3');
  Adrian = new Identity(50, 50, "Radio", "Centered", 'DarkGoldenrod', radio, globe);

  metronome = await loadSound('map/sounds/metronome.mp3');
  ambiance = await loadSound('map/sounds/darlingAmbient.mp3');
  Darling = new Identity(50, 65, "Obsession", "Otherworldly", 'MediumSeaGreen', metronome, ambiance);
  
  puppet = await loadSound('map/sounds/puppet.mp3');
  otherRoom = await loadSound('map/sounds/nextRoom.mp3');
  Evren = new Identity(50, 80, "Puppet", "Lonely", 'MidnightBlue', puppet, otherRoom);

  gloomHarp = await loadSound('map/sounds/dawnHarp.mp3');
  museum = await loadSound('map/sounds/museum.mp3');
  Dawn = new Identity(75, 10, "Sunlight", "Curator", 'Gold', gloomHarp, museum);

  chimes = await loadSound('map/sounds/windChimes.mp3');
  industry = await loadSound('map/sounds/industry.mp3');
  song = new Identity(55, 40, "Gardener", "Expirimental", 'ForestGreen', chimes, industry);

  bass = await loadSound('map/sounds/bass.mp3');
  fire = await loadSound('map/sounds/fire.mp3');
  Fira = new Identity(79, 50, "Jazz", "Confrontation", 'Red', bass, fire);

  bush = await loadSound('map/sounds/bush.mp3');
  baking = await loadSound('map/sounds/mixing.mp3');
  Rowan = new Identity(65, 50, "Deer", "Sister", 'DeepPink', bush, baking);

  guitar = await loadSound('map/sounds/guitar.mp3');
  waterfall = await loadSound('map/sounds/waterfall.mp3');
  Jasper = new Identity(60, 55, "Hippie", "Spirit", 'RoyalBlue', guitar, waterfall);

  dog = await loadSound('map/sounds/dog.mp3');
  horse = await loadSound('map/sounds/horse.mp3');
  Collie = new Identity(65, 45, "Sheepdog", "Cowboy", 'Sienna', dog, horse);

  thunder = await loadSound('map/sounds/thunder.mp3');
  book = await loadSound('map/sounds/book.mp3');
  Stephen = new Identity(70, 70, "Shadow", "Ambivilent", 'Purple', thunder, book);

  outdoors = await loadSound('map/sounds/newEngland.mp3');
  typeWriter = await loadSound('map/sounds/typewriter.mp3');
  Marius = new Identity(65, 90, "Solitude", "Edit", 'Olive', outdoors, typeWriter);

  System = [Adrian, Masha, Fira, Marius, Collie, Dawn, Jasper, Eli, song, Rowan, Vanny, Simon, Darling, Aurora, Evren, Tilly, Beep, Stephen];
  
  createCanvas(canvasWidth, canvasHeight);
  background('white');
  textFont('Verdana');
  textSize(30);
  noStroke();
  text("The Chaos Collective", (4/100)*canvasWidth, (10/100)*canvasHeight);
  titleBounds = textBounds("The Chaos Collective", (4/100)*canvasWidth, (10/100)*canvasHeight);
  textSize(15);
  Adrian.projection();
  Masha.projection();
  Fira.projection();
}

function mouseClicked(){
  trigger = false;
  for (i = 0; i < 18; i = i + 1){
    System[i].cycle();
  }
  if(mouseX > titleBounds.x & mouseX < titleBounds.x + titleBounds.w & mouseY > titleBounds.y & mouseY < titleBounds.y + titleBounds.h){
    trigger = true;
    for (j = 0; j < 18; j = j + 1){
      System[j].randomize();
    }
  }
  if (trigger == false & progressComplete == false){
    System[progressCount].projection();
    progressCount = progressCount + 1
    if (progressCount == 18){
      progressComplete = true;
    }
  }
}