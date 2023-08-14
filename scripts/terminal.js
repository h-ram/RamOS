
const program = document.querySelector(".terminal-exe")
const terminal = document.querySelector(".terminal-exe main")
const history = document.querySelector(".terminal-exe .history")
const inputBox = document.querySelector(".terminal-exe input")

const validCommands = ["theme","about","quote","neofetch","date","art","exit","clear","help","ls"]

function print(msg,{color="white",type="h3"} = {}){
    const element = document.createElement(type)
    element.classList.add(color)
    if(lightMode) element.classList.add("lightMode")
    history.appendChild(element)
    const lines = msg.split('\n')
    function printLineByLine(index){
        if(index >= lines.length) return
        element.textContent += lines[index] + "\n"
        terminal.scrollTop = terminal.scrollHeight; // keeps scroll on the prompt
        setTimeout(()=>{printLineByLine(index+1)},50)
    }
    printLineByLine(0)
    // element.textContent = msg;
}

inputBox.addEventListener("keypress",(event)=>{
    terminal.scrollTop = terminal.scrollHeight; // keeps scroll on the prompt
    if(event.key != "Enter") return
    const command = inputBox.value.replace(/\s+/g, '').toLowerCase();
    inputBox.value = "" //clear prompt
    print(`User@RamOS $ ~ ${command}`,{color:"green"})
    checkCommand(command);
})

function checkCommand(command){
    if(!validCommands.includes(command)){
        print(`${command} : Command Not Found`)
        return
    }else{
        executeCommand(command)
    }
}

function executeCommand(command){
    switch(command){
        case "clear":
            history.innerHTML = ""
            break;
        case "help":
        case "ls":
            print(helpMsg)
            break;
        case "theme":
            switchTheme();
            break;
        case "about":
            print(aboutMsg,{color:"yellow",type:"h4"})
            break;
        case "quote":
            const quote = quotes[Math.floor(Math.random()*quotes.length)]
            print(quote,{color:"blue"})
            break;
        case "date":
            print(new Date().toLocaleString())
            break;
        case "neofetch":
            print(neofetch,{type:"h5"})
            break;
        case "art":
            const art = arts[Math.floor(Math.random()*arts.length)]
            print(art,{type:"h4"})
            break;
        case "exit":
            program.style.animation = "closeWindow 1s 0s forwards"
            document.querySelector(".terminalExe").classList.remove("isActive")
            break;
    }
}
let lightMode = false;
function switchTheme(){
    const everything = program.querySelectorAll("*")
    everything.forEach((thing)=>{
        thing.classList.toggle("lightMode")
    })
    lightMode = !lightMode;
}
// focus on inputBox when terminal is clicked 
terminal.addEventListener("click",()=>{
    inputBox.focus()
})

/* on load */
setTimeout(()=>{
    print(loadMsg,{color:"yellow"})
    print("Type 'help' or 'ls' for list of commands!")
})


/*========================== MESSAGES ============================*/
/*================================================================*/

const helpMsg =
`   _________________________________
 / \\                                \\.
|   |   theme  -- Change Theme      |.
 \\_ |   about  -- About Me          |.
    |   quote  -- Random Quote      |.
    |   neofetch -- System Info     |.
    |   date   -- current date      |.
    |   art    -- Random Ascii Art  |.
    |   clear  -- Clear Terminal    |.
    |   help   -- List Commands     |.
    |   exit   -- close Terminal    |.
    |   ____________________________|___
    |  /                               /.
    \\_/_______________________________/.`

const loadMsg =
`██████╗  █████╗ ███╗   ███╗       ██████╗ ███████╗
██╔══██╗██╔══██╗████╗ ████║      ██╔═══██╗██╔════╝
██████╔╝███████║██╔████╔██║█████╗██║   ██║███████╗
██╔══██╗██╔══██║██║╚██╔╝██║╚════╝██║   ██║╚════██║
██║  ██║██║  ██║██║ ╚═╝ ██║      ╚██████╔╝███████║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝       ╚═════╝ ╚══════╝`

const aboutMsg =
` ____________________________
|  ________________________  |      ████████████████████████
| |                        | |      ████████████████████████
| |  FullStack Developer   | |      ████████████████████████
| |  Expert At :           | |      ████████████████████████
| |     > Vanilla JS       | |      ██████████  ████    ████
| |     > React            | |      ██████████  ██  ████████
| |     > NextJs           | |      ██████████  ████    ████
| |     > NodeJs           | |      ██████████  ████████  ██
| |                        | |      ██████████  ██  ████  ██
| |________________________| |      ██████    ██████    ████
|____________________________|      ████████████████████████`



