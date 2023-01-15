const bodyElem = document = document.querySelector("body")

bodyElem.addEventListener("mousemove",(event)=> {
    
    const xPos = event.offsetX
    const yPos = event.offsetY
    const spanElem = document.createElement("span");
    spanElem.style.left = xPos+"px";
    spanElem.style.top = yPos +"px";
    const size = Math.random()*100;
    spanElem.style.width = size + "px"
    spanElem.style.height = size + "px"
    bodyElem.appendChild(spanElem);
    setTimeout(()=>{
        spanElem.remove();

    },3000)

});