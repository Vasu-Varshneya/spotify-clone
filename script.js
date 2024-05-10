console.log("hellp")
let songs = ["Arjan%20Vailly.mp3", "Hua%20Main.mp3","Hua%20Main.mp3","Hua%20Main.mp3","Arjan%20Vailly.mp3","Arjan%20Vailly.mp3"]
console.log(songs)
var audio = new Audio(songs[0]);
audio.play();  
let songUL=document.querySelector(".songlist").getElementsByTagName("ul")[0]
for(const song of songs){
    songUL.innerHTML=songUL.innerHTML+`<li>${song.replace("%20"," ")}</li`
}
let currentsong=new Audio();
const playMusic=(track)=>{
    currentsong.src=track;
    play.src="pause.svg"
    currentsong.play()
}
Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
    e.addEventListener("click",element=>{
        playMusic("C:\Users\vasuv\spotify clone 38 WD\songs\Arjan Vailly.mp3")
    }
    )
});
play.addEventListener("click",()=>{
    if(currentsong.paused){
        currentsong.play();
        play.src="pause.svg";
    }
    else{
        currentsong.pause();
        play.src="play1.svg";
    }
})
currentsong.addEventListener("timeupdate",()=>{
    document.querySelector(".circle").style.left=(currentsong.currentTime/currentsong.duration)*100+"%";
})
document.querySelector(".seekbar").addEventListener("click",e=>{
    let percent = (e.offsetX/e.target.getBoundingClientRect().width)*100;
    document.querySelector(".circle").style.left=percent+"%"
    currentsong.currentTime=((currentsong.duration)*percent)/100
})
prev.addEventListener("click",()=>{
    console.log("Previous is clicked.")
    currentsong.src= "C:\Users\vasuv\spotify clone 38 WD\songs\Hua Main.mp3"
    currentsong.play();
})
next.addEventListener("click",()=>{
    console.log("Next is clicked.")
    currentsong.src="C:\Users\vasuv\spotify clone 38 WD\songs\Hua Main.mp3"
    currentsong.play();
})