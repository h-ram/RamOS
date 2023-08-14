
const traysBtns = document.querySelectorAll(".folder-exe .sidePanel .tray h3")

traysBtns.forEach((trayBtn)=>{
    const tray = trayBtn.nextElementSibling;
    trayBtn.addEventListener("click",()=>{
        tray.classList.toggle("isActive")
    })
})

const codeContainer = document.querySelector(".folder-exe .container p")
const img = document.querySelector(".folder-exe .container img")

const assets = document.querySelectorAll(".folder-exe .sidePanel .assets li")
assets.forEach((asset)=>{
    asset.addEventListener("click",()=>{
        codeContainer.classList.remove("isActive")
        img.classList.add("isActive")
        const imgURL = asset.textContent;
        img.src = `./assets/${imgURL}`
    })
})

const styles = document.querySelectorAll(".folder-exe .sidePanel .styles li")
const scripts = document.querySelectorAll(".folder-exe .sidePanel .scripts li")
const codes = [...styles,...scripts] 

codes.forEach((code)=>{
    code.addEventListener("click",()=>{
        img.classList.remove("isActive")
        codeContainer.classList.add("isActive")
        const fileName = code.textContent;
        let url = fileName.split(".")[1] === "js"? "./scripts/" : "./styles/";
        url += fileName;
        fetch(url)
            .then(response => response.text())
            .then(fileCode =>{
                codeContainer.textContent = fileCode;
            })
            .catch(error =>{
                codeContainer.textContent = "ERROR , Can't Fetch Code \n Error : " + error;
            })
    })
})

  