const quotes =[
    `“Yesterday is history, tomorrow is a mystery, but today is a gift.
That is why it is called the present.” 
                                  – Master Oogway  `,
    `“If you only do what you can do,
you’ll never be better than what you are.” 
                                  – Shifu`,
    `“It’s not the size of the wand that matters,
it’s the magic in the stick.”( ͡° ͜ʖ ͡°) 
                                  – Po`,
    `“No This is Patrick” – Patrick Star`,
    `“Is mayonnaise an instrument?” – Patrick Star`,
    `"My mama always said, Life is like a box of chocolates;
you never know what you're gonna get." 
                                  – Forrest Gump `,
    `“It ain't about how hard you hit.
It's about how hard you can get hit and keep moving forward.” 
                                  – Rocky Balboa`,
    `“May the Force be with you” – Star Wars`,
    `“The journey of a thousand miles begins with one step.” -  Lao Tzu `,
    `“Your time is limited, don't waste it living someone else's life” – Steve Jobs `,
    `“Stay hungry, stay foolish.” – Steve Jobs`,
    `“The only way to do great work is to love what you do.” – Steve Jobs`,
    `“Remembering that you are going to die is the best way
I know to avoid the trap of thinking you have something to lose.” 
                                  – Steve Jobs `,
]    

// const neofetch = 
// `                   -\`                    ram@RamArch 
//                   .o+\`                   ----------- 
//                  \`ooo/                   OS: ${navigator.platform} 
//                 \`+oooo:                  Type : ${deviceType} 
//                \`+oooooo:                 Browser : ${browserName} 
//                -+oooooo+:                Date : ${date.toLocaleString()} 
//              \`/:-:++oooo+:               Language: ${navigator.language} 
//             \`/++++/+++++++:              Shell: RSH 
//            \`/++++++++++++++:             Resolution: ${window.screen.width}x${window.screen.height}
//           \`/+++ooooooooooooo/\`           WM: xmonad 
//          ./ooosssso++osssssso+\`          Theme: Adwaita [GTK2/3] 
//         .oossssso-\`\`\`\`/ossssss+\`         Icons: Adwaita [GTK2/3] 
//        -osssssso.      :ssssssso.        Terminal: yakuake 
//       :osssssss/        osssso+++.       
//      /ossssssss/        +ssssooo/-       
//    \`/ossssso+/:-        -:/+osssso+-     
//   \`+sso+:-\`                 \`.-/+oso:
//  \`++:.                           \`-/+/                           
//  .\`                                 \`/                           
// `
const userAgent = navigator.userAgent;
let browser;
if (userAgent.includes('Firefox')) {
  browser= 'Mozilla Firefox';
} else if (userAgent.includes('Chrome')) {
  browser= 'Google Chrome';
} else if (userAgent.includes('Safari')) {
  browser= 'Apple Safari';
} else if (userAgent.includes('Edge')) {
  browser= 'Microsoft Edge';
} else if (userAgent.includes('Opera') || userAgent.includes('OPR')) {
  browser= 'Opera';
} else if (userAgent.includes('Trident') || userAgent.includes('MSIE')) {
  browser= 'Internet Explorer';
} else {
  browser= 'Unknown Browser';
}
const neofetch = 
`                  ▄
                 ▄█▄
                ▄███▄                   User@RamOS
               ▄█████▄                  ----------
              ▄███████▄                 OS: RamOS 
             ▄ ▀▀██████▄                Type : Desktop 
            ▄██▄▄ ▀█████▄               Browser : ${browser}
           ▄█████████████▄              Date : ${new Date().toLocaleString()}
          ▄███████████████▄             Language : ${navigator.language}
         ▄█████████████████▄            Shell : RSH
        ▄███████████████████▄           Resolution : ${window.screen.width}X${window.screen.height}
       ▄█████████▀▀▀▀████████▄          Theme : ${lightMode?"Light":"Dark"}
      ▄████████▀      ▀███████▄         
     ▄█████████        ████▀▀██▄
    ▄██████████        █████▄▄▄
   ▄██████████▀        ▀█████████▄
  ▄██████▀▀▀              ▀▀██████▄
 ▄███▀▀                       ▀▀███▄
▄▀▀                               ▀▀▄`

