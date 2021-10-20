var len = document.querySelectorAll(".drum").length;
console.log(len);
for(var i=0;i<len;i++){
  //console.log(i);
document.querySelectorAll("button")[i].addEventListener("click",clickhandle);
}

function clickhandle(){
//alert("I got clicked !!");
console.log(this.style.color="white");
var audio;
if(this.innerHTML=="w")
audio = new Audio('sounds/tom-1.mp3');
else if (this.innerHTML=="a")
audio = new Audio('sounds/tom-2.mp3');
else if (this.innerHTML=="s")
audio = new Audio('sounds/tom-3.mp3');
else if (this.innerHTML=="d")
audio = new Audio('sounds/tom-4.mp3');
else if (this.innerHTML=="j")
audio = new Audio('sounds/crash.mp3');
else if (this.innerHTML=="k")
audio = new Audio('sounds/kick-bass.mp3');
else if (this.innerHTML=="l")
audio = new Audio('sounds/snare.mp3');
audio.play();
}
