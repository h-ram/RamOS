const dateWidget = document.querySelector(".dateWidget")
const date = new Date();
setInterval(()=>{
    dateWidget.textContent = new Date().toLocaleString().split(",")[1];
},1000)