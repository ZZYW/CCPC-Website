	//p5.js

	var recLenth = 100;
	var vertices = [];
	var rects = [];
	//ArrayList<PVector> vertices;
	//ArrayList<PVector> rects;

	var x_count;
	var y_count;



	function setup() { // **change** void setup() to function setup()
		var myCanvas = createCanvas($(window).width(), $(window).height());
		myCanvas.parent('p5canvas');
	}

	function draw() { // **change** void draw() to function draw()
		background(32,	125,	174	);
		
		for (var i = 0; i < $(window).width(); i += recLenth) {
			for (var y = 0; y < $(window).height(); y += recLenth) {
				vertices[vertices.length] = createVector(i,y);
			}
		}
		
		for ( var i =0; i< vertices.length; i++) {
	    noStroke();
	    if (mouseX > vertices[i].x - recLenth/2
	      && mouseX < vertices[i].x + recLenth/2
	      && mouseY > vertices[i].y - recLenth/2
	      && mouseY < vertices[i].y + recLenth/2) {
	      fill(255,0,8);
	      rect(vertices[i].x, vertices[i].y, recLenth, recLenth);
	    }
	  }
			
			
	}


	//
	//
	//void setup() {
	//  vertices = new ArrayList<PVector>();
	//  rects = new ArrayList<PVector>();
	//  size(800, 400);
	//  background(#c3272b);
	//  x_count = width/recLenth;
	//  y_count = height/recLenth;
	//}
	//
	//
	//void draw() {
	//  background(#177cb0 );
	//  for (int i=0; i < width; i+=recLenth) {
	//    for (int y=0; y < height; y+=recLenth) {
	//      vertices.add(new PVector(i, y));
	//    }
	//  }
	//  for ( int i =0; i< vertices.size (); i++) {
	//    noStroke();
	//    if (mouseX > vertices[i].x - recLenth/2
	//      && mouseX < vertices[i].x + recLenth/2
	//      && mouseY > vertices[i].y - recLenth/2
	//      && mouseY < vertices[i].y + recLenth/2) {
	//      fill(#c3272b);
	//      rect(vertices[i].x, vertices[i].y, recLenth, recLenth);
	//    }
	//  }
	//}
	//
	//	
	//	