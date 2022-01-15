let words = new Map();

function preload() {
	loadStrings('beale.wordlist.asc.txt', createMap );
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background('pink');
}
function createMap(strings) {
	for( let line of strings ) {
		let [key, word] = line.split('\t');
		if( key.length === 5 ) {
			words.set( key, word );
		}
	}
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
    resetDraw()
    var button = createButton ("reset");
    button.mousePressed(resetDraw);

}
function resetDraw() {
  let passWord = "Here is your password:"

background('#c5ebe5');
  fill('#dbd0d5')
rect(100,200,370,60); 
fill('black')
textSize(30);
textFont('Times New Roman');
textStyle(BOLD);
text (passWord, 110, 150);
let phrase = '';

for (let i = 0; i < 5; i++) {
  phrase += buildPhrase();
}

let phraseLength = textWidth(phrase);

  textSize(30);
  textFont('Times New Roman');
  textStyle(NORMAL);
  text(phrase, 110,240);
  noLoop();
}

function buildPhrase() {

  let r = random([1, 2, 3, 4, 5, 6]);
  let t = random([1, 2, 3, 4, 5, 6]); 
  let s = random([1, 2, 3, 4, 5, 6]);
  let d = random([1, 2, 3, 4, 5, 6]);
  let f = random([1, 2, 3, 4, 5, 6]);
  
  let lookupKey =[r,t,s,d,f].join('');

  let x = words.get(lookupKey);

  return x;
}

function keyPressed() {
  if(keyCode === RETURN) {
    redraw();
  }
}
