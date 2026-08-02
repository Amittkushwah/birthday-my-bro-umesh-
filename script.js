// ===============================
// Happy Birthday - Umesh Kushwaha
// script.js
// ===============================

// Floating Balloons & Hearts
const emojis = ["🎈","🎉","🎂","❤️","✨","🎁","🥳","💖"];

function createEmoji(){

    const item = document.createElement("div");

    item.className = "balloon";

    item.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

    item.style.left = Math.random()*100 + "%";

    item.style.fontSize = (25 + Math.random()*35) + "px";

    item.style.animationDuration = (6 + Math.random()*8) + "s";

    document.body.appendChild(item);

    setTimeout(()=>{
        item.remove();
    },14000);

}

setInterval(createEmoji,500);

// ----------------------------
// Typewriter Effect
// ----------------------------

const message =

"Happy Birthday Umesh Kushwaha ❤️ May God bless you with Happiness, Success, Good Health and Endless Joy.";

const typing = document.getElementById("typing");

if(typing){

let i=0;

function type(){

if(i<message.length){

typing.innerHTML += message.charAt(i);

i++;

setTimeout(type,70);

}

}

type();

}

// ----------------------------
// Music
// ----------------------------

const music = document.getElementById("music");

const musicBtn = document.getElementById("musicBtn");

if(musicBtn){

musicBtn.onclick=function(){

if(music.paused){

music.play();

musicBtn.innerHTML="⏸ Pause Music";

}else{

music.pause();

musicBtn.innerHTML="▶ Play Music";

}

}

}

// ----------------------------
// Countdown
// ----------------------------

const countdown=document.getElementById("countdown");

if(countdown){

const birthday=new Date("August 3, 2026 00:00:00").getTime();

setInterval(()=>{

const now=new Date().getTime();

const gap=birthday-now;

const days=Math.floor(gap/(1000*60*60*24));

const hours=Math.floor((gap%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((gap%(1000*60*60))/(1000*60));

const seconds=Math.floor((gap%(1000*60))/1000);

countdown.innerHTML=

days+" Days "

+hours+" Hours "

+minutes+" Minutes "

+seconds+" Seconds";

},1000);

}

// ----------------------------
// Auto Image Slider
// ----------------------------

const slides=document.querySelectorAll(".slide");

let current=0;

function showSlide(){

if(slides.length==0) return;

slides.forEach((slide)=>{

slide.style.display="none";

});

slides[current].style.display="block";

current++;

if(current>=slides.length){

current=0;

}

}

showSlide();

setInterval(showSlide,3000);

// ----------------------------
// Fade Animation
// ----------------------------

const observer=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll(".fade").forEach((el)=>{

el.style.opacity=0;

el.style.transform="translateY(50px)";

el.style.transition="1s";

observer.observe(el);

});

// ----------------------------
// Random Background Colors
// ----------------------------

const colors=[
"#ff4d94",
"#ff9800",
"#00bcd4",
"#8bc34a",
"#9c27b0"
];

setInterval(()=>{

document.documentElement.style.setProperty(

"--theme",

colors[Math.floor(Math.random()*colors.length)]

);

},6000);

// ----------------------------
// Greeting Popup
// ----------------------------

setTimeout(()=>{

alert("🎂 Happy Birthday Umesh Kushwaha! ❤️🎉");

},1200);

// ----------------------------
// Scroll to Top Button
// ----------------------------

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.style.position="fixed";
topBtn.style.bottom="20px";
topBtn.style.right="20px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#ff4d94";
topBtn.style.color="white";
topBtn.style.fontSize="20px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";

document.body.appendChild(topBtn);

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ----------------------------
// Console Message
// ----------------------------

console.log("🎂 Happy Birthday Umesh Kushwaha ❤️");