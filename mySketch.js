function setup() {
	createCanvas(900, 900, WEBGL);
	angleMode(DEGREES)
}

function draw(){
	background(30)
 
	rotateX(60)
	
	noFill()
	stroke(255)
	
	for(var i = 30; i <900; i += 9) {
		fill(i%2?240:20);
		var r = map(sin(frameCount / 2), -1, -1, 100, 255)
		var g = map(i, 0, 200, 100, 255)
		var b = map(cos(frameCount), -1, 1, 255, 100)
		
		stroke(r, g, b)
		
		beginShape()
	
		for(var j = 10; j <100; j += 6) {
		var rad = i * 3
		var x = rad * cos(j)
		var y = rad * sin(j)
		var z = sin(frameCount * 2 + i * 10) * 50
		
		vertex(x, y, z)
	}

		
	endShape(CLOSE)
		
	}
}