const arts=[
`▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████`,
`───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───
───█▒▒░░░░░░░░░▒▒█───
────█░░█░░░░░█░░█────
─▄▄──█░░░▀█▀░░░█──▄▄─
█░░█─▀▄░░░░░░░▄▀─█░░█`,
`──────▄▀▄─────▄▀▄
─────▄█░░▀▀▀▀▀░░█▄
─▄▄──█░░░░░░░░░░░█──▄▄
█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█`,
`───▄▄▄
─▄▀░▄░▀▄
─█░█▄▀░█
─█░▀▄▄▀█▄█▄▀
▄▄█▄▄▄▄███▀`,
`░▄▄▄▄░
▀▀▄██►
▀▀███►
░▀███►░█►
▒▄████▀▀`,
`─▄▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▄
█░░░█░░░░░░░░░░▄▄░██░█
█░▀▀█▀▀░▄▀░▄▀░░▀▀░▄▄░█
█░░░▀░░░▄▄▄▄▄░░██░▀▀░█
─▀▄▄▄▄▄▀─────▀▄▄▄▄▄▄▀`,
`──────▄▀─
─█▀▀▀█▀█─
──▀▄░▄▀──
────█────
──▄▄█▄▄──`,
`▄▄▀█▄───▄───────▄
▀▀▀██──███─────███
░▄██▀░█████░░░█████░░
███▀▄███░███░███░███░▄
▀█████▀░░░▀███▀░░░▀██▀`,
`░░░░░░░░░░░▄██
░░░░░░░░░▄████
░░░░░░░▄██████
░▄██▄▄███▀░██
████████▀░░█`,
`──▄──▄────▄▀
───▀▄─█─▄▀▄▄▄
▄██▄████▄██▄▀█▄
─▀▀─█▀█▀▄▀███▀
──▄▄▀─█──▀▄▄`,
`░░▄▄▄░░▄▄██████▀
░▀▀██░███████▀▀
░▄█▀░███████▀
██▄▄███████████▄▄
▀█████████████▀`,
`█──██████────██████──█
█─██────██──██────██─█
─███─██─██████─██─███
──██────██──██────██
───██████────██████`,
`░▄▌░░░░░░░░░▄
████████████▄
░░░░░░░░▀▐████
░░░░░░░░░░░▐██▌`,
`──▄▄██████▄▄
▄██▀▄█▄▄█▄▀██▄
▀▀▀▄██▀▀██▄▀▀▀
─▄███─██─███▄
─█████▄▄█████`,
`────█▀█▄▄▄▄─────██▄
────█▀▄▄▄▄█─────█▀▀█
─▄▄▄█─────█──▄▄▄█
██▀▄█─▄██▀█─███▀█
─▀▀▀──▀█▄█▀─▀█▄█▀`,
`─▄▀─▄▀
──▀──▀
█▀▀▀▀▀█▄
█░░░░░█─█
▀▄▄▄▄▄▀▀`,
`─────▀▄▀─────▄─────▄
──▄███████▄──▀██▄██▀
▄█████▀█████▄──▄█
███████▀████████▀
─▄▄▄▄▄▄███████▀`,
`────────▄█▀▄
──────▄██▀▀▀▀▄
────▄███▀▀▀▀▀▀▀▄
──▄████▀▀▀▀▀▀▀▀▀▀▄
▄█████▀▀▀▀▀▀▀▀▀▀▀▀▀▄`,
`▒▓▒▓▒▓▒▓▒▓▒▓─▄▀▀▀▄
─██▀████▀██──▀▄▀──█
O▀████████▀O─────█
───▀█▄▄█▀────────█
──▓▒▓▒▓▒▓▒───────█`,
`──▄███▀▄─────▄▀███▄
──██████▀▀─▀▀██████
─████─█──▄▄▄──█─████
─██▀█─█─█▄▀▄█─█─█▀██
▀▀█▄▄█▀─▀███▀─▀█▄▄█▀▀`,
`──▄█▀█▄─────────██
▄████████▄───▄▀█▄▄▄▄
██▀▼▼▼▼▼─▄▀──█▄▄
█████▄▲▲▲─▄▄▄▀───▀▄
██████▀▀▀▀─▀────────▀▀`,
`───▄██▄─────────────▄▄
──█████▄▄▄▄───────▄▀
────▀██▀▀████▄───▄▀
───▄█▀▄██▄████▄─▄█
▄▄█▀▄▄█─▀████▀██▀`
]