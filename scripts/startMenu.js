const startMenu_exe = document.querySelector(".startMenu-exe")
const startMenu = document.querySelector(".start__buttons")
console.log(startMenu)
startMenu_exe.addEventListener("click",()=>{
    startMenu.classList.toggle("isActive")
})

const rebootBtn = document.querySelector(".reboot__button")
const rebootScreen = document.querySelector(".rebootScreen")
rebootBtn.addEventListener("click",()=>{
    rebootScreen.classList.toggle("isActive")
    setTimeout(()=>{
        location.reload()
    },5000)
})

const shutdownBtn = document.querySelector(".shutdown__button")
const shutdownScreen = document.querySelector(".shutdownScreen")
const offScreen = document.querySelector(".offScreen")
shutdownBtn.addEventListener("click",()=>{
    shutdownScreen.classList.toggle("isActive")
    setTimeout(()=>{
        offScreen.classList.toggle("isActive")
    },5000)
})

const powerBtn = document.querySelector(".powerBtn")
powerBtn.addEventListener("click",()=>{
    location.reload();
})