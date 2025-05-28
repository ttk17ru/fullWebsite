let username = document.createElement("input");
username.className = "usernameI";
username.type = "text";
username.placeholder = "Enter your username";

let startBtn = document.createElement("button");
startBtn.className = "startBtn";

let usernameL = document.getElementById("usernameL");

/*
// To remove the element
document.body.remove(startBtn);
*/

// To make element appear on the body
// document.body.append(usernameLabel);
document.body.append(username);
document.body.append(startBtn);
startBtn.innerText = "Start";

let updatedUsername = username;
/* Stupid events */

function newBody()
{
	let scoreNum = 0;
	document.body.style.backgroundColor = "pink";
	let ground = document.createElement("div");
	document.body.appendChild(ground);
	ground.className = "ground";
	let score = document.createElement("h2");
	document.body.appendChild(score);
	score.className = "score";
	score.textContent = `SCORE: ${scoreNum}`;
	let imgMo = document.createElement("img");
	imgMo.alt = "imgMo";
	imgMo.src = "assets/mouse.png";
	document.body.appendChild(imgMo);
	imgMo.className = "imgMo";
}

startBtn.onclick = function()
{
	if (username.value.includes(" ")){ alert("your username can't include spaces"); }
	else{
		console.log(`Game started ${username.value}`);
		username.remove();
		usernameL.remove();
		startBtn.remove();
		newBody()
	}
}


// NEW BODY
class MouseI
{
	// This class needs two inputs X Y
	// To know where it's position
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
	}

	draw()
	{
		
		console.log(`The position x: ${this.x}, y: ${this.y}`);
	}

	moving(){}
}


/* Stupid screen events */