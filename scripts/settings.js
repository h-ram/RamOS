const settingsExe = document.querySelector('.settings-exe')
const settingsWindow = document.querySelector('.settings-window')
const brightness = document.querySelector(".settings .brightness")
const filter = document.querySelector(".brightness-filter")
//========================= BRIGHTNESS ====================== 
settingsExe.addEventListener("click",()=>{
    console.log(settingsWindow)
    settingsWindow.classList.toggle("isActive") 
})
brightness.addEventListener("input",()=>{
    filter.style.opacity = Math.abs(1-brightness.value/100)
})
//========================= WIDGETS ========================= 
const clock = document.querySelector(".widgets .clock")
const specs = document.querySelector(".widgets .specs")
const weather = document.querySelector(".widgets .weather")

const clockBtn = document.querySelector("#clock__switch")
const specsBtn = document.querySelector("#specs__switch")
const weatherBtn = document.querySelector("#weather__switch")

clockBtn.addEventListener("change",()=>{
    if(clockBtn.checked)
        clock.style.display = "block"
    else
        clock.style.display = "none"
})
specsBtn.addEventListener("change",()=>{
    if(specsBtn.checked)
        specs.style.display = "block"
    else
        specs.style.display = "none"
})
weatherBtn.addEventListener("change",()=>{
    if(weatherBtn.checked)
        weather.style.display = "block"
    else
        weather.style.display = "none"
})

const userAgent = navigator.userAgent;
const resolution = window.screen.width+"X"+window.screen.height;
const timeZone = new Date().getTimezoneOffset()
const userLang = navigator.language;
let OS;
if (userAgent.includes("Win")) {
    OS = "Windows";
} else if (userAgent.includes("Mac")) {
    OS = "Mac";
} else if (userAgent.includes("Linux")) {
    OS = "Linux";
} else if (userAgent.includes("Android")) {
    OS = "Android";
} else if (userAgent.includes("Iphone") || userAgent.includes("Ipad")) {
    OS = "IOS";
} else {
    OS = "Unknown";
}
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const device = isMobile?"Mobile":"Desktop";

let browser ;
if (userAgent.includes("Chrome")) {
    browser = "Chrome";
} else if (userAgent.includes("Firefox")) {
    browser = "FireFox";
} else if (userAgent.includes("Safari")) {
    browser = "Safari";
} else if (userAgent.includes("Edge")) {
    browser = "Edge";
} else if (userAgent.includes("Opera") || userAgent.includes("Opr")) {
    browser = "Opera";
} else if (userAgent.includes("Ie") || userAgent.includes("Trident")) {
    browser = "Internet Explorer";
} else {
    browser = "Unknown";
}
specs.innerHTML= `
<h4>OS : ${OS} </h4j>
<h4>Device : ${device} </h4j>
<h4>Browser : ${browser} </h4j>
<h4>Resolution : ${resolution}</h4>
<h4>Language : ${userLang}</h4>
`