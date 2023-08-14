
const projects = document.querySelectorAll(".projects-exe .project")
const previewImg = document.querySelector(".projects-exe .preview .card img")
const previewTitle = document.querySelector(".projects-exe .preview .card h1")
const previewDesc = document.querySelector(".projects-exe .preview .card p")
const previewURL = document.querySelector(".projects-exe .preview .card a")
const data = {
    "p-1":{img:"./assets/ramos.png",title:"RamOS",url:".",desc:"Parody Operating System, With a KDE Plasma-like Desktop Environement"},
    "p-2":{img:"./assets/ramsh.png",title:"RamSH",url:"RamSH",desc:"Lightweight Terminal Emulator with few goofy commands"},
    "p-3":{img:"./assets/portfolio.png",title:"Portfolio",url:"portfolio",desc:"My Portfolio Website"}
}
projects.forEach((project)=>{
    project.addEventListener("click",()=>{
        const id = project.id
        console.log(data[id].img)
        console.log(previewImg.src)
        previewImg.setAttribute("src",data[id].img)
        previewTitle.textContent = data[id].title
        previewURL.setAttribute("href","https://h-ram.github.io/"+ data[id].url)
        previewDesc.textContent = data[id].desc
    })
})