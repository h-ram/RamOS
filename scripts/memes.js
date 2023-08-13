let memes
fetch("https://api.imgflip.com/get_memes")
.then((response)=>response.json())
.then((data)=> {
    memes = data.data.memes;
})
.catch((error)=>{console.log("error : "+ error)})

const memeImg = document.querySelector(".memes-exe img")
const newMemeBtn = document.querySelector(".memes-exe .newMeme")
newMemeBtn.addEventListener("click",()=>{
    const meme = memes[Math.floor(Math.random()*100)].url
    memeImg.setAttribute("src",meme);
})

const text1 = document.querySelector(".memes-exe .panel .text1")
const text2 = document.querySelector(".memes-exe .panel .text2")
const text3 = document.querySelector(".memes-exe .panel .text3")
const text4 = document.querySelector(".memes-exe .panel .text4")
const text5 = document.querySelector(".memes-exe .panel .text5")

const phrase1 = document.querySelector(".memes-exe .meme .text1")
const phrase2 = document.querySelector(".memes-exe .meme .text2")
const phrase3 = document.querySelector(".memes-exe .meme .text3")
const phrase4 = document.querySelector(".memes-exe .meme .text4")
const phrase5 = document.querySelector(".memes-exe .meme .text5")

text1.addEventListener("input",()=>{
    phrase1.textContent = text1.value;
})
text2.addEventListener("input",()=>{
    phrase2.textContent = text2.value;
})
text3.addEventListener("input",()=>{
    phrase3.textContent = text3.value;
})
text4.addEventListener("input",()=>{
    phrase4.textContent = text4.value;
})
text5.addEventListener("input",()=>{
    phrase5.textContent = text5.value;
})

const memeContainer = document.querySelector(".memes-exe .meme")
const phrases = [phrase1,phrase2,phrase3,phrase4,phrase5]
phrases.forEach((phrase)=>{
    phrase.addEventListener("mousedown",()=>{
        const container = memeContainer.getBoundingClientRect();
        const containerX = container.left;
        const containerY = container.top;
        function handleMove(event){
            const x = event.pageX - containerX;
            const y = event.pageY - containerY;
            phrase.style.left = x + "px" 
            phrase.style.top = y + "px"
        }
        document.addEventListener("mousemove",handleMove)
        phrase.addEventListener("mouseup",()=>{
            document.removeEventListener("mousemove",handleMove)
        })

    })
})

