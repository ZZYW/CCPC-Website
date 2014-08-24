var recLenth = 150;

function setup() { // **change** void setup() to function setup()
	var myCanvas = createCanvas($(window).width(), $(window).height());
	myCanvas.parent('p5canvas');

}

function draw() {

	var landingPageOpacity = $('#landing-page').css('opacity');
	if (landingPageOpacity != 0) {
		var vertices = [];
		background(32, 125, 174);

		for (var i = 0; i < $(window).width(); i += recLenth) {
			for (var y = 0; y < $(window).height(); y += recLenth) {
				vertices[vertices.length] = createVector(i, y);
			}
		}
		rectMode(CENTER);
		for (var i = 0; i < vertices.length; i++) {
			noStroke();
			if (mouseX > vertices[i].x - recLenth / 2 && mouseX < vertices[i].x + recLenth / 2 && mouseY > vertices[i].y - recLenth / 2 && mouseY < vertices[i].y + recLenth / 2) {
				fill(255, 0, 8);
				
				
				rect(vertices[i].x, vertices[i].y, recLenth, recLenth);
			}
		}
		console.log(vertices.length);
	}

}


function rect(position,active)
{
this.position=position;
this.active=active;
}

var hewef =new rect(_position,true);

 

