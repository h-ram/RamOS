let memes
fetch("https://api.imgflip.com/get_memes")
.then((response)=>response.json())
.then((data)=> {
    memes = data.data.memes;
    console.log(memes)
})
.catch((error)=>{console.log("error : "+ error)})

const memeImg = document.querySelector(".memes-exe img")
const newMemeBtn = document.querySelector(".memes-exe .newMeme")
newMemeBtn.addEventListener("click",()=>{
    const meme = memes[Math.floor(Math.random()*100)].url
    memeImg.setAttribute("src",meme);
})