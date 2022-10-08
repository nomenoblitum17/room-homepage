"use strict";

const publication1 = document.querySelector(".article-1"),
publication2 = document.querySelector(".article-2"),
publication3 = document.querySelector(".article-3"),
header = document.querySelector(".header"),
navButton = document.getElementById("nav-button"),
closeButton = document.getElementById("close"),
bg = document.querySelector(".bg");

const buttonRight = document.getElementById("button-right"),
buttonleft = document.getElementById("button-left");

const getImage = (device,number) => `url("images/${device}-image-hero-${number}.jpg")`;

const changePublication = (publicationA,publicationB,imgNumber,device)=>{
		publicationA.style.display = "none";
		publicationB.style.display = "flex";
		publicationB.style.animation = "toshow 2s forwards";
		header.style.background = getImage(device,imgNumber);
		header.style.backgroundSize = "cover";
		header.style.backgroundPosition = "center";
},
publicationToRight = device =>{
	if(counter === 1) changePublication(publication1,publication2,2,device),counter++;
	else if(counter === 2) changePublication(publication2,publication3,3,device),counter++;
	else if(counter === 3) changePublication(publication3,publication1,1,device),counter-=2;
},
publicationToLeft = device => {
	if(counter === 1) changePublication(publication1,publication3,3,device),counter +=2;
	else if(counter === 3) changePublication(publication3,publication2,2,device), counter--;
	else if(counter === 2) changePublication(publication2,publication1,1,device), counter--;
}

let counter = 1;

buttonRight.addEventListener("click",()=>{
	if(window.screen.availWidth > 600)publicationToRight("desktop");
	else publicationToRight("mobile")
})

buttonleft.addEventListener("click",()=>{
	if(window.screen.availWidth > 600) publicationToLeft("desktop");
	else publicationToLeft("mobile");
})

navButton.addEventListener("click",()=>{
	document.querySelector(".responsive-nav").style.animation = "grow 1s forwards";
	bg.style.animation = "none"
	bg.style.display = "inherit";
	document.getElementById("body").style.overflow = "hidden";
})

closeButton.addEventListener("click",()=>{
	bg.style.animation = "dissapear 1s forwards"
	setTimeout(()=>bg.style.display = "none",1000)
	document.getElementById("body").style.overflow = "inherit";
})