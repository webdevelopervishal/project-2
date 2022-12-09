const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");


const center = document.querySelector(".center");
//console.log(window.getComputedStyle(orange).backgroundColor);

const bgColor = (selectedElement) => {
   return window.getComputedStyle(selectedElement).backgroundColor;
}

// var color  = bgColor(violet);

// red.addEventListener("mouseenter" , () => {

//    center.style.backgroundColor = color;

// })

const magicColor = (element , color) => {

   return element.addEventListener("mouseenter" , () =>{
      center.style.backgroundColor = color;
   })
}

magicColor(red , bgColor(red));
magicColor(cyan , bgColor(cyan));
magicColor(violet , bgColor(violet));
magicColor(orange , bgColor(orange));
magicColor(pink, bgColor(pink));