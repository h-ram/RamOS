
//================ Updating Date Widget =================
const dateWidget = document.querySelector(".dateWidget")
const date = new Date();
setInterval(()=>{
    dateWidget.textContent = new Date().toLocaleString().split(",")[1];
},1000)

//================ Dragging Windows =================
const openWindow = document.querySelector(".window")
const titleBar = document.querySelector(".window .titleBar")
function moveWindow(event,barX,barY){
    openWindow.style.left = (event.pageX-barX) + "px"
    openWindow.style.top = (event.pageY-barY) + "px"
}
titleBar.addEventListener("mousedown",(event)=>{
    const bar = titleBar.getBoundingClientRect();
    var x = event.pageX-bar.left;
    var y = event.pageY-bar.top;
    function handleMove(event){
            moveWindow(event,x,y)
    }   
    document.addEventListener("mousemove",handleMove)
    titleBar.addEventListener("mouseup",()=>{
        document.removeEventListener("mousemove",handleMove);
    })
})
//================ Closing Windows =================
const closeBtn = document.querySelector(".closeButton")
closeBtn.addEventListener("click",()=>{
    openWindow.style.animation = "closeWindow 1s 0s forwards"
})
//================ Opening Windows =================
const executables = document.querySelectorAll(".exe")
executables.forEach((exe) =>{
    exe.addEventListener("click",()=>{
        console.log("openened")
        openWindow.style.animation = "openWindow 1s 0s forwards"
    })
})