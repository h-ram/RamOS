const browserForm = document.querySelector(".browser__window form")
const searchBox = browserForm.querySelector("input")

browserForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    if(searchBox.value === "") return
    const searchURL = "https://www.google.com/search?q="+searchBox.value
    window.open(searchURL,"_blank")
    searchBox.value = ""
})

const luckyBtn = browserForm.querySelector(".luckyBtn")
const funLinks = [
    "https://findtheinvisiblecow.com/",
    "https://papertoilet.com/",
    "https://pointerpointer.com/",
    "https://zoomquilt.org/"
]
luckyBtn.addEventListener("click",()=>{
    const funLink = funLinks[Math.floor(Math.random()*funLinks.length)]
    window.open(funLink,"_blank")
})