
const traysBtns = document.querySelectorAll(".folder-exe .sidePanel .tray")

traysBtns.forEach((trayBtn)=>{
    const tray = trayBtn.querySelector("ul")
    trayBtn.addEventListener("click",()=>{
        tray.classList.toggle("isActive")
    })
})
