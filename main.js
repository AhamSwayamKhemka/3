canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d");
h = 100;
w = 75
x = 5;
y = 225;
var background_image = "parkingLot.jpg";
var greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgtag = new Image();
	greencar_imgTag = uploadgreencar;
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgtag, x, y, w, h);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (y>=0) {
		y = y - 10;
		console.log("When up arrow is pressed, x=" + x + " | y="+y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if (y<=0) {
		y = y + 10;
		console.log("When up arrow is pressed, x=" + x + " | y="+y);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
}
