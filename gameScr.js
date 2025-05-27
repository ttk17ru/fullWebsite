/* Made by TTK */

/* Import data */
var marioC = document.getElementById("mario");
var leftAr = document.getElementById("leftAr");
var rightAr = document.getElementById("rightAr");
var upAr = document.getElementById("upAr");
var downAr = document.getElementById("downAr");
var Xbtn = document.getElementById("Xbtn");
let isMoving = false;


function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function myFunction() {
  console.log("Before wait");
  await wait(2000); // waits 2 seconds
  console.log("After wait");
}

leftAr.addEventListener("mousedown", () => {
    if (isMoving) return; // prevent multiple intervals
    isMoving = true;
    marioC.style.transform = "scaleX(-1)"; // face left

    moveInterval = setInterval(async () => {
        if (!isMoving) return;
        
        marioC.src = "updatedAssets/Mario2.png";
        marioC.style.left = `calc(${marioC.style.left || "0rem"} - 1.5rem)`;
        await wait(100);
        
        marioC.src = "updatedAssets/Mario3.png";
        marioC.style.left = `calc(${marioC.style.left || "0rem"} - 1.5rem)`;
        await wait(100);

		marioC.src = "updatedAssets/Mario4.png";
        marioC.style.left = `calc(${marioC.style.left || "0rem"} - 1.5rem)`;
        await wait(100);
        
        marioC.src = "updatedAssets/Mario1.png";
    }, 200); // every 200ms repeat animation + move
});

leftAr.addEventListener("mouseup", () => {
    isMoving = false;
    clearInterval(moveInterval);
    marioC.src = "updatedAssets/Mario1.png";
});

rightAr.addEventListener("mousedown", () => {
    if (isMoving) return;
    isMoving = true;
    marioC.style.transform = "scaleX(1)"; // face right

    moveInterval = setInterval(async () => {
        if (!isMoving) return;
        
        marioC.src = "updatedAssets/Mario2.png";
        marioC.style.left = `calc(${marioC.style.left || "0rem"} + 1.5rem)`;
        await wait(100);
        
        marioC.src = "updatedAssets/Mario3.png";
        marioC.style.left = `calc(${marioC.style.left || "0rem"} + 1.5rem)`;
        await wait(100);

		marioC.src = "updatedAssets/Mario4.png";
        marioC.style.left = `calc(${marioC.style.left || "0rem"} + 1.5rem)`;
        await wait(100);
        
        marioC.src = "updatedAssets/Mario1.png";
    }, 200);
});

rightAr.addEventListener("mouseup", () => {
    isMoving = false;
    clearInterval(moveInterval);
    marioC.src = "updatedAssets/Mario1.png";
});

/* Key listeners */

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function listening() {
    document.addEventListener("keydown", async function(event) {
        if (isMoving) return;

        if (event.key === "ArrowRight") {
            isMoving = true;
            marioC.style.transform = "scaleX(1)"; // face right

            marioC.src = "updatedAssets/Mario2.png";
            marioC.style.left = `calc(${marioC.style.left || "0rem"} + 1.5rem)`;
            await wait(100);

            marioC.src = "updatedAssets/Mario3.png";
            marioC.style.left = `calc(${marioC.style.left || "0rem"} + 1.5rem)`;
            await wait(100);

			marioC.src = "updatedAssets/Mario4.png";
            marioC.style.left = `calc(${marioC.style.left || "0rem"} + 1.5rem)`;
            await wait(100);

            marioC.src = "updatedAssets/Mario1.png";
            console.log("Right Arrow pressed");
            isMoving = false;
        } else if (event.key === "ArrowLeft") {
            isMoving = true;
            marioC.style.transform = "scaleX(-1)"; // face left

            marioC.src = "updatedAssets/Mario2.png";
            marioC.style.left = `calc(${marioC.style.left || "0rem"} - 1.5rem)`;
            await wait(100);

            marioC.src = "updatedAssets/Mario3.png";
            marioC.style.left = `calc(${marioC.style.left || "0rem"} - 1.5rem)`;
            await wait(100);

			marioC.src = "updatedAssets/Mario4.png";
            marioC.style.left = `calc(${marioC.style.left || "0rem"} - 1.5rem)`;
            await wait(100);

            marioC.src = "updatedAssets/Mario1.png";
            console.log("Left Arrow pressed");
            isMoving = false;
        } else if (event.key === "ArrowUp") {
            console.log("Up Arrow pressed");
        } else if (event.key === "ArrowDown") {
            console.log("Down Arrow pressed");
        }
    });
}

listening();
