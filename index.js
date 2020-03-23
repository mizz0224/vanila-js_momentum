const title=document.getElementById("title");
colorlist = ["red","green","blue"]
colorcount=0;
function handleResize(){
    title.style.color=colorlist[colorcount];
    colorcount++;
    if(colorcount==3)
    {
        colorcount=0;
    }
}


window.addEventListener("click",handleResize);
let newcollor=prompt("insert new color");
title.style.color=newcollor; 