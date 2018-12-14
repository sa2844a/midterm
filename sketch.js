var Cx, Cy;
var r, g , b;
var Counter = 80;
var Sign = 5;
var StepSize = 3;
var running = true;
var button;
var sliderz;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(250,140,70);
	
	r = random(255);
  g = random(255);
  b = random(255);

		button = createButton('SlowAndSideWays');
	button.position(150,30);
	button.size(125,60);
	button.mousePressed(SlowAndSideWays);

	sliderz = createSlider(75,260,75);
sliderz.position(90,90);
sliderz.size(100,100);
	
		var rNumber = sliderz.value();
	text(["r = "+rNumber],255,255);
}
function draw() {
	

	
		if (running) {
		Counter = Counter + Sign* StepSize;
	}
	if (Counter > width || Counter < 0) {
		Sign = Sign * -1
	}
	
	fill(sliderz.value());
	ellipse(frameCount%900, Counter-800,100,100);
	fill(r,g,b,200);
	ellipse(width-Counter, frameCount%1000,100,100);
	fill(g,b,r,300);
	ellipse(width-Counter+500, frameCount%1000,100,100);
	fill(sliderz.value(),);
	ellipse(width-Counter+1000, frameCount%1000,100,100);
		fill(200,g,r,b);
	ellipse(frameCount%1000, Counter, 100, 100);
		fill(0,255,0);
	ellipse(frameCount%1000, width-Counter, 100, 100);
}

	function SlowAndSideWays() {
		running = !running;
	}
