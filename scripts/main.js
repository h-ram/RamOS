
//================ Updating Date Widget =================
const dateWidget = document.querySelector(".dateWidget")
const date = new Date();
setInterval(()=>{
    dateWidget.textContent = new Date().toLocaleString().split(",")[1];
},1000)



//================ Opening Windows =================
const executables = document.querySelectorAll(".exe")
executables.forEach((exe) =>{
    exe.addEventListener("click",()=>{
        const id = exe.id;
        const currentWindow = document.querySelector(`#w-${id}`)
        currentWindow.style.animation = "openWindow 1s 0s forwards"
        exe.classList.add("isActive") 
        //================ Closing Windows =================
        const closeBtn = currentWindow.querySelector(`.closeButton`)
        closeBtn.addEventListener("click",()=>{
            currentWindow.style.animation = "closeWindow 1s 0s forwards"
            exe.classList.remove("isActive")
        })
        //================ Dragging Windows =================
        const titleBar = currentWindow.querySelector(".titleBar")
        function moveWindow(event,barX,barY){
            currentWindow.style.left = (event.pageX-barX) + "px"
            currentWindow.style.top = (event.pageY-barY) + "px"
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
        //================ Refocusing Windows =================
        // var topWindow = 2;
        // currentWindow.addEventListener("mousedown",()=>{
        //     if(currentWindow.style.zIndex >= topWindow) return
        //     currentWindow.style.zIndex = topWindow+1;
        //     topWindow++;
        //     console.log("jamp")
        // })
        //================ Minimizing Windows =================
        const hideBtn = currentWindow.querySelector(`.hideButton`)
        hideBtn.addEventListener("click",()=>{
            currentWindow.style.animation = "closeWindow 1s 0s forwards"
        })
    })
})
