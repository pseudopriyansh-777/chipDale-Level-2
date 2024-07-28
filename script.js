const bricks=document.getElementsByClassName("bricks")[0];
const body=document.getElementsByClassName("body")[0];
console.log(body);
body.addEventListener("mousemove",(event)=>{ //not "onmousemove"
    console.log(event);
    bricks.style.left=`${event.clientX-100}`+"px";
    bricks.style.top=`${event.clientY-100}`+"px";
    console.log(`event.clientY`+"px");
})