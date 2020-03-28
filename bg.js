const body = document.querySelector("body");
const IMG_Number = 5;

function paintImage(imgNumber)
{
    const image = new Image();
    image.src = `backGroundImages/${imgNumber+1}.jfif`;
    image.classList.add("bgImage");
    body.appendChild(image);

}
function genRandom()
{
    const number = Math.floor(Math.random()*IMG_Number);
    return number;
}
function init()
{
    const  randonNumber = genRandom();
    paintImage(randonNumber);

}
init();